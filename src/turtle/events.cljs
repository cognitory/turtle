(ns turtle.events
  (:require
    [re-frame.core :refer [reg-fx reg-event-db reg-event-fx]]
    [clojure.string :as string]
    [turtle.eval :refer [eval-code]]
    [fipp.clojure :as fipp]
    [goog.crypt.base64 :as base64]))

(reg-fx
  :eval
  (fn [code]
    (eval-code
      [(str '(ns turtle.draw
               (:require
                 [clojure-turtle.core :as t :include-macros true])))
       ; manually aliasing because :refer is not working with eval-str
       (str '(do
               (def forward t/forward)
               (def back t/back)
               (def right t/right)
               (def left t/left)
               (def repeat t/repeat)
               (def penup t/penup)
               (def pendown t/pendown)
               (def setxy t/setxy)
               (def setheading t/setheading)
               (def clean t/clean)
               (def home t/home)
               (def color t/color)
               (def start-fill t/start-fill)
               (def end-fill t/end-fill)
               (def wait t/wait)))
       code])))

(def placeholder-code
  (->> ['(home)
        '(clean)
        '(dotimes [_ 10]
           (right (rand-int 100))
           (forward (rand-int 100)))]
       (map #(with-out-str (fipp/pprint %1 {:width 40})))
       (string/join "")))

(reg-event-fx
  :initialize
  (fn [_ _]
    {:db {:code (let [encoded-code (.-hash js/window.location)]
                  (if (not (string/blank? encoded-code))
                    (base64/decodeString (.substr encoded-code 1))
                    placeholder-code))}
     :dispatch [:store-in-url placeholder-code]}))

(reg-event-fx
  :update-code
  (fn [{state :db} [_ code]]
    {:db (assoc state :code code)
     :dispatch [:store-in-url code]}))

(reg-event-fx
  :run-code
  (fn [{state :db}]
    {:eval (state :code)}))

(reg-event-fx
  :store-in-url
  (fn [_ [_ code]]
    (js/history.replaceState nil "" (str "#" (base64/encodeString code)))))

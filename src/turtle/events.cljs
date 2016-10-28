(ns turtle.events
  (:require
    [re-frame.core :refer [reg-fx reg-event-db reg-event-fx dispatch]]
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
                 [re-frame.core :as r]
                 [clojure-turtle.core :as t :include-macros true])))
       ; manually aliasing because :refer is not working with eval-str
       (str '(do
               (def forward t/forward)
               (def back t/back)
               (def right t/right)
               (def left t/left)
               #_(def repeat t/repeat)
               (def penup t/penup)
               (def pendown t/pendown)
               (def setxy t/setxy)
               (def setheading t/setheading)
               (def clean t/clean)
               (def home t/home)
               (def color t/color)
               (def start-fill t/start-fill)
               (def end-fill t/end-fill)
               #_(def wait t/wait)))
       (str '(set! *print-fn*
                   (fn [& args]
                     (r/dispatch [:console-log args]))))
       (str '(set! *print-err-fn*
                   (fn [& args]
                     (r/dispatch [:console-error args]))))
       code
       (str '(enable-console-print!))]
      (fn [{:keys [error value] :as x}]
        (if error
          (do
            (dispatch [:console-error error])
            (js/console.error (str error))))))))

(def sample-code
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
    {:db {:log []
          :code (let [encoded-code (.-hash js/window.location)]
                  (if (not (string/blank? encoded-code))
                    (base64/decodeString (.substr encoded-code 1))
                    sample-code))}
     :dispatch [:store-in-url sample-code]}))

(reg-event-fx
  :update-code
  (fn [{state :db} [_ code]]
    {:db (assoc state :code code)
     :dispatch [:store-in-url code]}))

(reg-event-fx
  :run-code
  (fn [{state :db}]
    {:db (assoc state :log [])
     :eval (state :code)}))

(reg-event-fx
  :store-in-url
  (fn [_ [_ code]]
    (js/history.replaceState nil "" (str "#" (base64/encodeString code)))))

(reg-event-db
  :console-log
  (fn [state [_ args]]
    (update state :log conj {:log args})))

(reg-event-db
  :console-error
  (fn [state [_ error]]
    (update state :log conj {:error error})))


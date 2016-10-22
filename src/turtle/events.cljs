(ns turtle.events
  (:require
    [re-frame.core :refer [reg-fx reg-event-db reg-event-fx]]
    [clojure.string :as string]
    [turtle.eval :refer [eval-code]]))

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

(reg-event-db
  :initialize
  (fn [_ _]
    {:code
     (string/join "\n"
                  ['(home)
                   '(clean)
                   '(dotimes [_ 10]
                      (right (rand-int 100))
                      (forward (rand-int 100)))])}))

(reg-event-db
  :update-code
  (fn [state [_ code]]
    (assoc state :code code)))

(reg-event-fx
  :run-code
  (fn [{state :db}]
    {:eval (state :code)}))

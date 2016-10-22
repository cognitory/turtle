(ns turtle.events
  (:require
    [re-frame.core :refer [reg-fx reg-event-db reg-event-fx]]
    [clojure.string :as string]
    [turtle.eval :refer [eval-code]]))

(reg-fx
  :eval
  (fn [code]
    (eval-code
      ["(ns turtle.draw
       (:require
       [clojure-turtle.core :as t :include-macros true]))"
       code])))

(reg-event-db
  :initialize
  (fn [_ _]
    {:code
     (string/join "\n"
                  ['(t/home)
                   '(t/clean)
                   '(dotimes [_ 10]
                      (t/right (rand-int 100))
                      (t/forward (rand-int 100)))])}))

(reg-event-db
  :update-code
  (fn [state [_ code]]
    (assoc state :code code)))

(reg-event-fx
  :run-code
  (fn [{state :db}]
    {:eval (state :code)}))

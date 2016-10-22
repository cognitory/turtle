(ns turtle.events
  (:require
    [re-frame.core :refer [reg-event-db]]
    [clojure.string :as string]))

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

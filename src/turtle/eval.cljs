(ns turtle.eval
  (:require
    [cljs.js :refer [empty-state eval-str js-eval]]
    [clojure.string :as string]))

(defn eval-code [code callback]
  (eval-str (empty-state)
            (string/join "\n" code)
            'dummy-symbol
            {:ns 'turtle.draw
             :static-fns true
             :def-emits-var false
             :eval js-eval
             ; NOTE: load does nothing; libs must be reqd by this ns
             :load (fn [name cb]
                     (cb {:lang :clj :source ""}))
             :context :statement}
            callback))

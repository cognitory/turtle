(ns turtle.core
  (:require
    [re-frame.core :refer [dispatch-sync]]
    [reagent.core :as r]
    [turtle.views :as views]))

(enable-console-print!)

(defn render []
  (r/render-component [views/app-view]
    (.. js/document (getElementById "app"))))

(defn ^:export init []
  #_(dispatch-sync [:init-state])
  (render))

(defn ^:export reload []
  (render))






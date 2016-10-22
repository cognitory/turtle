(ns turtle.core
  (:require
    [re-frame.core :refer [dispatch-sync]]
    [reagent.core :as r]
    [turtle.events]
    [turtle.subs]
    [turtle.views :as views]))

(enable-console-print!)

(defn render []
  (r/render-component [views/app-view]
    (.. js/document (getElementById "app"))))

(defn ^:export init []
  (dispatch-sync [:initialize])
  (render))

(defn ^:export reload []
  (render))






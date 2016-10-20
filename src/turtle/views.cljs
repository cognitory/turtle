(ns turtle.views
  (:require
    [reagent.core :as r]
    [turtle.styles :refer [styles-view]]
    [turtle.eval :refer [eval-code]]
    [quil.core :as q :include-macros true]
    [clojure-turtle.core :as t]))

(def editor (atom nil))

(defn editor-view []
  (r/create-class
    {:component-did-mount
     (fn []
       (reset! editor (js/CodeMirror (.. js/document (getElementById "editor"))
                                     (clj->js {:value "(t/home)\n(t/clean)\n(t/forward (rand-int 50))"
                                               :theme "railscasts"
                                               :mode "clojure" }))))
     :reagent-render
     (fn []
       [:div.editor
        [:button {:on-click (fn []
                              (eval-code
                                ["(ns turtle.draw
                                 (:require
                                 [clojure-turtle.core :as t]))"
                                 (.getValue @editor)]))} "RUN"]
        [:div {:id "editor"}]])}))

(def commands
  [(symbol "; commands")
   '(forward 30)
   '(back 30)
   '(right 90)
   '(left 90)
   '(repeat 3
            (all ...))
   '(penup)
   '(pendown)
   '(setxy)
   '(setheading)
   '(clean)
   '(home)
   '(color)
   '(start-fill)
   '(end-fill)
   '(wait)])

(defn command-list-view []
  (into
    [:div.command-list]
    (for [command commands]
      [:div (str command)])))

(defn output-view []
  (r/create-class
    {:component-did-mount
     (fn []
       (q/defsketch example
         :host "turtle-canvas"
         :setup t/setup
         :draw t/draw
         :size [400 400]))

     :reagent-render
     (fn []
       [:div.output
        [:canvas {:id "turtle-canvas"}]]    )}))

(defn app-view []
  [:div.app
   [styles-view]
   [command-list-view]
   [editor-view]
   [output-view]])

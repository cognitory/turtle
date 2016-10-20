(ns turtle.views
  (:require
    [reagent.core :as r]
    [turtle.styles :refer [styles-view]]
    [quil.core :as q :include-macros true]
    [clojure-turtle.core :as t]))

(defn editor-view []
  [:div.editor {:on-click (fn []
                            (t/home)
                            (t/clean)
                            (t/forward 30))}
   (str '(testing))
   ])

(def commands
  ['(forward 30)
   '(back 30)
   '(right 90)
   '(left 90)
   '(repeat 3 (all
                (forward 1)
                (right 1)))
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
    [ :div.command-list]
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

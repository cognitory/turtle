(ns turtle.views
  (:require
    [reagent.core :as r]
    [turtle.styles :refer [styles-view]]
    [turtle.eval :refer [eval-code]]
    [quil.core :as q :include-macros true]
    [clojure-turtle.core :as t]))

(def editor (atom nil))

(defn eval-from-editor! []
  (eval-code
    ["(ns turtle.draw
     (:require
     [clojure-turtle.core :as t]))"
     (.getValue @editor)]))

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
       [:div.editor {:on-key-down (fn [e]
                                   (when (and e.ctrlKey (= 13 e.keyCode))
                                     (eval-from-editor!)))}
        [:button {:on-click (fn []
                              (eval-from-editor!))}
         "RUN"]
        [:div {:id "editor"}]])}))

(def commands
  [(symbol "; commands")
   '(t/forward 30)
   '(t/back 30)
   '(t/right 90)
   '(t/left 90)
   '(t/repeat 3
            (t/all ...))
   '(t/penup)
   '(t/pendown)
   '(t/setxy 0 0)
   '(t/setheading 90)
   '(t/clean)
   '(t/home)
   '(t/color [0 0 255])
   '(t/start-fill)
   '(t/end-fill)
   '(t/wait 1000)])

(defn command-list-view []
  (into
    [:div.command-list]
    (for [command commands]
      [:div (str command)])))

(q/defsketch sketch
  :host "turtle-canvas"
  :no-start true
  :setup t/setup
  :draw t/draw
  :size [400 400])

(defn output-view []
  (r/create-class
    {:component-did-mount
     (fn []
       (sketch))

     :reagent-render
     (fn []
       [:div.output
        [:canvas {:id "turtle-canvas"}]])}))

(defn app-view []
  [:div.app
   [styles-view]
   [command-list-view]
   [editor-view]
   [output-view]])

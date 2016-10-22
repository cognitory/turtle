(ns turtle.views
  (:require
    [reagent.core :as r]
    [re-frame.core :refer [subscribe dispatch]]
    [turtle.styles :refer [styles-view]]
    [quil.core :as q :include-macros true]
    [clojure-turtle.core :as t]))

(defn better-tab [cm]
  ; based on https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785
  (if (.somethingSelected cm)
    (.indentSelection cm "add")
    (.replaceSelection cm
                       (apply str (repeat (.getOption cm "indentUnit") " "))
                       "end"
                       "+input")))


(defn editor-view []
  (let [code (subscribe [:code])]
    (r/create-class
      {:component-did-mount
       (fn []
         (let [editor (js/CodeMirror (.. js/document (getElementById "editor"))
                                (clj->js {:theme "railscasts"
                                          :mode "clojure"
                                          :extraKeys {"Tab" better-tab}
                                          :autofocus true
                                          :matchBrackets true
                                          :value @code}))]
           (.on editor "change" (fn [editor]
                                   (dispatch [:update-code (.getValue editor)])))))
       :reagent-render
       (fn []
         [:div.editor {:on-key-down (fn [e]
                                      (when (and e.ctrlKey (= 13 e.keyCode))
                                        (dispatch [:run-code])))}
          [:button {:on-click (fn []
                                (dispatch [:run-code]))}
           "RUN"]
          [:div {:id "editor"}]])})))

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
  (r/create-class
    {:component-did-mount
     (fn []
       (let [editor (js/CodeMirror (.. js/document (getElementById "command-list"))
                                   (clj->js {:theme "railscasts"
                                             :mode "clojure"
                                             :readOnly true
                                             :value (clojure.string/join "\n" commands)}))]))
     :reagent-render
     (fn []
       [:div {:id "command-list"}])}))

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

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

(defn console-view []
  (let [logs (subscribe [:log])]
    (fn []
      (into [:div.console]
            (for [log @logs]
              (cond
                (log :error) [:div.error.message
                              (.. (log :error) -cause -message)]
                (log :log) [:div.log.message
                            (log :log)]))))))

(defn editor-view []
  (let [code (subscribe [:code])]
    (r/create-class
      {:component-did-mount
       (fn []
         (doto (js/CodeMirror (.. js/document (getElementById "editor"))
                              (clj->js {:theme "railscasts"
                                        :mode "clojure"
                                        :extraKeys {"Tab" better-tab}
                                        :autofocus true
                                        :matchBrackets true
                                        :value @code}))
           (.on "change" (fn [editor]
                           (dispatch [:update-code (.getValue editor)])))))
       :reagent-render
       (fn []
         [:div.editor {:on-key-down (fn [e]
                                      (when (and e.ctrlKey (= 13 e.keyCode))
                                        (dispatch [:run-code])))}
          [:button {:on-click (fn []
                                (dispatch [:run-code]))}
           "RUN"]
          [console-view]
          [:div {:id "editor"}]])})))

(def commands
  [(symbol "; turtle functions")
   ""
   '(forward 30)
   '(back 30)
   '(right 90)
   '(left 90)
   #_(repeat 3
             (all ...))
   '(penup)
   '(pendown)
   '(setxy 0 0)
   '(setheading 90)
   '(clean)
   '(home)
   '(color [0 0 255])
   '(start-fill)
   '(end-fill)
   #_(wait 1000)
   ""
   (symbol "; clojure functions")
   ""
   '(dotimes [n 10] ...)
   '(print ...)
   '(defn name [args] ...)])

(defn command-list-view []
  (r/create-class
    {:component-did-mount
     (fn []
       (js/CodeMirror (.. js/document (getElementById "command-list"))
                      (clj->js {:theme "railscasts"
                                :mode "clojure"
                                :readOnly true
                                :value (clojure.string/join "\n" commands)})))
     :reagent-render
     (fn []
       [:div {:id "command-list"}])}))

(q/defsketch sketch
  :host "turtle-canvas"
  :no-start true
  :setup t/setup
  :draw t/draw
  :size [400 400])

(defn turtle-view []
  (r/create-class
    {:component-did-mount
     (fn []
       (sketch))

     :reagent-render
     (fn []
       [:div.turtle
        [:canvas {:id "turtle-canvas"}]])}))

(defn app-view []
  [:div.app
   [styles-view]
   [command-list-view]
   [editor-view]
   [turtle-view]])

(ns turtle.styles
  (:require [garden.core :refer [css]]))

(defn code-area []
  {:padding "1em"
   :height "100vh"
   :box-sizing "border-box"})

(defn main-styles []
  [:body
   {:margin 0
    :padding 0}

   [:#app
    {:background "#eee"}

    [:.app
     {:display "flex"
      :height "100vh"}

     [:#command-list
      {:width "20%"
       :overflow "hidden"}

      [:.CodeMirror
       (code-area)]]

     [:.editor
      {:width "40%"
       :flex-grow 1
       :overflow "hidden"
       :position "relative"}

      [:button
       {:position "absolute"
        :top "1em"
        :right "1em"
        :z-index 1000}]

      [:.console
       {:position "absolute"
        :z-index 1000
        :bottom "1em"
        :right "1em"
        :left "1em"
        :overflow "scroll"
        :max-height "20vh"}

       [:.message
        {:padding "0.5em"
         :color "white"
         :font-family "monospace"
         :margin-top "2px"
         :border-radius "2px"}

        [:&.log
         {:background "#424155"}]

        [:&.error
         {:background "#da4939"}]]]

      [:.CodeMirror
       (code-area)
       {:background "black"}]]

     [:.turtle
      {:width "400px"
       :background "#ccc"
       :overflow "hidden"}]]]])

(defn styles-view []
  [:style
   {:type "text/css"
    :dangerouslySetInnerHTML
    {:__html (css
               (main-styles))}}])


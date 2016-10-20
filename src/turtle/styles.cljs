(ns turtle.styles
  (:require [garden.core :refer [css]]))

(defn main-styles []
  [:body
   {:margin 0
    :padding 0
    :font-family "\"Open Sans\", Helvetica, Arial, sans-serif"}

   [:#app
    {:background "#eee"}

    [:.app
     {:display "flex"
      :height "100vh"}

     [:.command-list
      {:font-family "monospace"
       :background "black"
       :color "white"
       :width "20%"
       :padding "1em"
       :overflow "hidden"}]

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

      [:.CodeMirror
       {:padding "1em"
        :height "100vh"
        :box-sizing "border-box"}]]

     [:.output
      {:width "400px"
       :background "#ccc"
       :overflow "hidden"}]]]])

(defn styles-view []
  [:style
   {:type "text/css"
    :dangerouslySetInnerHTML
    {:__html (css
               (main-styles))}}])


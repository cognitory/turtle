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
     {:display "flex"}

     [:.command-list
      {:font-family "monospace"
       :width "10em"
       :padding "1em"}]

     [:.editor
      {:width "20em"
       :background "black"
       :color "white"
       :font-family "monospace"
       :padding "1em"}]

     [:.output
      {:width "10em"
       :flex-grow "1"
       :background "#ccc"}]]]])

(defn styles-view []
  [:style
   {:type "text/css"
    :dangerouslySetInnerHTML
    {:__html (css
               (main-styles))}}])


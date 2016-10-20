(defproject turtle "0.0.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227"]
                 [com.google/clojure-turtle "0.3.0-SNAPSHOT"]
                 [re-frame "0.8.0"]
                 [garden "1.3.2"]]

  :plugins [[lein-figwheel "0.5.8"]]

  :figwheel {:server-port 3333
             :reload-clj-files {:clj false
                                :cljc true}}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "turtle.core/reload"}
                        :compiler {:main "turtle.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/turtle.js"
                                   :output-dir "resources/public/js/out"}}]})

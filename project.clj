(defproject turtle "0.0.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227"]
                 [com.google/clojure-turtle "0.3.0-SNAPSHOT"]
                 [re-frame "0.8.0"]
                 [garden "1.3.2"]
                 [fipp "0.6.4"]]

  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.4"]]

  :figwheel {:server-port 3333
             :reload-clj-files {:clj false
                                :cljc true}}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel {:on-jsload "turtle.core/reload"}
                        :compiler {:main "turtle.core"
                                   :asset-path "js/dev/out"
                                   :output-to "resources/public/js/dev/turtle.js"
                                   :output-dir "resources/public/js/dev/out"}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main "turtle.core"
                                   :asset-path "./js/prod/out"
                                   :output-to "resources/public/js/prod/turtle.js"
                                   :output-dir "resources/public/js/prod/out"
                                   :optimizations :simple
                                   :pretty-print false}}]})

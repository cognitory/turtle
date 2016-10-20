# Turtle

A web-based environment to play with [clojure-turtle](https://github.com/google/clojure-turtle), a Clojure library that implements the Logo programming language.


## To Run Locally

The project depends on
`[com.google/clojure-turtle "0.3.0-SNAPSHOT"]`, which is not in clojars.

To get it working locally, you can:

1. `git clone git@github.com:cognitory/turtle.git`
2. `cd turtle`
3. `mkdir checkouts/`
4. `cd checkouts`
5. `git clone git@github.com:google/clojure-turtle.git`
6. cd `clojure-turtle`
5. `lein install`
7. `cd ../../`
8. `lein figwheel`
9. open `http://localhost:3333/`

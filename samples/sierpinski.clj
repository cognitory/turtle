(clean)
(home)

(defn draw-triangle [x y length]
  (setxy x y)
  (setheading 0)
  (forward length)
  (left 120)
  (forward length)
  (left 120)
  (forward length))

(defn draw-three-triangle [x y l]
  (if (> l 20)
    (do
      (draw-three-triangle x y (* l 1/2))
      (draw-three-triangle (+ x (* l 1/2)) y (* l 1/2))
      (draw-three-triangle (+ x (* l 1/4)) (+ y (* l 1/4 1.73)) (* l 1/2)))
    (do
      (draw-triangle x y (* l 1/2))
      (draw-triangle (+ x (* l 1/2)) y (* l 1/2))
      (draw-triangle (+ x (* l 1/4)) (+ y (* l 1/4 1.73)) (* l 1/2)))))

(draw-three-triangle -200 -200 400)

(setxy -500 -500)


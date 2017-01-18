(home)
(clean)

(defn total-angle [sides]
  (- (* 180 sides) 360))

(defn inner-angle [sides]
  (/ (total-angle sides)
     sides))

(defn draw-polygon [sides]
  (dotimes [n sides]
    (right 180)
    (left (inner-angle sides))
    (forward (/ 400 sides))))

(defn draw-spirograph [polygon-sides polygon-repeat]
  (dotimes [_ polygon-repeat]
    (right (/ 360 polygon-repeat))
    (draw-polygon polygon-sides)))

(draw-spirograph 8 10)

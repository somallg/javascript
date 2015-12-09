#lang scheme

(define atom?
  (lambda (x)
    (and (not (pair? x)) (not (null? x)))))

(define lat?
  (lambda (l)
    (cond
      ((null? l) #t)
      ((atom? (car l)) (lat? (cdr l)))
      (else #f))))

(let ([l '(Jack Sprat could eat no chicking fat)]) (lat? l))
(let ([l '((Jack) Sprat could eat no chicking fat)]) (lat? l))
(let ([l '(Jack (Sprat could) eat no chicking fat)]) (lat? l))
(let ([l '()]) (lat? l))
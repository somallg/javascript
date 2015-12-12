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
(let ([l '(bacon and eggs)]) (lat? l))
(let ([l '(bacon (and eggs))]) (lat? l))

(let ([l1 '()][l2 '(d e f g)]) (or (null? l1) (atom? l2)))
(let ([l1 '(a b c)][l2 '()]) (or (null? l1) (null? l2)))
(let ([l1 '(a b c)][l2 '(atom)]) (or (null? l1) (null? l2)))

(define member?
  (lambda (a lat)
    (cond
      ((null? lat) #f)
      (else (or (eq? (car lat) a)
                (member? a (cdr lat)))))))

(let ([a 'tea][lat '(coffe tea or milk)]) (member? a lat))
(let ([a 'poached][lat '(fried eggs and scambled egges)]) (member? a lat))
(let ([a 'meat][lat '(mashed potatoes and meat gravy)]) (member? a lat))
(let ([a 'meat][lat '(meat gravy)]) (member? a lat))
(let ([a 'meat][lat '(and meat gravy)]) (member? a lat))
(let ([a 'meat][lat '(potatoes and meat gravy)]) (member? a lat))
(let ([a 'meat][lat '(mashed potatoes and meat gravy)]) (member? a lat))
(let ([a 'liver][lat '(bagels and lox)]) (member? a lat))

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

(define member?
  (lambda (a lat)
    (cond
      ((null? lat) #f)
      (else (or (eq? (car lat) a)
                (member? a (cdr lat)))))))

(define rember
  (lambda (a lat)
    (cond
      ((null? lat) '())
      (else (cond
              ((eq? (car lat) a) (cdr lat))
              (else (cons (car lat)
                          (rember a (cdr lat)))))))))
               

(let ([a 'mint][lat '(lamb chops and mint jelly)]) (rember a lat))
(let ([a 'mint][lat '(lamb chops and mint flavored mint jelly)]) (rember a lat))
(let ([a 'toast][lat '(bacon lettuce and tomato)]) (rember a lat))
(let ([a 'cup][lat '(coffee cup tea cup and hick cup)]) (rember a lat))
(let ([a 'bacon][lat '(bacon lettuce and tomato)]) (rember a lat))
(let ([a 'and][lat '(bacon lettuce and tomato)]) (rember a lat))

(define firsts
  (lambda (l)
    (cond
      ((null? l) '())
      (else (cons (car (car l)) (firsts (cdr l)))))))

(let ([l '((a b) (c d) (e f))]) (firsts l))

(define insertR
  (lambda (new old lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((eq? (car lat) old) (cons old (cons new (cdr lat))))
         (else (cons (car lat) (insertR new old (cdr lat)))))))))

(let ([new 'topping][old 'fudge][lat '(ice cream with fudge for dessert)]) (insertR new old lat))
(let ([new 'jalapeno][old 'and][lat '(tacos tamales and salsa)]) (insertR new old lat))
(let ([new 'e][old 'd][lat '(a b c d f g d h)]) (insertR new old lat))

(define insertL
  (lambda (new old lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((eq? (car lat) old) (cons new lat))
         (else (cons (car lat) (insertL new old (cdr lat)))))))))

(let ([new 'topping][old 'fudge][lat '(ice cream with fudge for dessert)]) (insertL new old lat))
(let ([new 'jalapeno][old 'and][lat '(tacos tamales and salsa)]) (insertL new old lat))
(let ([new 'e][old 'd][lat '(a b c d f g d h)]) (insertL new old lat))

(define subst
  (lambda (new old lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((eq? (car lat) old) (cons new (cdr lat)))
         (else (cons (car lat) (subst new old (cdr lat)))))))))

(let ([new 'topping][old 'fudge][lat '(ice cream with fudge for dessert)]) (subst new old lat))

(define subst2
  (lambda (new o1 o2 lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((or (eq? (car lat) o1) (eq? (car lat) o2)) (cons new (cdr lat)))
         (else (cons (car lat) (subst2 new o1 o2 (cdr lat)))))))))

(let ([new 'vanilla][o1 'chocolate][o2 'banana][lat '(banana ice cream with chocolate topping)]) (subst2 new o1 o2 lat))

(define multirember
  (lambda (a lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((eq? (car lat) a) (multirember a (cdr lat)))
         (else (cons (car lat) (multirember a (cdr lat)))))))))

(let ([a 'cup][lat '(coffe cup tea cup and hick cup)]) (multirember a lat))

(define multiinsertR
  (lambda (new old lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((eq? (car lat) old) (cons old (cons new (multiinsertR new old (cdr lat)))))
         (else (cons (car lat) (multiinsertR new old (cdr lat)))))))))

(let ([new 'fried][old 'fish][lat '(chips and fish or fish and fried)]) (multiinsertR new old lat))

(define multiinsertL
  (lambda (new old lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((eq? (car lat) old) (cons new (cons old (multiinsertL new old (cdr lat)))))
         (else (cons (car lat) (multiinsertL new old (cdr lat)))))))))

(let ([new 'fried][old 'fish][lat '(chips and fish or fish and fried)]) (multiinsertL new old lat))

(define multisubst
  (lambda (new old lat)
    (cond
      ((null? lat) '())
      (else
       (cond
         ((eq? (car lat) old) (cons new (multisubst new old (cdr lat))))
         (else (cons (car lat) (multisubst new old (cdr lat)))))))))

(let ([new 'chicken][old 'fish][lat '(chips and fish or fish and fried)]) (multisubst new old lat))

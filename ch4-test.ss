; ch4 numbers games
(atom? 14)
(let ([n 14]) (atom? n))

; test add1
(add1 67)

; test sub1
(sub1 5)

; test zero?
(zero? 0)
(zero? 1492)

; test o+
(o+ 46 12)

; test o-
(o- 14 3)
(o- 17 9)

; test addtup
(addtup '())
(addtup '(3 5 2 8))
(addtup '(15 6 7 12 3))

; test x
(x 5 3)
(x 13 4)
(x 12 3)

; test tup+
(let ([tup1 '(3 6 9 11 4)][tup2 '(8 5 2 0 7)]) (tup+ tup1 tup2))
(let ([tup1 '(2 3)][tup2 '(4 6)]) (tup+ tup1 tup2))
(let ([tup1 '(3 7)][tup2 '(4 6)]) (tup+ tup1 tup2))
(let ([tup1 '(3 7)][tup2 '(4 6 8 1)]) (tup+ tup1 tup2))
(let ([tup1 '(3 7 8 1)][tup2 '(4 6)]) (tup+ tup1 tup2))

; test >
(> 12 133)
(> 120 11)

; test <
(< 4 6)
(< 8 3)
(< 6 6)

; test =
(= 5 5)
(= 4 6)

; test pow
(pow 1 1)
(pow 2 3)
(pow 5 3)

;test div
(div 15 4)

; test length
(let ([lat '(hotdogs with mustard sauerkraut and pickles)]) (length lat))
(let ([lat '(ham and cheese on rye)]) (length lat))

; test pick
(let ([lat '(lasagna spaghetti ravioli macaroni meatball)]) (pick 4 lat))

; test rempick
(let ([lat '(hotdogs with hot mustard)]) (rempick 3 lat))

; test number?
(number? 'tomato)
(number? 76)

; test no-nums
(let ([lat '(5 pears 6 prunes 9 dates)]) (no-nums lat))

; test all-nums
(let ([lat '(5 pears 6 prunes 9 dates)]) (all-nums lat))

; test eqan?
(eqan? 1 1)
(eqan? 'dog 'dog)

; test occur
(let ([a 'hot][lat '(hot pears hot prunes hot dates)]) (occur a lat))

; test rempicknew
(let ([n 3][lat '(lemon meringue salty pie)]) (rempicknew n lat))

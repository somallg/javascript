; test rember
(let ([a 'mint][lat '(lamb chops and mint jelly)]) (rember a lat))
(let ([a 'mint][lat '(lamb chops and mint flavored mint jelly)]) (rember a lat))
(let ([a 'toast][lat '(bacon lettuce and tomato)]) (rember a lat))
(let ([a 'cup][lat '(coffee cup tea cup and hick cup)]) (rember a lat))
(let ([a 'bacon][lat '(bacon lettuce and tomato)]) (rember a lat))
(let ([a 'and][lat '(bacon lettuce and tomato)]) (rember a lat))

; test firsts
(let ([l '((a b) (c d) (e f))]) (firsts l))

; test insertR
(let ([new 'topping][old 'fudge][lat '(ice cream with fudge for dessert)]) (insertR new old lat))
(let ([new 'jalapeno][old 'and][lat '(tacos tamales and salsa)]) (insertR new old lat))
(let ([new 'e][old 'd][lat '(a b c d f g d h)]) (insertR new old lat))

; test insertL
(let ([new 'topping][old 'fudge][lat '(ice cream with fudge for dessert)]) (insertL new old lat))
(let ([new 'jalapeno][old 'and][lat '(tacos tamales and salsa)]) (insertL new old lat))
(let ([new 'e][old 'd][lat '(a b c d f g d h)]) (insertL new old lat))

; test subst
(let ([new 'topping][old 'fudge][lat '(ice cream with fudge for dessert)]) (subst new old lat))

; test subst2
(let ([new 'vanilla][o1 'chocolate][o2 'banana][lat '(banana ice cream with chocolate topping)]) (subst2 new o1 o2 lat))

; test multirember
(let ([a 'cup][lat '(coffe cup tea cup and hick cup)]) (multirember a lat))

; test multiinsertR
(let ([new 'fried][old 'fish][lat '(chips and fish or fish and fried)]) (multiinsertR new old lat))

; test multiinsertL
(let ([new 'fried][old 'fish][lat '(chips and fish or fish and fried)]) (multiinsertL new old lat))

; test multisubst
(let ([new 'chicken][old 'fish][lat '(chips and fish or fish and fried)]) (multisubst new old lat))

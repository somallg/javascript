; test rember*
(let ([a 'cup][l '((coffee) cup ((tea) cup) (and (hick)) cup)]) (rember* a l))
(let ([a 'sauce][l '(((tomato sauce)) ((bean) sauche) (and ((flying)) sauche))]) (rember* a l))
(let ([l '(((tomato sauce)) ((bean) sauche) (and ((flying)) sauche))]) (lat? l))
(let ([l '(((tomato sauce)) ((bean) sauche) (and ((flying)) sauche))]) (atom? (car l)))

; test insertR*
(let ([new 'roast][old 'chuck][l '((how much (wood)) could ((a (wood) chuck)) (((chuck))) (if (a) ((wood chuck))) could chuck wood)]) (insertR* new old l))

; test occur*
(let ([a 'banana][l '((banana) (split ((((banana ice))) (cream (banana)) sherbet)) (banana) (bread) (banana brandy))]) (occur* a l))

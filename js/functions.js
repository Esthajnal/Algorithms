/*Ami fontos cleancode-ban: a változók neve mindig legyen beszédes.*/

function summarizeTwoNumbers(a, b) {
    return a + b;
}

//meghívom a függvényt
console.log(summarizeTwoNumbers());

//meg kell vizsgálnunk kapunk-e paramétert
function summarizeTwoNumbers(a, b) {
    console.log(arguments);
    return { // vigyázni kell, hogy a return sorába kell megnyitni a return, mert egyébként itt kilép a program
        sum: a + b
    };
}
console.log(summarizeTwoNumbers(10, 20))

function summarizeTwoNumbers(a, b) {
    if (arguments.length !== 2) { //arguments egy adott függvény, mint a typeof
        return "Nem megfelelő darab számú paraméter";
    }
    if (typeof a !== "number" || typeof b !== "number") {
        return "Hibás típusú paraméter"; //NaN-t számnak értékeli ezért kell vizsgálnunk rá
    }
    //globális isNaN() -loose equality
    // Number.isNan() - strict eq.
    if (Number.isNaN(a) || Number.isNaN(b)) {
        return "NaN értékű paraméter";
    }
    return a + b;
}
console.log(summarizeTwoNumbers(10, 20));
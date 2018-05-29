var a = 1;
var b = 500;

function parameterValue(a) {
    console.log(a);
    var a = 100; //Lokális változó, csak a függvényen belül él, mert a függvényben megadtunk egy a változót
    console.log(a);
}

parameterValue(a);
console.log(a); //eredmény :  1, 100, 1 => ezt az a változót a globálisból veszi, 

//garbage collector => egy olyan prgram ami a felesleges adatokat törli a memóriából 
/*nem használunk ugyanolyan nevű lokális és globális értéket!

function parameterValue(a) {
    console.log(a);
}

parameterValue(500);
console.log(a) //ERROR: ebben az esetben, mert itt a csak lokális változó kívül nincs értéke : not defined
var b // undefined  =>még nem definiált */

var theValue = 100

function dontDoIt() { //Nem adtunk meg változót a függványben!!! a theValue- globális változóból veszi
    console.log(theValue);
    var theValue = 200;
    console.log(theValue);
}
dontDoIt();
console.log //Eredmény: 100, 200, 200  a függvény változtatta a globális függvényt.

//Ha var kulcsszó nélkül hozunk létre egy változót akkor globálisnak veszi NE CSINÁLJUK!

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i) //Ebben az esetben az i értéke itt már 5


var szam = 100

function addNums(a) {
    a += 100;
    console.log(a);
}
addNums(szam);
console.log(szam);


/*Értékeszerinti és referencia szerinti paraméter átadás:
 **/

var arr = [1, 2, 3];

function doSomeThing(arrParameter) {
    arrParameter.push(100)
    console.log(arrParameter);
}
doSomeThing(arr);
console.log(arr) //tömböknél referencia szerinti átadás van. figyelni! push változtat
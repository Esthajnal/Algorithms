//for
//while
//do while

var arr = [];
var arr2 = new Array();

var str = "str";
var str2 = new String("str");

var bool = true;
var bool2 = new Boolean(true);

var num = 10;
var num2 = new Number(10);

/*A Js-ben a primitívek imutable-k, vagyis nem lehet őket változtatni, vagyis nincs 
semmilyen tulajdonságuk és methodusok. Amikor csinálunk vele valamit akkor a Js átalkítja
objektummá, a művelet elvégzése vissza alakítja primitívvé.(kissebb helyet foglal)
Új értéket adhatunk a változónak, de akkor a régebbi eltűnik. */

var exampleArray = [3324, 435, 56, 23, 1];
for (i in exampleArray) {
    console.log(i) // 0,1,2,3,4,
}

/* javascriptben nyugodtan lehet használni a for...int, mert a kulcsokat szedi csak ki, abban az esetben ha atömben
sok az undefined elem, vagy nem tudjuk mennyi van benne, akkor érdemes ezt használni*/

var multilineString = `első sor
                       második sor
                       harmadik sor`

for (i in exampleArray) {
    console.log("az" + i + "-edik indexű elem értéke:" + exampleArray[i] + ".")
    console.log(`az ${i}-edik endexű elem értéke:${exampleArray[i]}`)
}

for (var i of exampleArray) {
    console.log(i)
}

/*For... of, ha a tömbünk nem szekvenciális, vagyis nem sorba rendezett, akkor ne használjuk.*/

var exampleObject = {
    firstnam: "Eszter",
    lastname: "Gyarmathy",
    age: 18
};
console.log("Az exampleObject ulajdonságai:")
for (var i in exampleObject) {
    //console.log(i)
    console.log(`tulajdonság:${i},értéke: ${exampleObject[i]}`)
}
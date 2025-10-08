/* var c = "miao";
let a = 5;
const FARADAY_CONSTANT = 9.64854;
console.log(c);
// ``-->Alt 96
console.log(`Faraaday constant is ${FARADAY_CONSTANT}`);

 */

/* let temp = 34;
let tp = temp;


console.log(`Temp: ${temp}`);
console.log(`Tp: ${tp}`);

temp = 2;
console.log(`Temp: ${temp}`);
console.log(`Tp: ${tp}`); */

/* let voto = 28;
if (voto>=18) {
    console.log("wow spacchi", voto);
} else {
    console.log("non ghe semo");
}

let auto = "BMW";
switch(auto){
    case "BMW":
        console.log("Hai scelto bmw");
        break;
    case "Audi":
        console.log("Hai scelto audi");
        break;  

    case "Fiat":
        console.log("Hai scelto fiat");
        break;
    default:
        console.log("Non hai scelto nulla");
        break;    
    
}
 */

function somma(a,b){
    return a+b;
}

const sottrazione = function(a,b){ //cambia come viene allocata in memoria 
                            // e non è riassegnabile, ed è una ghost function
    return a-b;
}

const moltiplicazione = (a,b) => a*b; //funzione landa, non ha la key word function
                                    //usarla quanda ci sono delle operazioni semplici

let result = somma(5,3);
console.log(result);

result = sottrazione(9,5);
console.log(result);

result = moltiplicazione(-2,-3);
console.log(result);



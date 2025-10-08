function creaAuto(marca, modello, anno){
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;    
}

let auto1 = new creaAuto("ford1", "focus", 2024);
let auto2 = new creaAuto("fiat", "panda", 2029);
console.table(auto1);

    
let temp = Object.create({});
console.log(temp);

let auto4 = Object.create(auto2);
console.log(auto4);

console.log(Object.keys(auto1));  


try {
    // codice esplosivo
    let error = new Error();
    /* 
    console.log("mess",error.message);
    console.log("name",error.name);
    console.log("stack",error.stack); */
    throw error;
} catch (e) {
    console.log("Catturato un errore", e);
}

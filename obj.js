let auto={
    marca: "Fiat",
    modello: "Focus",
    anno: 2018,
    colore: "Nero",
    cilindrata: 1.6,
    "km/l": 15.2,
};
console.table(auto);
console.log(`Tipo: ${typeof auto}`);

let marca = auto.marca;
console.log(`Marca: ${marca}`);

let anno = auto["anno"];
console.log(`Anno: ${anno}`)

let consumi = auto["km/l"];
console.log(`Consumo: ${consumi}`)

auto.marca = Infinity;
console.table(auto);

/* if(auto.autista){
    console.log("Autista", auto,autista)
}else{
    auto.autista = "Mario Rossi";
    console.log("Autista aggiunto", auto.autista);
}
console.table(auto); */

auto["4x4"] = true;
console.table(auto);

if(auto.autista){
    console.log("Autista", auto,autista)
}else{
    auto.autista = {
        nome: "Mario",
        cognome: "Rossi",
    };
    auto.autista.patente = {
        numero: "AB12345",
        categoria: "B",
        scadenza: "2025-12-31",
    }
    console.log("Autista aggiunto", auto.autista);
}
console.dir(auto, Options={depth: Infinity});
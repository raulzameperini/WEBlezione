const myPromise = new Promise((resolv, reject) =>{
    //simulare una operazione asincrona usando timeout
    setTimeout( () =>{
        let rand = Math.random().toFixed(2);
        if(rand >0.5){
            reject("Esame sarà difficile "+rand);
            return;
        }
        resolv("esame sarà facile "+rand)
    }), 1000
});
console.log(myPromise);
myPromise.then((result) =>{
    console.log(result);
    return result;
}).then((result) => {
    console.log("secondo then: "+ result)
}).catch((err) =>{
    console.error("Errore nella promessa"+err);
})
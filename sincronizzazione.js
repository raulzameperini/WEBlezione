const log = console.log;

function init(){
    log("Inizio");
}

function end(){
    log("Fine");
}

init();
setTimeout(  // dopo 5 secondo fa i log di intermezzo e dopo finisce
    () =>{
        log("intermezzo");
    },5000
);

function tick(){
    log("Tick");
};

setInterval(tick,2000);  // si ripete ogni due secondi



end();

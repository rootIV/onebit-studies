const start = Date.now();

while(Date.now() - start < 1000 * 3){
    console.log(`${Date.now()}: date now.`);
}

console.log("Saiu do loop sem passar por aqui.");

setTimeout(() => console.log("Timeout Argument"), 1000 * 3);

let num = 0;

const intervalId = setInterval(() => {
    num += 1;
    console.log(`${num} seconds spent.`);

    if(num == 10){
        clearInterval(intervalId);
        console.log("Intervalo de 10 segundos finalizado!");
    }
}, 1000 * 1, console.log("Interval Argument"));
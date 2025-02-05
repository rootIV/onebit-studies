const promise = new Promise((resolve, reject) => {
    console.log("A promisse está sendo executada.");
    setTimeout(() => {
        if(true){
            reject(false);
        }

        console.log("Resolvendo promisse...");
        resolve(true);
    }, 1000 * 2);
}).then((result) => {
    console.log(`Promisse resolvida. O resultado foi ${result}`);
});

console.log(promise);

setTimeout(() => {
    console.log(promise);
}, 1000 * 3);
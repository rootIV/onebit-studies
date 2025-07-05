function waitForSeconds(seconds){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}

// Promise.all([
//     waitForSeconds(1)
//     , waitForSeconds(2)
//     , waitForSeconds(3)])
// .then((results) => {
//     console.log(results);
// })
// .catch((error) => {
//     console.error("Erro:", error);
// });

const numbers = [1, 9, 45, 54, 56];

// const squares = numbers.map(async (number) => {
//     await waitForSeconds(2);
//     return number * number;
// })

async function execute() {
    console.time("map");
    const squares = await Promise.all(numbers.map(async (number) => {
        await waitForSeconds(2);
        return number * number;
    }));
    
    console.log(squares);
    console.timeEnd("map");
}

execute();

// Promise.all(squares)
// .then(results => {
//     console.log("Quadrados:", results);
// })


// const squares = numbers.map((number) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number * number);
//         }, 1000);
//     });
// });
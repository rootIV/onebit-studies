async function asyncSum(a, b){
    if(typeof a != 'number' || typeof b != 'number') {
        return Promise.reject(new Error('Sum arguments must be numbers.'));
    }
    return Promise.resolve(a + b);
}

async function asyncSubtract(a, b){
    if(typeof a != 'number' || typeof b != 'number') {
        return Promise.reject(new Error('Subtract arguments must be numbers.'));
    }
    return Promise.resolve(a - b);
}

const sumResult = asyncSum(23, 31);
const subtractResult = asyncSubtract(50, 5);

Promise.all([sumResult, subtractResult])
    .then(results => {
        console.log(`Sum: ${results[0]}, Subtract: ${results[1]}`);
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
    })
    .finally(() => {
        console.log('All operations completed.');
    });
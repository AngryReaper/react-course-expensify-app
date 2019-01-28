const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        //reject('Something went wrong');
    }, 1500);
    
});
console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 1500);
        
    });
}, (error) => {
    console.log('Error: ', error);
}).then((str) => {
    console.log('does this run?', str);
});

console.log('after');
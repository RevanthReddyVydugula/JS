const button = document.getElementById('button');

button.addEventListener('click', function () {
    console.log("Clicked on submit button");
});



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operation 1 successful");
    }, 3000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operation 2 successful");
    });
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("operation 3 successful");
    });
})

let srt = ''
console.log(promise1);
promise1.then(value => {
    console.log(value);
})

promise2.then(value => {
    console.log(value);
})

promise3.then(value => {
    console.log(value);
})


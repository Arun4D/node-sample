
function random() {
    return Math.random();
}


const randomNumber = () => Math.floor(Math.random() * 20);;


const promiseSample = new Promise((resolve, reject) => {
    setTimeout(() => {
        let value = randomNumber();
        console.log(value)
        if (value < 5) {
            resolve(value)
        } else {
            reject("System error")
        }

    }, 300)
})

promiseSample
    .then((value) => `Random value is ${value}`)
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log("completed"))
//Samle 1
const randomNumber = () => Math.floor(Math.random() * 20);;

const resolveAfter3Sec = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(randomNumber())
    }, 3000);
})

//await will work only with async function
async function asyncCall() {
    const result = await resolveAfter3Sec();
    console.log(result);
} 

asyncCall()

// sample 2
const randomNumber1 = (number=20) => Math.floor(Math.random() * number);;

const resolveAfter2Sec = (number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(randomNumber1(number))
    }, 1000);
})

//await will work only with async function
async function asyncCall1() {
    const result = await Promise.all([resolveAfter2Sec(10), resolveAfter2Sec(20)])
    console.log(result);
} 

asyncCall1()
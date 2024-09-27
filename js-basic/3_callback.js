let sayhello = (name, sayBye) => {
    console.log(`hello ${name}`)
    sayBye(name)
}

let sayBye = (name) => {
    console.log(`Good bye ${name}`)
}

sayhello("arun", sayBye)
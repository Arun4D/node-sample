let data = '{ "age": 30 }'

const validateAge = (data) => {
    try {
        let userDetails = JSON.parse(data);
        if(!userDetails.name) {
            throw new SyntaxError("Incomplete data found. No name")
        }
    } catch (err) {
        console.log(err.name + ":" + err.message)
        throw new Error(err.message)
    }
    
}

try {
    validateAge(data)
} catch (err) {
    console.log(err.name + ":" + err.message)
}

class Student {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name
    }

}


let student =  new Student("arun")
console.log(student.getName());
student.name = "durai"
console.log(student.getName());


let Teacher = class {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name
    }
}

let teacher =  new Teacher("arun1")
console.log(teacher.getName());
teacher.name = "durai1"
console.log(teacher.getName());
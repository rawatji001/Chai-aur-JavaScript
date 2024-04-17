// let myName = "roshan     "
// let mychannel = "chai     "

// console.log(myName.trueLength); it can't work...........


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.roshan = function(){
    console.log(`Roshan is present in all objects`);
}

Array.prototype.heyRoshan = function(){
    console.log(`Roshan says hello`);
}

// heroPower.roshan()
// myHeros.roshan()
// myHeros.heyRoshan()
// heroPower.heyRoshan()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"roshan".trueLength()
"iceTea".trueLength()
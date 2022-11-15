
// array containing number or string can be specified as 

let arrayOfString: string[] = ["a", "b", "c"];
let arrayOfBoth: (number | string)[] = ["a", "b", "c", 2, 2];
let arrayOfManyType: (number | string | boolean)[] = ["a", "b", "c", 2, 2, true];

// we can use tuple if we want specific order in an array

let trafficlight: [string, number, boolean]

// trafficlight = [1,"red", true] will throw error as it doesn't match the tuple
trafficlight = ["red", 1, true] // here every index is correctly mentioned


// interface 

// we can reopen up interface like below , this is useful when the interface is exported from other files and we see need to add more values

interface User {
    name: string,
    age: number
}

interface User {
    id: string
}





// 🌟 extending interface and type

type isAwake = {
    isHuman: true
}

interface Admin extends User, isAwake {
    role: "admin"
}

type Panel = User & isAwake & {
    role: "admin",
    readonly type?: "plumber"  // we can only read this value but can't change
}

let a: Admin = {
    name: "s",
    age: 1,
    id: "id",
    isHuman: true,
    role: "admin"
}


class check {
    constructor(
        public email: string,
        private name: string,
        public fullDetail: string = email + name  // we can access private variables inside constructor
    ) {

    }
}

let person1 = new check("man@g.com", "jhon");

// console.log(person1.name)  // here can not access private variables 
console.log(person1.fullDetail)

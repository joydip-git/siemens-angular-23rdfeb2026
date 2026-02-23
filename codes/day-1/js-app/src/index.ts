let num = 10

console.log("num: " + num);   //10

for (var i = 0; i < 1; i++) {
    let num = 20
    console.log("num: " + num); //20
}

console.log("num: " + num);//10

const x = 200
//x = 100
console.log(x);

function add(a: number, b: number): void {
    var num = a + b
    console.log("add: " + num);
}

function subtract(a: number, b: number) {
    return a - b
}

console.log(add(12, 13));
console.log(subtract(12, 3));

// const anilRef = {
//     //value property
//     id: 1,
//     name: 'anil',
//     salary: 1000,
//     //functional property
//     print: function () {
//         // return `${this.id}, ${this.name}, ${this.salary},${this.location}`
//         return `${this.id}, ${this.name}, ${this.salary}`
//     }
// }
class Person {
    id: number;
    name: string;
    salary: number;
    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    print() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}
class Trainer extends Person {
    subject: string;
    constructor(id: number, name: string, salary: number, subject: string) {
        super(id, name, salary)
        this.subject = subject
    }
    print(): string {
        return `${super.print()}, ${this.subject}`
    }
}

const anilRef = new Trainer(1, 'anil', 1000, 'JS')
console.log(anilRef.id);
console.log(anilRef['name']);
//anilRef.location="bangalore"
console.log(anilRef.print());
//console.log(anilRef['print']());
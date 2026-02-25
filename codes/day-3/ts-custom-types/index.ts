type myType = number | string;

function test(arg: myType): myType {
    return 'hello'
}

type Entity = {
    id: number
}

type Post = {
    id: number,
    userId: number,
    title: string,
    body: string,
} & Entity

/*
interface Entity{
    id: number;
}
interface Post extends Entity{   
    userId: number;
    title: string;
    body: string;
}
    */

const posts: Post[] = [
    {
        id: 1,
        userId: 1,
        title: 'some post',
        body: 'body of the post'
    }
]

type fnType = (x: number, y: number) => number
// interface fnType {
//     (x: number, y: number): number;
// }
function invoke(fnRef: fnType, x: number, y: number) {
    fnRef(x, y)
}

function add(a: number, b: number): number {
    return a + b
}

const subtract: fnType = (a: number, b: number) => a - b;

invoke(add, 12, 13)
invoke(subtract, 12, 3)


class Person {
    // id: number;
    // name: string;
    // salary: number;

    // constructor(id: number, name: string, salary: number) {
    //     this.id = id
    //     this.name = name
    //     this.salary = salary
    // }

    constructor(public id: number, public name: string; public salary: number) { 
        
    }
}
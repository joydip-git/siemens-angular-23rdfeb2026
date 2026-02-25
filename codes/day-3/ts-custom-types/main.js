//object literal syntax
const obj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    friends: ['sunil', 'mahesh']
}


//copy['x'] =10

// for (const propName in obj) {
//     const propValue = obj[propName]
//     copy[propName] = propValue
// }

// Object.assign(copy,obj)

//... -> spread operator
const copy = {...obj}
console.log(obj);
console.log(copy);

if (copy.friends === obj.friends) {
    console.log('same');
} else
    console.log('nope');
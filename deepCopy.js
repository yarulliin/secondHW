// Задание 1

function deepCopy(obj) {
    let newObj = {};

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    for (let i in obj) {
        newObj[i] = deepCopy(obj[i]);
    }

    return newObj;
}

let obj = {
    name: 'Rifat',
    passport: {
        series: 123
    }
}

let copyObj = deepCopy(obj);

console.log(obj);
console.log(copyObj);
console.log(obj == obj); // true
console.log(obj == copyObj); // false
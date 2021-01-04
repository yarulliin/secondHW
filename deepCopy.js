// Задание 1

function deepCopy(obj) {
    let newObj = {};

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    for (let i in obj) {
        if (Array.isArray(obj[i])) {
            newObj[i] = obj[i]
        }
        else newObj[i] = deepCopy(obj[i]);
    }

    return newObj;
}
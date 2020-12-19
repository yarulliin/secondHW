// Задание 2

function takeFromInterval(arr, start, end) {
    let newArr = [];

    if (isNaN(parseInt(start)) || isNaN(parseInt(end)) || 
        start <= 0 || end <= 0 || start > arr.length || end > arr.length) {
        return [];
    }
    else {
        if (end >= start) {
            newArr = arr.slice(start - 1, end);        
        }
        else {
            newArr = arr.slice(end - 1, start);
        }
    }

    return newArr;
}

console.log(takeFromInterval([1, 2, 3], 3, 1)); // [1, 2, 3]
console.log(takeFromInterval([1, 2, 3], 1, 2)); // [1, 2]
console.log(takeFromInterval([], 2, 1)); // []
console.log(takeFromInterval([1, 2, 3], 'a', 3)); // []
console.log(takeFromInterval([1, 2, 3], 1, 4)); // []
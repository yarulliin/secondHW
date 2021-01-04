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
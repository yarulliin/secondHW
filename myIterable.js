// Задание 3

let myIterable = {
    from: 1,
    to: 4,
}

myIterable[Symbol.iterator] = function() {
    let start, end;
    if (this.from && this.to) {
        if (this.from <= this.to) {
            start = this.from;
            end = this.to;
        }
        else {
            start = this.to;
            end = this.from;
        }
    }
    else if (this.from && !this.to){
        start = this.from;
        end = this.from + 4;
    }
    else if (!this.from && this.to) {
        start = this.to - 4;
        end = this.to;
    }
    else {
        start = 1;
        end = 5;
    }

    return {
        next() {
            if (start <= end) {
                return { value: start++, done: false };
            } 
            else {
                return {  done: true };
            }
        }
    }
}

for (let el of myIterable) {
    console.log(el);
}
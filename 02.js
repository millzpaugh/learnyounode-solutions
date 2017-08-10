var numbers = process.argv.slice(2,5); 

function add(a, b) {
    return a + b;
}

var sum = numbers.reduce((a,b) => Number(a) + Number(b), 0); 
console.log(sum);
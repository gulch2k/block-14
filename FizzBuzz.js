// create a fizzbuzz function that print out each number from 1 to 100 on a new line, 
// if the number is divisible by 3, print "fizz". 
// if the number is divisible by 5, print "buzz". 
// if the number is divisible by both 3 and 5, print "fizzbuzz".

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

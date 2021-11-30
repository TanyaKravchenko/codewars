// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (0 === number%2) {
        return number*8
    } else {
        return number*9
    }
}

function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
}



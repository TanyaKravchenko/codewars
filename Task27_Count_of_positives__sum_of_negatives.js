// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//
//     If the input array is empty or null, return an empty array.

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return [];
    }
    let sum =0;
    let pos =[];

    for (let i=0; i<input.length; i++){

        if(input[i]>0){
            pos.push(input[i]);

        } else{
            sum += input[i];

        }
    }
    return [pos.length, sum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))



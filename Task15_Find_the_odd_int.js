// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    //happy coding!
    let result = 0;
    for(let i = 0 ; i<A.length;i++){
        let count = 0 ;
        for(let j = 0 ; j<A.length;j++){
            if(A[i]==A[j])
                count++;
        }
        if(count%2==1)
        {
            result = A[i];
            break;
        }
    }
    return result;
}

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));




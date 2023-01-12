//105. I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each
// of the following phrases each time a petal was torn:  "I love you" "a little" "a lot" "passionately" "madly" "not at
// all" If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so
// on.  When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.  Your goal
// in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of
// petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    for (let i = 0; i <= nbPetals; i++) {
        arr.push(arr[i]);
    }
    return arr[nbPetals - 1];
}

// function howMuchILoveYou(nbPetals) {
//     return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][(nbPetals -1)%6];
// }

console.log(howMuchILoveYou(7))

// 106. Sort and Star

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values
// of the chars) and then return the first value.  The returned value must be a string, and have "***" between each of
// its letters.  You should not remove or add elements from/to the array.

function twoSort(s) {
    return s.sort()[0].split('').join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
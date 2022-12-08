const string = ['Alex', 'Donald', 'Bob']

console.log(string.sort())

const string1 = ['Alex', 'Donald', 'Bob', 100, 'alex']

console.log(string1.sort())

const numbers = [100, 250, 99, 801]
const compareFunc = (a, b) => {
    if (a > b) {
        return 10
    } else {
        return -100
    }
}

const compareFunc1 = (a, b) => a - b

console.log(numbers.sort(compareFunc1))
console.log(numbers.sort((a, b) => a - b))

const students1 = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log(students1.sort((a, b) => a.age - b.age))

// вложенная сортировка (по возрасту и потом по убывнию)

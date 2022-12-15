const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}


//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log(user === copyUser) // false //- что должно быть в консоли?
console.log(user.friends === copyUser.friends) // true //- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(user === deepCopyUser) // false // - что должно быть в консоли?
console.log(user.friends === deepCopyUser.friends) // false //- что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(students === copyStudents) // false // - что должно быть в консоли?
console.log(students[0].age === copyStudents[0].age) // true // - что должно быть в консоли?
console.log(students[0] === copyStudents[0]) // true // - что должно быть в консоли?
console.log(students[1].id === copyStudents[1].id) // true //- что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({...el}));
let deepCopyStudents1 = students.map(el => ({...el.age}));

//Проверка:
console.log(deepCopyStudents === students) // false // - что должно быть в консоли?
console.log(students[0].age === deepCopyStudents[0].age) // true // - что должно быть в консоли?
console.log(students[0].age === deepCopyStudents1[0].age) // false // - что должно быть в консоли?
console.log(students[0] === deepCopyStudents[0]) // false // - что должно быть в консоли?
console.log(students[1].id === deepCopyStudents[1].id) // true // - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((a, b) => {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    }
    return 0
})

let sortedByName1 = [...deepCopyStudents].sort((a, b) => a.name > b.name ? 1 : -1)

console.log(sortedByName);
console.log(sortedByName1);

//5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => {
    if (a.scores > b.scores) {
        return 1
    } else if (a.scores < b.scores) {
        return -1
    }
    return 0
});

let sortedByScores1 = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortedByScores);
console.log(sortedByScores1);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = sortedByScores.filter(el => el.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = [...sortedByScores].slice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [deepCopyStudents.concat(topStudents)];
let newDeepCopyStudents1 = [...deepCopyStudents, ...topStudents];
console.log(newDeepCopyStudents)
console.log(newDeepCopyStudents1)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = [...students].filter(el => !el.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(el => el.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(', ');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(el => ({...el, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map(el => el.name === 'Nick' ? {...el, isMarried: true} : el);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = deepCopyStudents.find(el => el.name === 'Ann');
console.log(ann)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = deepCopyStudents.reduce((ac, c) => ac.scores > c.scores ? ac : c);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = deepCopyStudents.reduce((ac, c) => ac + c.scores, 0);
console.log(scoresSum)


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   return  students.map(el => ({
       ...el,
       friends: students.filter(s => s.name !==el.name).map(st => st.name)}))

}
console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]

// Напишите функцию addFriends, которая принимает параметром массив и добавляет в каждый элемент массива свойство
// "friends", значением которого является массив имён всех остальных студентов из массива students, за исключением
// собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.







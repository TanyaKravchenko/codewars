// const students = [
//     {
//         id: 1,
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//         // friends: ["Alex", "Nick", "John", .......]
//     },
//     {
//         id: 2,
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 90,
//     },
//     {
//         id: 3,
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         id: 4,
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     },
//     {
//         id: 5,
//         name: "Helen",
//         age: 20,
//         isMarried: false,
//         scores: 110
//     },
//     {
//         id: 6,
//         name: "Ann",
//         age: 20,
//         isMarried: false,
//         scores: 105
//     },
// ];
//
// const user = {
//     name: "Bob",
//     age: 23,
//     friends: ["Alex", "Nick", "John"]
// }
//
// const superUser = {
//     name: "Bob",
//     age: 23,
//     friends: [
//         {
//             id: 1,
//             name: "Bob",
//             age: 22,
//             isMarried: true,
//             scores: 85
//         },
//         {
//             id: 2,
//             name: "Alex",
//             age: 21,
//             isMarried: true,
//             scores: 90,
//         },
//         {
//             id: 4,
//             name: "John",
//             age: 19,
//             isMarried: false,
//             scores: 100
//         }
//     ]
// }
//
//
// //1. Создайте поверхностную копию объекта user
// let copyUser = {...user}
// console.log(user === copyUser) // false
// console.log(user.friends === copyUser.friends) // true
//
// //Проверка:
// // console.log(user===copyUser)- что должно быть в консоли?
// // console.log(user.friends===copyUser.friends)- что должно быть в консоли?
//
// //2. Полная (глубокая) копия объекта user
// let deepCopyUser = {...user, friends: [...user.friends]}
//
// //Проверка:
// console.log(user === deepCopyUser) //- что должно быть в консоли? - false
// console.log(user.friends === deepCopyUser.friends) //- что должно быть в консоли? - false
//
// //3. Поверхностная копия массива students
// let copyStudents = [...students]
//
// //Проверка:
// console.log(students === copyStudents) //- что должно быть в консоли? - false
// console.log(students[0].id === copyStudents[0].id) //- что должно быть в консоли? - true
// console.log(students[0].name === copyStudents[0].name) //- что должно быть в консоли? - true
// console.log(students[0].age === copyStudents[0].age) //- что должно быть в консоли?- true
//
// //4*. Полная (глубокая) копия массива students (map)
//
// let deepCopyStudents = students.map(s => ({...s}))
// // let deepCopyStudents = students.map(i => i.id === 2 ? {...i, name: 'Max'} : i)
//
// //Проверка:
// console.log(deepCopyStudents === students) //- что должно быть в консоли? - false
// // console.log(students) //- что должно быть в консоли?
// console.log(students[1].id === deepCopyStudents[1].id) //- что должно быть в консоли? - true???
// // console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// // console.log(код проверки написать самостоятельно) - что должно быть в консоли?
//
// // NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// // Вывод результатов - в консоль
//
// //5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// let sortedByName = [...deepCopyStudents].sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     return 0;
// })
// console.log(sortedByName);
//
// // let sortedByName = [...deepCopyStudents].sort((a, b) => a.name > b.name ? 1 : -1);
// // console.log(sortedByName);
//
//
// //5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
// let sortedByScores = [...deepCopyStudents].sort((a, b) => b.scores - a.scores)
// console.log(sortedByScores);
//
// //6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// let bestStudents = [...deepCopyStudents].filter(s => s.scores >= 100)
// console.log(bestStudents)
//
// //6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//
// let topStudents = deepCopyStudents.sort((a, b) => b.scores - a.scores).slice(0, 3)
// console.log(topStudents)
// console.log(deepCopyStudents)
//
// //6b. Объедините массивы deepCopyStudents и topStudents так,
// //чтоб сохранился порядок сортировки (spread-оператор || concat)
// let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
// console.log(newDeepCopyStudents)
//
//
// //7. Сформируйте массив холостых студентов (filter)
// let notMarriedStudents = deepCopyStudents.filter(s => !s.isMarried)
// console.log(notMarriedStudents)
//
// //8. Сформируйте массив имён студентов (map)
// let studentsNames = deepCopyStudents.map(s => s.name)
// console.log(studentsNames)
//
// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом (join)
// // - запятой (join)
// let namesWithSpace = studentsNames.join(' ')
// console.log(namesWithSpace)
// let namesWithComma = studentsNames.join(', ')
// console.log(namesWithComma)
//
// //9. Добавьте всем студентам свойство "isStudent" со значением true (map)
// let trueStudents = deepCopyStudents.map(s => ({...s, isStudent: true}))
// console.log(trueStudents)
//
// //10. Nick женился. Выполните соответствующие преобразование массива students (map)
// let studentsWithMarriedNick = deepCopyStudents.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s)
// console.log(studentsWithMarriedNick)
//
// //11. Найдите студента по имени Ann (find)
// let ann = deepCopyStudents.find(s => s.name === 'Ann')
// console.log(ann)
//
// // И поднимаем руку!!!!
//
// //12. Найдите студента с самым высоким баллом (reduce)
// // - c помощью reduce
// // - *не испльзуя методы массивов и Math.max()*
// let bestStudent = deepCopyStudents.reduce((a, b) => a.scores > b.scores ? a : b)
// console.log(bestStudent)
//
// //13. Найдите сумму баллов всех студентов (reduce)
// let scoresSum = deepCopyStudents.reduce((s, v) => s + v.scores, 0)
// console.log(scoresSum)
//
//
// // 14. Д.З.:
// // Напишите функцию addFriends, которая принимает параметром массив students
// // и добавляет в каждому студенту свойство "friends",
// // значением которого является массив имён всех остальных студентов из массива students,
// // за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
// const addFriends = (students) => {
//     //..............................
// }
// console.log(addFriends(students));
//
// // 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// // массив
// // students  и количество лучших студентов, которое надо получить в
// // новом массиве.
// // getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// // getBestStudents(students, 3)
// // getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]
//
//
//
//
//
//
//
//

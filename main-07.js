//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку,
// состоящую из указанного количества повторов подстроки с использованием разделителя. repeatString("yo", 3, " ") =>
// "yo yo yo" repeatString("yo", 3, ",") => "yo,yo,yo"

const repeatString = (word, n, symbol) => {
    let newWord = word
    for (let i = 0; i < n - 1; i++) {
        newWord += symbol + word
    }
    return newWord
}

console.log(repeatString("yo", 3, " "))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с
// указанной подстроки, в противном случае - false. Регистр не учитывается. checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

const checkStart = (word, letters) => {
    return word.toLowerCase().startsWith(letters.toLowerCase())
}

console.log(checkStart("Incubator", "Inc"))
console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из
// параметров, обрезанную до указанного количества символов и завершает её многоточием. truncateString("Всем студентам
// инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, n) => {
    return str.substring(0, n) + '...'
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в
// предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") =>
// null getMinLengthWord(123) => null

const getMinLengthWord = (str) => {

    if (str === '' || typeof str !== 'string') {
        return null
    }
    // let arrStr = str.split(' ')
    // let wordLength = 0
    // let shortestWord
    //
    // for (let i = 0; i < arrStr.length; i += 1) {
    //     wordLength = arrStr[1].length
    //
    //     if (arrStr[i].length < wordLength) {
    //         shortestWord = arrStr[i]
    //         return shortestWord
    //     }
    // }

    return str.split(' ').reduce((a, b) => (b.length < a.length) ? b : a)

}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord(""))
console.log(getMinLengthWord(123))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все
// слова написаны строчными, но начинаются с заглавных букв. setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") =>
// "Всем Студентам Инкубатора Желаю Удачи!"

const capitalize = (str) => {
    // let newStr = ""
    // let len = str.length
    // for (let i = 0; i < len; i++) newStr += str[i].toLowerCase()
    // return newStr.replace(/(^|\s)\S/g, function (a) {
    //     return a.toUpperCase()
    // })

    return str.toLowerCase().split(/\s+/).map(e => e[0].toUpperCase() + e.substring(1)).join(' ')

}

const setUpperCase = (str) => str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(' ')


console.log(capitalize("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

// function isIncludes(str, subStr) {
//     const arrSubStr = subStr.toLowerCase().split('')
//     const arrStr = str.toLowerCase().split('')
//     console.log(arrSubStr.every(e => arrStr.includes(e)))
// }

const isIncludes = (string, substring) => {
    let curr = 0;
    let string1 = string.toLowerCase()
    let substring1 = substring.toLowerCase()

    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < substring1.length; j++) {
            if (substring1[j] === string1[i]) {
                substring1 = substring1.slice(j + 1)
                ++curr
            }
        }
    }
    return curr === substring.length
}


const isIncludes1 = (str, substr) => substr.toLowerCase().split('').every(el => str.toLowerCase().includes(el))


const isIncludes2 = (str, pstr) => {

    let a = str.toLowerCase().split('')
    let b = pstr.toLowerCase().split('')

    return b.reduce((aсс, x) => {

        let find = a.includes(x)

        delete a[a.indexOf(x)]

        return aсс && find

    }, true)

}


console.log(isIncludes2("Incubator", "Cut")) //=> true
console.log(isIncludes2("Incubator", "table")) //=> false
console.log(isIncludes2("Incubator", "inbba")) //=> true //*false
console.log(isIncludes2("Incubator", "inba")) //=> true  //*true
console.log(isIncludes2("Incubator", "Incubatorrr"))//=> true //*false





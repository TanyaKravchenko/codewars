const resultBlock = document.querySelector('#result');
const pageNumberEl = document.querySelector('#page-number');
const clickMeButton = document.querySelector('#click-me');
clickMeButton.addEventListener('click', () => {
    const promise = getImages(pageNumberEl.value);
    promise
        .then(onDataReceived)
});

function onDataReceived(data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('body').appendChild(img);
    })
}

// let a = {
//     name: 'dddd',
//     protocol: 'https',
//     maxStudentCount: 10,
//     isOnline: true,
//     students: ['ivan', 'andrew', 'fred'],
//     classroom: {
//         teacher: {
//             name: 'wew',
//             age: 18
//         }
//     }
// }
//
// let b= {...a};
//
// b.students.push('Addy')
// b.name = 'polla'
// b.classroom.teacher.name = 'mjhnmm'
//
// console.log(a);
// console.log(b);



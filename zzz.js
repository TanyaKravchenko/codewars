let a = {
    name: 'dddd',
    protocol: 'https',
    maxStudentCount: 10,
    isOnline: true,
    students: ['ivan', 'andrew', 'fred'],
    classroom: {
        teacher: {
            name: 'wew',
            age: 18
        }
    }
}

let b= {...a};

b.students.push('Addy')
b.name = 'polla'
b.classroom.teacher.name = 'mjhnmm'

console.log(a);
console.log(b);
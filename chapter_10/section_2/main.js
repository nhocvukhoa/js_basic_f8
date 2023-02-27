var courses = [
    {
        id: 1,
        name: 'Khoa hoc: JS',
        coin: 250,
        coinText: 'Gia: 250'
    },
    {
        id: 2,
        name: 'Java',
        coin: 250
    },
    {
        id: 3,
        name: 'Dart',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 250
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 300
    }
];

// map: tạo ra mảng mới có số phần tử đúng bằng mảng cũ
function courseHandler(course, index) {
    return {
        id: course.id,
        name: `Khóa học: ${course.name}`,
        coin: `Giá: ${course.coin}`,
        index: index,
        originArray: courses,
    }
}

var newCourses = courses.map(courseHandler);
console.log(newCourses);

// Ví dụ:
const pitchs = [
    {
        id: 1,
        name: 'Sân 1',
        quantity: 11,
        price: 200000
    },
    {
        id: 2,
        name: 'Sân 2',
        quantity: 11,
        price: 500000
    },
    {
        id: 3,
        name: 'Sân 3',
        quantity: 11,
        price: 600000
    }
];

var newPitchs = pitchs.map(function pitchHandler(pitch) {
    return {
        id: pitch.id,
        name: pitch.name,
        quantity: `Số lượng: ${pitch.quantity}`,
        price: pitch.price > 400000 ? `Giá mắc` : `Giá rẻ`
    }
});

console.log(newPitchs);

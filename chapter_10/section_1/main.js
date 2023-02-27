var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
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

// forEach: duyệt qua từng phần tử của mảng
// courses.forEach(function(course, index) {
//     console.log(course, index);
// });

// every: tất cả điều kiện phải thỏa điều kiện gì đó, thỏa trả về true, ko thỏa trả về false
// var isFree = courses.every(function (course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);

// some: chỉ cần một điều kiện thỏa là ngừng vòng lặp
// var isFree = courses.some(function (course, index) {
//     return course.coin === 0;
// });

// console.log(isFree);

// find: tìm kiếm phần tử đầu tiên trong mảng theo điều kiện
// var course = courses.find(function(course, index) {
//     return course.name === 'Ruby';
// });

//console.log(course);

// filter: tìm kiếm toàn bộ phần tử trong mảng theo điều kiện
var listCourse = courses.filter(function(course, index) {
    return course.name === 'Ruby';
});

console.log(listCourse);

// Bài tập: Hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
// Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
];

function getMostFavoriteSport(arr) {
    return arr.filter(function(sport, index) {
        return sport.like > 5;
    });
}

// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

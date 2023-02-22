// 1. Math.PI: trả về số pi
console.log('Trả về số PI: ' + Math.PI);

// 2. Math.round: làm tròn số
console.log('Làm tròn số: ' + Math.round(1.4));

// 3. Math.abs: nhận giá trị tuyệt đối
console.log('Giá trị tuyệt đối')

// 4. ceil: làm tròn trên, giá trị phải > 0
console.log('Làm tròn trên: ' + Math.ceil(4.000001));

// 5. floor: làm tròn dưới, giá trị phải > 0
console.log('Làm tròn dưới: ' + Math.floor(4.9));

// 6. random
var random = Math.floor(Math.random() * 5);

var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[random]);

// Bài tập: Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
} 

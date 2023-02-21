var myString = " Hoc JS tai JS JS F8! ";

// 1. Find index
console.log('Tìm vị trí chuỗi JS đầu tiên trong chuỗi: ' + myString.indexOf('JS'));
console.log('Tìm vị trí chuỗi JS đầu tiên bắt đầu từ vị trí muốn tìm cho đến hết chuỗi: ' + myString.indexOf('JS', 6));
console.log('Tìm vị trí chuỗi JS cuối cùng trong dãy: ' + myString.lastIndexOf('JS'));
// search ko thể tìm từ vị trí mong muốn như indexOf
console.log('Tìm vị trí chuỗi JS đầu tiên trong chuỗi bằng method search: ' + myString.search('JS'));

// 2. Cut string
console.log('Cắt chuỗi từ vị trí bắt đầu đến vị trí kết thúc: '+ myString.slice(4, 6));
console.log('Cắt chuỗi từ vị trí bắt đầu đến hết chuỗi: '+ myString.slice(4));
console.log('Cắt nguyên chuỗi: '+ myString.slice(0));
console.log('Cắt nguyên chuỗi từ phải sang trái từ vị trí bắt đầu đến kết thúc: '+ myString.slice(-3, -1));

// 3. Replace 
console.log('Thay đổi chữ trong chuỗi: ' + myString.replace('Hoc', 'Học'));
console.log('Thay toàn bộ chữ tìm kiếm được trong chuỗi: ' + myString.replace(/JS/g, 'Javascript'));

// 4. Trim
console.log('Xóa khoảng trắng hai đầu của chuỗi: ' + myString.trim());

// 5. Split: Biến chuỗi thành mảng
var languages = 'PHP, Java, Ruby';
console.log(languages.split(', '));

// 6. Lấy ra index của một ký tự trong chuỗi
const fullName= "Anh Khoa";
console.log(fullName.charAt(0)); 

// Bài 1: Cho trước chuỗi coursesStr chứa tên các khóa học cách nhau bởi dấu ,. 
// Bạn hãy viết hàm strToArray nhận vào 1 tham số là str và trả về 1 mảng chứa tên các khóa học.
var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    return str.split(', ');
}

console.log(strToArray(coursesStr));

// Bài 2:Bbạn hãy hoàn thành hàm getContentLength. Hàm này sẽ trả về độ dài của tham số content.
function getContentLength(str) {
    return str.length;
}

console.log(getContentLength('ANHKHOA'));

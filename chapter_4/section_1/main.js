/*
Chuỗi trong JS 

1. Tạo chuỗi
- Các cách tạo chuỗi
- Nên dùng cách nào? Lý do?
- Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code 
5. Template string ES6
*/

var fullName = "Đây là \"Khoa\"";
console.log(fullName);
console.log('Độ dài chuỗi fullname ' + fullName.length);

var text = "Đây là dấu \\";
console.log(text);

var myStr = "Có 3 bước để làm việc hiêu quả"
+ " 1. Tập trung"
+ " 2. Suy nghĩ";
console.log(myStr);

var firstName = "Anh";
var lastName = "Khoa";
console.log(`Tôi là: ${firstName} ${lastName}`);

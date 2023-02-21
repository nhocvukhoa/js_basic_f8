/*
    1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type
    2. Làm việc với number 
    - To String 
*/

var result = 20 / "ABC";
// Sử dụng NaN để check các dạng toán như tạo máy tính khi người dùng nhập sai
console.log(isNaN(result));

var age = 23;
// Sử dụng toString để chuyển số thành chuỗi
console.log(typeof age.toString());

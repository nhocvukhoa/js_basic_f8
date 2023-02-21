/*
    1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type 
    2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

var languages = ['PHP', 'Ruby', 'Dart'];

// typeof của 1 array là object
console.log(typeof languages);
// vậy nên để kiểm tra có phải là array không ta dùng Array.isArray
console.log(Array.isArray(languages));

console.log('Độ dài của mảng là: ' + languages.length);
console.log(languages[0]);

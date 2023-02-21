var languages = ['JS', 'PHP', 'Ruby'];

// 1. toString: chuyển array thành chuỗi
console.log('Chuyển array thành chuỗi: ' + languages.toString());

// 2. shift: xóa phần tử đầu mảng, nếu mảng ko còn gì trả về undefined
// console.log(languages.shift());
// console.log(languages);

// 3. pop: xóa phần tử cuối mảng, nếu mảng ko còn gì trả về undefined
// console.log(languages.pop());
// console.log(languages);

// 4. unshift: thêm phần tử đầu mảng
// console.log(languages.unshift('Dart'));
// console.log(languages);

// 5. push: thêm phần tử cuối mảng
// console.log(languages.push('Dart'));
// console.log(languages);

// 6. splice(index start, deleteCount) : xóa một hay nhiều phần tử => splice để xóa
// languages.splice(1, 2);
// console.log(languages);

// 7. splice(index start, có xóa thằng nào ko, phần tử mới muốn chèn) : xóa một hay nhiều phần tử => splice để chèn
// languages.splice(1, 0, 'Dart');
// console.log(languages);

// 8. concat: nối array
var languages2 = ['Dart', 'Perl'];
console.log(languages.concat(languages));


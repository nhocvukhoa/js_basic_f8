/**
Tham số trong hàm
1. Tham số?
- Định nghĩa?
+ Định nghĩa trong hàm là tham số
+ Gọi hàm thực thi truyền vào là đối số
- Kiểu dữ liệu: không giới hạn
- Tính private
- 1 tham số
- Nhiều tham số
2. Truyền tham số
- 1 tham số
- Nhiều tham số
3. Arguments?
- Đối tượng arguments
- Giới thiệu vòng for
 */

function showMessage(message) {
    console.log(message);
}

showMessage('hello');

function writeLog() {
    var myString = "";

    for (var param of arguments) {
        myString += `${param} - `
    }

    console.log(myString);
}

writeLog('Log 1', 'Log 2');

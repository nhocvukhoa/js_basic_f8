/**
Một số điều cần biết về function 

1. Khi function đặt trùng tên?
- Function sau cùng sẽ được thực thi nếu gọi trùng tên
2. Khai báo biến trong hàm?
- Phạm vi biến được định nghĩa trong hàm chỉ thuộc hàm
3. Định nghĩa hàm trong hàm?
 */

//Ví dụ 1
function test() {
    var fullName = "Khoa";

    console.log(fullName);
}

test();

//Ví dụ 2
function message() {
    function message2() {
        console.log('message 2');
    }

    message2();
}

message();


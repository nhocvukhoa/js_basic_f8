var date = new Date();

console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());

// Bài tập: Hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.
function getNextYear() {
    var date = new Date();

    return date.getFullYear() + 1;
}

getNextYear();

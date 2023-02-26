// Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, 
// các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

function getRandNumbers(min, max, length) {
    // Mảng mới được tạo ra
    var arr = [];

    for (var i = 0; i < length; i++) {
        arr.push(Math.random() * (max - min) + min);
    }

    return arr;
}

console.log(getRandNumbers(1, 10, 3));

// Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
// Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(obj) {
    var result = 0;
    var objLength = obj.length;

    for (var i = 0; i < objLength; i++) {
        result = result + obj[i].price;
    }

    return result;
}

console.log(getTotal(orders));

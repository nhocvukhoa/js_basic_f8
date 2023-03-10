// 1. Là một định dạng dữ liệu (chuỗi)
// 2. Javascript Object Notation
// 3. JSON: number, string, array, object, boolean
// 4. Stringify: từ javascript type -> JSON 
// 5. Parse: từ JSON sang javascript types

var a = 'true';
console.log(JSON.parse(a));

// Dạng chuỗi của json
var b = '"JS"';
console.log(JSON.parse(b));

// Dạng array của json 
var c = '["PHP", "JS"]';
console.log(JSON.parse(c));

// Dạng object của json
var d = '{"name":"ANH KHOA","age":18}';
console.log(JSON.parse(d));

console.log(JSON.stringify({
    name: 'Xuân Hương',
    age: 20,
    test: function () {

    }
}));
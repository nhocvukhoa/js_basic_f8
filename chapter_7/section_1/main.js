var emailKey = 'email';

var myInfo = {
    name: 'Khoa',
    age: 23,
    address: 'Hội An',
    emailKey: 'nvanhkhoa148@gmail.com',
    getName: function() {
        return this.name;
    }
}

// Thêm phone
myInfo.phone = '0965072239';

// Thêm school
myInfo['my-school'] = 'UTE';

// Xóa key 
delete myInfo.age;

// Log kết quả function getName
console.log(myInfo.getName());

console.log(myInfo);

// Chung quy lại function trong object gọi là method, còn lại gọi là property

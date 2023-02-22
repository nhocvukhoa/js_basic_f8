function User (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

var author = new User('Khoa', 'Nguyễn', 'Avatar');
var user = new User('Anh', 'Nguyễn', 'Avatar');

author.title = 'em hỏi gì';
user.title = 'em hỏi cái kia';

console.log(author.getName());
console.log(user);

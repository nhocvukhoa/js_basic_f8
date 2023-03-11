// Ví dụ 1
var promise = new Promise(function(resolve, reject) {
    resolve();
});

promise
    .then(function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve([1,2 ,3]);
            });
        });
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(data);
        return 3;
    })
    .catch(function(err) {

    })
    .finally(function() {
        console.log('Done');
    });

// Ví dụ 2
function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms)
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
    })

// ví dụ 3: xử lý lại code bị hell bên dưới
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })

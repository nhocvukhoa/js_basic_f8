// promise sinh ra để xý lý thao tác bất đồng bộ
// trước khi có promise, có callback nhưng dễ bị callback hell
// để tạo ra promise ta sử dụng từ khóa new Promise 
// trong constructor tạo ra một executor function dạng hàm dạng hàm là resolve và reject
// promise có 3 trạng thái: Pending, Fulfilled, Rejected

var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Thành công: resolve
        // Thất bại: reject 
        resolve([
            {
                id: 1,
                name: "Anh Khoa"
            }
        ])
        //reject('Có lỗi');
    }
)

promise
    .then(function(users) {
        console.log(users);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done');
    });
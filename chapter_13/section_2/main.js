// sync: đồng bộ
// async: bất đồng bộ => setTimeout, setInterval, fetch, xmlhttprequest, file reading, 

// Tác vụ async
setTimeout(function() {
    console.log(1);
}, 1000);

console.log(2); // Tác vụ sync


var arr = [];

for (var i = 0; i <= 2; i++) {
    (function (x) {
        arr[i] = function () {
            console.log(x);
        };
    })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2

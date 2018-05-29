var arr = [34, 5, 56, 23, 3, 16, -1];
var i = arr.lenght;
var swap = false;

do {
    swap = false;
    for (var j = 0; j < i - 1; j++) {
        arr++;
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swap = true;
        }
    }
    i--
} while (i >= 0 && swap)

console.log(arr)
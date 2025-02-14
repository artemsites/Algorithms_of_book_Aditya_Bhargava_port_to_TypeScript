var numbers = [1, 5, 7, 9, 11, 55, 66, 75, 89, 95, 101, 115, 128]; // упорядоченный список
var numberSearch = 89;
function binary_search(arr, search) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var middle = Math.ceil((low + high) / 2);
        var guess = arr[middle];
        if (guess === search) {
            return middle;
        }
        else if (guess > search) {
            high = middle - 1;
        }
        else {
            low = middle + 1;
        }
    }
    return null;
}
document.write("arr: ", JSON.stringify(numbers));
document.write("<br>");
document.write("search: ", JSON.stringify(numberSearch));
document.write("<br>");
document.write("Позиция искомого числа в массиве = ");
document.write(JSON.stringify(binary_search(numbers, numberSearch)));

const numbers = [1, 5, 7, 9, 11, 55, 66, 75, 89, 95, 101, 115, 128]; // упорядоченный список
const numberSearch = 89;

function binary_search(arr: number[], search: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const middle = Math.ceil((low + high) / 2);

    const guess = arr[middle];

    if (guess === search) {
      return middle;
    } else if (guess > search) {
      high = middle - 1;
    } else {
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

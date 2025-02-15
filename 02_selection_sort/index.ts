document.write(JSON.stringify(selectionSort([5, 3, 6, 2, 10])));

function selectionSort(arr: number[]) {
  const arrNew = [];
  const arrCopied = [...arr];

  for (const i in arr) {
    const smallestIndex = findSmallest(arrCopied);
    const pulledItem = arrCopied.splice(smallestIndex, 1)[0];
    arrNew.push(pulledItem);
  }

  return arrNew;
}

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

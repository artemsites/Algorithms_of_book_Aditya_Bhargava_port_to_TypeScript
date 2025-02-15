var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
document.write(JSON.stringify(selectionSort([5, 3, 6, 2, 10])));
function selectionSort(arr) {
    var arrNew = [];
    var arrCopied = __spreadArray([], arr, true);
    for (var i in arr) {
        var smallestIndex = findSmallest(arrCopied);
        var pulledItem = arrCopied.splice(smallestIndex, 1)[0];
        arrNew.push(pulledItem);
    }
    return arrNew;
}
function findSmallest(arr) {
    var smallest = arr[0];
    var smallestIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

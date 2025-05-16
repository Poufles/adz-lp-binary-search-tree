/**
 * Sorts an array.
 * @param {Array} arr Array to be sorted. 
 */
export default function MergeSort(arr, removeDuplicates = false) {
    if (arr.length === 1) return arr.slice();

    const midpoint = arr.length / 2;
    const leftArr = arr.slice(0, midpoint);
    const rightArr = arr.slice(midpoint);

    let left = MergeSort(leftArr);
    let right = MergeSort(rightArr);

    const sortedArr = [];

    left = left.filter(el => isFinite(el) && el !== null);
    right = right.filter(el => isFinite(el) && el !== null);

    let index = 0, jndex = 0;
    while (index < left.length && jndex < right.length) {
        if (left[index] < right[jndex]) {
            sortedArr.push(left[index++]);
        } else {
            sortedArr.push(right[jndex++]);
        };
    };

    while (index < left.length) sortedArr.push(left[index++]);
    while (jndex < right.length) sortedArr.push(right[jndex++]);

    return sortedArr;
};
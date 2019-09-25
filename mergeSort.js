function mergeSort(array) {
    console.log(array)
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    console.log(`merging ${left}-with-${right}`)
    return merge(left, right, array);
};

function counter(array){
    var counter =0

}
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

/**
 * 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
 * What is the resulting list that will be sorted after 3 recursive calls to mergesort?
 * [21, 1, 26, 45, 29, 28, 2, 9]
 * [21, 1, 26, 45]
 * [21, 1]
 * [21]
 * [1] - merge to [1,21] left
 * [26,45]
 * [26]
 * [45] - merge to [26,45] right
 * --merge to  [1,21,26,45] left
 * [ 29, 28, 2, 9]
 * [29,28]
 * [29]
 * [28]-merge to [28,29]left
 * [2,9]
 * [2]
 * [9]-merge to [2,9] right
 * --merge to [2,9,28,29] right
 * ---merge to [1,2,9,21,26,28,29,45] left
 * [16, 49, 39, 27, 43, 34, 46, 40]
 * [16, 49, 39, 27]
 * [16,49]
 * [16]
 * [49]
 * -merge to [16,49] left
 * [39, 27]
 * [39]
 * [27]
 * -merge to [27,39] right
 * --merge to  [16,27,39,49] left
 * [43, 34, 46, 40]
 * [43,34]
 * [43]
 * [34] - merge to [34,43] left
 * [46,40]
 * [46]
 * [40] -merge to [40,46] right
 * -- merge to [34,40,43,46] right
 * --- merge to [16,27,34,39,40,43,46,49] right 
 * ----merge to [1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49]
 * 
 * 
 */

console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]))

const myNumbers = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5"
const myArrNumbers = myNumbers.split(' ')
for (const i in myArrNumbers){
    myArrNumbers[i]= parseInt(myArrNumbers[i])
}
console.log(mergeSort(myArrNumbers))
function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    //console.log(`middle-${middle}`)
    //console.log(array.slice(start,middle), array.slice(middle+1,end))
    array = quickSort(array, start, middle);
    //console.log(`first-${array}`)
    array = quickSort(array, middle + 1, end);
    //console.log(`second-${array}`)
    
    return array;
};

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    //console.log(`pivot-${pivot}`)
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};
/**
 * 
 * 1) Suppose you are debugging a quicksort implementation that is supposed 
 * to sort an array in ascending order. After the first partition step has been completed, 
 * the contents of the array is in the following order: 
 * 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been 17, but could not have been 14 
    -False could have been either.
The pivot could have been either 14 or 17
    -True all numbers left of 17 or 14 are smaller than themselves, to the righ larger
Neither 14 nor 17 could have been the pivot
    -False - see above
The pivot could have been 14, but could not have been 17
    -False - see above


    2) Given the following list of numbers 
    14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
    show the resulting list after the second partitioning 
    -10,3,9,12,19,14,17,16,13,15
    --3,9,10,12,19,14,17,16,13,15
    according to the quicksort algorithm.
    -10,3,13,12,9,14,17,15,19,16 -- 14
    --9,3,10,13,12,14,17,15,19,16 -- 10

When using the last item on the list as a pivot
    
When using the first item on the list as a pivot
 */
console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]))

const myNumbers = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5"
const myArrNumbers = myNumbers.split(' ')
for (const i in myArrNumbers){
    myArrNumbers[i]= parseInt(myArrNumbers[i])
}
console.log(quickSort(myArrNumbers))
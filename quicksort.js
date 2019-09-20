function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log(`middle-${middle}`)
    console.log(array.slice(start,middle), array.slice(middle+1,end))
    array = quickSort(array, start, middle);
    console.log(`first-${array}`)
    array = quickSort(array, middle + 1, end);
    console.log(`second-${array}`)
    
    return array;
};

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    console.log(`pivot-${pivot}`)
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
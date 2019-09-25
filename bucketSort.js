/**
 * 
 * Write an O(n) algorithm to sort an array of integers, 
 * where you know in advance what the lowest and highest values are. 
 * You can't use arr.splice(), shift() or unshift() for this exercise.
 * 
 * 1. Create buckest and put elements into them
 * 2. Apply sorting algorithm (Insertion Sort) to sort the element in each bucket
 * 3. Take elements out and join them to get sorted result
 * 4. Find the divider
 * 5. B[j]= arr[i]
 *      j =floor(arr[i]/divider)
 * 6. Iterate through array filling the buckets
 * 7. Iterate through the array of buckets on each indexed bucket
 *      7.1 if we have numbers we use bubble sort.
 *      7.2 if nothing we do nothing
 * 8. Fill new array.
 * 
 * unsorted = [22,45,12,8,10,6,72,81,33,18,50,14]
 * smallest = 6
 * largest = 81
 * 12 items.
 * Need 10 buckets indexed from 0-9
 * 
 * divider = ceil((max+1)/bucketLength)
 * divider = ceil((81+1)/10)
 * divider = ceil(8.2)
 * divider = 9
 * 
 * first item = 
 *      j = floor(22/9)
 *      j = floor(2.4444)
 *      j = 2
 * 
 * second item = 
 *     j = floor(45/9)
 *     j = 5
 */



function dividerFx(myMax){
    return Math.ceil((myMax+1)/10)
}

function fillArray(sortedBucket, array){
    for (const i in sortedBucket ){
        array.push(sortedBucket[i])
    }
    return array
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }
    //recursive portion call it on the new array
    if (swaps > 0) {
        return bubbleSort(array);
    }
    //base case
    return array;
};

function bucketSort(arr,largest,smallest){
    const divider = dividerFx(largest)
    const bucketSize = arr.length-2
    console.log(divider)
    console.log(bucketSize)
    const bucket = [] 
    var bucketIndex
    for (const i in arr ){
        bucketIndex = Math.floor(arr[i]/divider)
        console.log(`${arr[i]}/${divider} =${divider}`)
        if (bucket[bucketIndex]){
            bucket[bucketIndex][bucket[bucketIndex].length] = arr[i]
        }
        else {
           bucket[bucketIndex]=[arr[i]] 
        }
    }
    console.log(bucket)
}   

function main(){
    const unsorted = [22,45,12,8,10,6,72,81,33,18,50,14]
    const smallest = 6
    const largest = 81
    console.log(bucketSort(unsorted,largest,smallest))

}

main()
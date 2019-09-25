function compareBook(book1,book2){
    var leftSmaller = true
    const leftArr = book1.toLowerCase().split('')
    const rightArr = book2.toLowerCase().split('')
    var leftLetter, rightLetter
    console.log(book1,book2)
    while (leftArr.length>=1 && rightArr.length>=1){
        leftLetter = leftArr.shift()
        rightLetter = rightArr.shift()
        if (rightLetter<leftLetter){
            return false
        }
    }
    if (leftArr.length>0){
        return false
    }
    return leftSmaller
}
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

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (compareBook(left[leftIndex], right[rightIndex])) {
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
function testCompareBooks(){
    const book1 = "a book 1"
    const book2 = "a book 2"
    const book3 = "b book 3"
    const book6 = "d c book 6"
    const book7 = "d c book 6 7"
    console.log(`Should return true - ${compareBook(book1,book2)}`)
    console.log(`Should return true - ${compareBook(book1,book3)}`)
    console.log(`Should return false - ${compareBook(book2,book1)}`)
    console.log(`Should return false - ${compareBook(book3,book1)}`)
    console.log(`Should return false - ${compareBook(book7,book6)}`)
    console.log(`Should return true - ${compareBook(book6,book7)}`)
}
function main(){
    const books = [
        "d c book 6",
        "d c book 6 7",
        "c book 4",
        "a book 1",
        "b book 3",
        "d book 5",
        "a book 2"  
    ]
    
    console.log(`
    ******************** Unsorted Books ********************
    ${books}
    ******************** Sorted Books (hopefully) ********************
    ${mergeSort(books)}
    `)
}
//testCompareBooks()
main()
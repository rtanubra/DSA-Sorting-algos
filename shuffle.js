function shuffleArr(arr){
    var shuffleCounter = arr.length * 3
    const indexMax = arr.length-1
    while (shuffleCounter >0){
        index1 = Math.floor(Math.random()*(indexMax+1))
        index2 = Math.floor(Math.random()*(indexMax+1))
        arr= swap(arr,index1,index2)
        shuffleCounter -=1
    }
    return arr

}
function swap(arr,index1,index2){
    const firstInp = arr[index1]
    const secondInp = arr[index2]
    arr[index1]= secondInp
    arr[index2]= firstInp
    return arr
}

function main(){
    const array = [1,2,3,4,5,6,7,8,9,10,11]
    console.log(`
    Sorted array - ${array}
    Shuffled - ${shuffleArr(array)}
    `)
}

main()
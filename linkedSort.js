const {_Node, size, printMyList,LinkedList } = require('./linkedList')



/**
 * for the linkedList functions remmember 
 * input is the node, not the list
 */

function sortLinked(myList){
    const mySize = size(myList.head)
    //console.log(mySize)
    if (mySize <=1){
        return myList
    }
    //created my right list
    var rightList = new LinkedList()
    if(mySize==2){
        rightList.head = myList.head.next
        myList.head.next = null
        myList = sortLinked(myList)
        rightList =sortLinked(rightList)
    } 
    else {
        const half = Math.floor(mySize/2)
        
        var halfNode = myList.head
        var i =1
        while (i <half ){
            i = i+ 1
            halfNode = halfNode.next
        }

        // console.log(halfNode.value)
        
        rightList.head = halfNode.next
        //myList is my list on the left side
        halfNode.next = null
        //console.log(`left ${printMyList(myList.head)}`)
        myList = sortLinked(myList)
        //console.log(`right ${printMyList(rightList.head)}`)
        rightList = sortLinked(rightList)
    }
    return mergeLinkedLists(myList,rightList)
    
}

function mergeLinkedLists(list1,list2){
    const newList = new LinkedList()
    var valueLeft,valueRight
    while (size(list1.head) >0 && size(list2.head) >0 ){
        //compare and build list
        valueLeft = list1.head.value 
        valueRight = list2.head.value
        // console.log(`${valueLeft},${valueRight}`)
        if (valueLeft <= valueRight){
            list1.remove(valueLeft)
            newList.insertLast(valueLeft)
        } else {
            list2.remove(valueRight)
            newList.insertLast(valueRight)
        }
        // console.log(`Current List`)
        // printMyList(newList.head)
    }
    while (size(list1.head)>0){
        valueLeft = list1.head.value 
        list1.remove(valueLeft)
        newList.insertLast(valueLeft)
    }
    while (size(list2.head)>0){
        valueRight = list2.head.value
        list2.remove(valueRight)
        newList.insertLast(valueRight)
    }
    // console.log(`Final List`)
    // printMyList(newList.head)
    return newList

}


function mergeLinkedListsTest(){
    console.log(`******************************************** mergeLinkedListsTest *******************************`)
    const leftArr = [4,8,10,100,200,300]
    const rightArr = [1,6,13,25,36,46,56,91]
    const linkedLeft = new LinkedList()
    const linkedRight = new LinkedList()
    for (const i in leftArr){
        linkedLeft.insertLast(leftArr[i])
    }
    for (const i in rightArr){
        linkedRight.insertLast(rightArr[i])
    }
    console.log(`Left`)
    printMyList(linkedLeft.head)
    console.log(`Right`)
    printMyList(linkedRight.head)
    console.log(`Merged`)
    const mergedList = mergeLinkedLists(linkedLeft,linkedRight)
    printMyList(mergedList.head)
}

function tester(){
    console.log(`********************************************TESTER*******************************`)
    //mergeLinkedListsTest()
    const myNumbers = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
    const myNumbers0 = [21,10,3]
    const myList = new LinkedList()
    for (const i in myNumbers){
        myList.insertLast(myNumbers[i])
    }
    console.log(`Starting`)
    printMyList(myList.head)
    const sortedList = sortLinked(myList)
    console.log(`Sorted`)
    printMyList(sortedList.head)
}

tester()

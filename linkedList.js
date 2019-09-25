class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    insertAfter(valueInsert,valueToLook){
        //null scenario
        if (this.head === null){
            console.log(`Could not find ${valueToLook} because your list is null sorry, no inserts made `)
        }
        let currentNode = this.head
        while (currentNode.value !==valueToLook && currentNode.next !== null ){
                currentNode = currentNode.next
            }
            if (currentNode.value === valueToLook){
                //present
                const insertMyNode = new _Node(valueInsert,currentNode.next)
                currentNode.next = insertMyNode
                console.log(`inserted ${valueInsert} after ${valueToLook}`)
            }else{
                //not present
                console.log(`Could not find ${valueToLook}, no inserts made `)
            }
    }
    insertBefore(valueInsert, valueToLook){
        
        //null scenario
        if (this.head === null){
            console.log(`Could not find ${valueToLook} because your list is null sorry, no inserts made `)
        }
        let currentNode = this.head

        //start scenario
        if (currentNode.value ===valueToLook ){
            this.insertFirst(valueInsert)
            console.log(`inserted ${valueInsert} before ${valueToLook}`)
        } 
        else {
            let previousNode
            //other scenario
            while (currentNode.value !==valueToLook && currentNode.next !== null ){
                previousNode = currentNode
                currentNode = currentNode.next
            }
            if (currentNode.value === valueToLook){
                const insertMyNode = new _Node(valueInsert,currentNode)
                previousNode.next = insertMyNode
                console.log(`inserted ${valueInsert} before ${valueToLook}`)
            }else{
                console.log(`Could not find ${valueToLook}, no inserts made `)
            }
            //reach the end scenario
        }
        
    }
    insertAt(insertValue, index){
        var count = 0
        let previousNode 
        let currentNode = this.head
        //start incrementing
        if(index ===0){
            this.insertFirst(insertValue)
        }
        else {
                while (count < index && currentNode.next !== null ){
                        count += 1
                        previousNode = currentNode
                        currentNode = currentNode.next
                    }
                if (count < index){
                    console.log(`Coult not insert ${insertValue} to index ${index} because index exceeds linkedlist index`)
                }
                else {
                    const newNode = new _Node(insertValue,currentNode)
                    previousNode.next=newNode
                }
            }
        
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}
function printMyList(node){
    var currentNode = node
    console.log(currentNode.value)
    while (currentNode.next !==null){
        currentNode = currentNode.next
        console.log(currentNode.value)
    }
}

function size(node){
    if (!node){
        return 0
    }
    else {
        var count = 1
        var currentNode = node
        while (currentNode.next !== null){
            count += 1
            currentNode = currentNode.next
        }
        return count
    }
}

module.exports = {_Node, size, printMyList,LinkedList }
import LinkedList from "./structures/LinkedList/index";

const linkedList = new LinkedList()

linkedList.append('newValue')
const linkedListArray = linkedList.toArray()

console.log({linkedListArray});
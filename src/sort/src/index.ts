import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import {LinkedList} from "./LinkedList";

console.log("Numbers Collection")
const numbersCollections = new NumbersCollection([2,3,4,5,5,1,2,3,-2])
numbersCollections.sort()
console.log(numbersCollections)

console.log("linkedList")
const linkedList = new LinkedList()
linkedList.add(34)
linkedList.add(23)
linkedList.add(32)
linkedList.sort()
linkedList.print()

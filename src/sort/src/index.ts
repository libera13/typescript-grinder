import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import {LinkedList} from "./LinkedList";

const sorter = new Sorter(new NumbersCollection([2,3,4,5,5,1,2,3,-2]))
// const linen = new Sorter(new LinkedList())
console.log(sorter.sort());
console.log(sorter.collection);
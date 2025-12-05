import { bubbleSort } from './bubble';
import { cocktailSort } from './cocktail';
import { heapSort } from './heap';
import { insertionSort } from './insertion';
import { mergeSort } from './merge';
import { quickSort } from './quick';
import { selectionSort } from './selection';
import { shellSort } from './shell';
import { radixSort } from './radix';
import { bucketSort } from './bucket';


export const algoList = [
  {
    name: 'bubble',
    fn: bubbleSort,
  },
  {
    name: 'selection',
    fn: selectionSort,
  },
  {
    name: 'insertion',
    fn: insertionSort,
  },
  {
    name: 'heap',
    fn: heapSort,
  },
  {
    name: 'merge',
    fn: mergeSort,
  },
  {
    name: 'quick',
    fn: quickSort,
  },
  {
    name: 'shell',
    fn: shellSort,
  },
  {
    name: 'cocktail',
    fn: cocktailSort,
  },
  {
  name: 'Radix Sort (LSD)',
  fn: radixSort,
},

{
  name: 'Bucket Sort',
  fn: bucketSort,
},



];

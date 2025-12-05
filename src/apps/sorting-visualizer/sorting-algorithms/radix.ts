import { highlight, sort, swap } from '@sortViz/helpers/algorithm-helpers';
import { SortAsyncGenerator } from '@sortViz/models/types';

export async function* radixSort(array: number[]): SortAsyncGenerator {
  const maxNum = Math.max(...array);
  let exp = 1;

  while (Math.floor(maxNum / exp) > 0) {
    yield* countingSort(array, exp);
    exp *= 10;
  }

  // Mark entire array sorted at the end
  for (let i = 0; i < array.length; i++) {
    yield* sort(i);
  }
}

async function* countingSort(array: number[], exp: number): SortAsyncGenerator {
  const n = array.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  // Count frequencies
  for (let i = 0; i < n; i++) {
    const index = Math.floor(array[i] / exp) % 10;
    count[index]++;
    yield* highlight(i, -1);
  }

  // Prefix sum (cumulative)
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build output array (stable)
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(array[i] / exp) % 10;
    output[count[index] - 1] = array[i];
    count[index]--;
  }

  // Copy back & visually update
  for (let i = 0; i < n; i++) {
    if (array[i] !== output[i]) {
      array[i] = output[i];
      yield* swap(array, i, i);  // triggers UI update
    }
  }
}

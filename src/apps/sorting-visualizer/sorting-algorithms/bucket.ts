import { highlight, sort } from '@sortViz/helpers/algorithm-helpers';
import { SortAsyncGenerator } from '@sortViz/models/types';

export async function* bucketSort(array: number[]): SortAsyncGenerator {
  const n = array.length;
  if (n <= 1) return;

  const numBuckets = Math.floor(Math.sqrt(n));
  const buckets: number[][] = Array.from({ length: numBuckets }, () => []);

  // Step 1: Highlight scan while assigning to buckets
  for (let i = 0; i < n; i++) {
    yield* highlight(i, -1);
    const bucketIndex = Math.min(
      numBuckets - 1,
      Math.floor(array[i] * numBuckets)
    );
    buckets[bucketIndex].push(array[i]);
  }

  // Step 2: Sort inside buckets (insertion sort, no animation)
  for (let b = 0; b < numBuckets; b++) {
    buckets[b].sort((a, b) => a - b);
  }

  // Step 3: Write sorted values back with sort() animation
  let index = 0;
  for (let b = 0; b < numBuckets; b++) {
    for (let i = 0; i < buckets[b].length; i++) {
      array[index] = buckets[b][i];
      
      // Show write animation by highlighting then marking final
      yield* highlight(index, -1);
      yield* sort(index);

      index++;
    }
  }
}

/*
worst and average case O(n^2)
best case O(n)
*/

function BubbleSort(arr){
  
  let n = arr.length;

  for (let i=0; i<n; i++){

    for (let j=0; j<(n - 1 - i); j++){

      if (arr[j] > arr[j+1]){

        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return `sorted array: ${arr}`;
}
  

function InsertSort(arr){

  let n = arr.length;

  for (let i=0; i<n; i++){

    let curr = arr[i];
    let j = i - 1;

    while ((j > -1) && (curr < arr[j])){
      arr[j+1] = arr[j];
      j--;
    }

    arr[j+1] = curr;
  }

  return `sorted array: ${arr}`;
}
  

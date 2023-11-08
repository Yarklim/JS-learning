// Сортировка пузырьком
function toBubble(arr) {
  let count = 0;

  while (count < arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    count += 1;
  }

  return arr;
}

// console.log(toBubble([3, 5, 2, 1, 4]));
// console.log(toBubble([3, 5, 2, 1, 4, 6, 7]));
//? ----------------------------------------------

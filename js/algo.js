// Сортировка пузырьком
function toBubble(arr) {
  let count = 0;

  while (count < arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      let a = arr[i];
      let b = arr[i + 1];

      if (a > b) {
        let temp = a;
        a = b;
        b = temp;

        arr[i] = a;
        arr[i + 1] = b;
      }
    }
    count += 1;
  }

  return arr;
}

// console.log(toBubble([3, 5, 2, 1, 4]));
// console.log(toBubble([3, 5, 2, 1, 4, 6, 7]));
//? ----------------------------------------------

//? ================= Бинарный поиск ==================
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (!found && start <= end) {
    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return position;
};

console.log(binarySearch(array, 12));

//? ===================================================

//? ================= Сортировка пузырьком ===============
function toBubble(arr) {
  let count = 0;

  while (count < arr.length) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // let temp = arr[i];

        // arr[i] = arr[i + 1];
        // arr[i + 1] = temp;

        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    count += 1;
  }

  return arr;
}

// console.log(toBubble([3, 5, 2, 1, 4]));
// console.log(toBubble([3, 5, 2, 1, 4, 6, 7]));
//? ======================================================

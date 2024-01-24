// =========================================== ПОИСК ==============================================
// =====================================================================================================

//? ================= Бинарный поиск O(log2n) ==================
const arraySort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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

// console.log(binarySearch(arraySort, 12));

const recursiveBinartSearch = (array, item, start, end) => {
  let middle = Math.floor((start + end) / 2);

  if (item === array[middle]) {
    return middle;
  }

  if (item < array[middle]) {
    return recursiveBinartSearch(array, item, start, middle - 1);
  } else {
    return recursiveBinartSearch(array, item, middle + 1, end);
  }
};

// console.log(recursiveBinartSearch(arraySort, 8, 0, arraySort.length));

//? ===================================================

// =========================================== СОРТИРОВКИ ==============================================
// =====================================================================================================

//? ================= Быстрая сортировка O(log2n * n) =================
/*
Самая эффективная сортировка!
Выбирается опорный элемент (чаще всего - центральный элемент массива), и массив делится на два массива,
в один помещаются элементы меньше опорного, во второй - больше.
Затем такая же операция проводится с каждым из этих массивов, до тех пор, пока длина исходного массива не станет 1.
После этого все маленькие, отсортированные массивы, склеиваются в один большой.
*/
const arr = [0, 4, 3, 12, -4, 45, 1, 6, 10, 9, 15, 2, 1, 7, 8, 11];

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
};
// console.log(quickSort(arr));
//? ======================================================

//? ================= Сортировка выбором O(n*n) =================
/*
Находим в массиве минимальное значение и меняем его местами с первым элементом,
затем снова находим минимальное значение после первого элемента и меняем его со вторым элементом,
и т.д. с третьим, четвертым...
*/
const arraySelect = [0, 4, 3, 12, -4, 45, 1, 6, 10, 9, 15, 2, 1, 7, 8, 11];

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
};
// console.log(selectionSort(arraySelect));

//? ======================================================

//? ================= Сортировка пузырьком O(n*n) ===============
/*
Пробегаемся по элементам, и если один элемент меньше другого, то меняем их местами
*/

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

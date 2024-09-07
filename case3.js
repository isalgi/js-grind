// SORT ARRAY FROM SMALLEST
let data_array = [
  1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];

//write code
const array_sort = (arr) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(array_sort(data_array));
// output [ 1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 9 ]

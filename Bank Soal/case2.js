// FILTER ARRAY
let data_array = [
  1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];
let input = 1;

//write code
const filterArray = (num, arr) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(filterArray(input, data_array));
// output [ 1, 1, 1, 1 ]

// COUNT DATA
let data_array = [
  1, 2, 4, 7, 3, 1, 5, 7, 8, 5, 9, 1, 3, 6, 2, 6, 5, 5, 5, 5, 1,
];
let input = 5;

//write code
const countData = (num, arr) => {
  for (let i = 0; i < data_array.length; i++) {
    if (num === arr[i]) {
      count++;
    }
  }

  return count;
};

console.log(countData(input, data_array));
// output 6

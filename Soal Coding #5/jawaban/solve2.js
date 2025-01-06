function sumDeep(char, arr, level = 1) {
  let sum = 0;

  for (const node of arr) {
    if (typeof node === "string") {
      for (let j = 0; j < node.length; j++) {
        if (node[j] === char) {
          sum += level;
          break;
        }
      }
    } else if (Array.isArray(node)) {
      sum += sumDeep(char, node, level + 1);
    }
  }

  return sum;
}

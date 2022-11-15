export function ShuffleArray(array) {
  let newArr = [];
  let selectedNum = [];

  while (selectedNum.length < array.length) {
    let j = Math.floor(Math.random() * array.length);
    if (!selectedNum.includes(j)) {
      selectedNum.push(j);
      newArr.push(array[j]);
    }
  }
  return newArr;
}

export function ShuffleArray(array) {
  let newArr = [];
  let selectedNum = [];

  while (selectedNum.length < array.length) {
    let j = RandomNum(array.length);
    if (!selectedNum.includes(j)) {
      selectedNum.push(j);
      newArr.push(array[j]);
    }
  }
  return newArr;
}

export function RandomNum(length) {
  const randNum = Math.floor(Math.random() * length);
  return randNum;
}

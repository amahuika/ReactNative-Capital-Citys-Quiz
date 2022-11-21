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

export function getWindDirection(windDeg) {
  if (windDeg > 90 && windDeg < 180) return "SE";
  if (windDeg > 0 && windDeg < 90) return "NE";
  if (windDeg > 180 && windDeg < 270) return "SW";
  if (windDeg > 270 && windDeg < 360) return "SE";
  if (windDeg === 360) return "N";
  if (windDeg === 180) return "S";
  if (windDeg === 90) return "E";
  if (windDeg === 270) return "W";
}

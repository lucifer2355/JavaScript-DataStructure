function minMax(arr) {
  let min = 0;
  let max = 0;

  if (arr.length === 1) {
    min = arr[0];
    max = arr[0];
  }

  if (arr[0] > arr[1]) {
    min = arr[1];
    max = arr[0];
  } else {
    min = arr[0];
    max = arr[1];
  }

  for (let i = 2; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  const result = {
    "min value": min,
    "max value": max,
  };

  return result;
}

console.log(minMax([2, 5, 7, 10, 20, 9]));

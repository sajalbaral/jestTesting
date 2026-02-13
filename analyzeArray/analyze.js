function avg(arr) {
  let len = arr.length;
  let total = arr.reduce((acc, value) => acc + value, 0);

  return total / len;
}

function min(arr) {
  return Math.min(...arr);
}

function max(arr) {
  return Math.max(...arr);
}

function len(arr) {
  return arr.length;
}

export function analyzeArray(arr) {
  if (arr.length === 0) return "Enter a nonempty array";
  if (arr.length === 1) return arr[0];

  return {
    average: avg(arr),
    minimum: min(arr),
    maximum: max(arr),
    leng: len(arr),
  };
}

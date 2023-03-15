const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  [
    [2, 3],
    [2, 3, 5],
    [1, 2],
  ],
];

// Array(13) [ 1, 2, 3, 3, 4, 5, 2, 3, 2, 3, … ]

console.log(complexArr.flat(Infinity));

// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] ->a.concat(b)
//[1,2,3].slice()

function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) =>
            a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}

console.log(flatArray(complexArr, Infinity));

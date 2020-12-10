const getSecondMinMax = (arr) => {
  //validating array for only isArray, contains number and have length more than 2 element
  let isArrayValid = true;
  Array.isArray(arr) &&
    arr.map((element) => {
      typeof element !== "number" && (isArrayValid = false);
    });
  arr.length < 3 && (isArrayValid = false);

  if (isArrayValid) {
    //remove duplicate elements
    arr = [...new Set(arr)];

    //finding min and max from the array
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    //removing min and max from the array
    arr.splice(arr.indexOf(max), 1);
    arr.splice(arr.indexOf(min), 1);

    //now finding again min and max from the array
    max = Math.max(...arr);
    min = Math.min(...arr);

    return `second min. no ${min} second max no ${max}`;
  } else {
    return "Invalid array : Min 3 element and all number";
  }
};

// Test cases
describe("getSecondMinMax", () => {
  test("should return a string", () => expect(typeof getSecondMinMax("a")).toEqual("string"));
  test("Should return second min and max value", () => {
    expect(getSecondMinMax([46, 23, 99, 1000, 9, 2])).toStrictEqual("second min. no 9 second max no 99");
    expect(getSecondMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual("second min. no 2 second max no 8");
    expect(getSecondMinMax([10, 22, 34, 56, 1, 9])).toStrictEqual("second min. no 9 second max no 34");
    expect(
      getSecondMinMax([
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        10,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        10,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
        5.11,
        5.12,
        5.13,
        5.14,
        3,
        4,
        3,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        14,
        15,
        18,
      ])
    ).toStrictEqual("second min. no 4 second max no 15");
  });
  test("Should return error statement", () => {
    expect(getSecondMinMax(["a", 1, "d", 9, 10])).toStrictEqual("Invalid array : Min 3 element and all number");
    expect(getSecondMinMax([])).toStrictEqual("Invalid array : Min 3 element and all number");
    expect(getSecondMinMax([1, 5])).toStrictEqual("Invalid array : Min 3 element and all number");
    expect(getSecondMinMax(["q"])).toStrictEqual("Invalid array : Min 3 element and all number");
  });
});

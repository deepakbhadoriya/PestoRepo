const getSecondMinMax = (arr) => {
    //validating array for only isArray, contains number and have length more than 2 element
    let isArrayValid = true;
    !Array.isArray(arr) && (isArrayValid = false)
    isArrayValid && arr.map(element => { (typeof element !== "number") && (isArrayValid = false) })
    arr.length < 3 && (isArrayValid = false)

    //sorting array
    isArrayValid && arr.sort((a, b) => { return a - b });

    //Checking if array is valid and returning result accordingly 
    return isArrayValid ? `second min. no ${arr[1]} second max no ${arr[arr.length - 2]}` : 'Invalid array should contain all number and have at least 3 elements'
}

// Test cases
describe("getSecondMinMax", () => {
    test("should return a string", () => expect(typeof getSecondMinMax("a")).toEqual("string"));
    test("Should return second min and max value", () => {
        expect(getSecondMinMax([46, 23, 99, 1000, 9, 2])).toStrictEqual('second min. no 9 second max no 99');
        expect(getSecondMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual('second min. no 2 second max no 8');
        expect(getSecondMinMax([10, 22, 34, 56, 1, 9])).toStrictEqual('second min. no 9 second max no 34');
    });
    test("Should return error statement", () => {
        expect(getSecondMinMax(["a", 1, "d", 9, 10])).toStrictEqual('Invalid array should contain all number and have at least 3 elements');
        expect(getSecondMinMax([])).toStrictEqual('Invalid array should contain all number and have at least 3 elements');
        expect(getSecondMinMax([1, 5])).toStrictEqual('Invalid array should contain all number and have at least 3 elements');
        expect(getSecondMinMax(['q'])).toStrictEqual('Invalid array should contain all number and have at least 3 elements');
    });
});
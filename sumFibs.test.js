const sumFibs = (num) => {
  let fibonacciSum = 0;
  let firstTerm = 0;
  let secondTerm = 1;
  if (num === 1 || num === 2) return 1;
  while (num >= secondTerm) {
    (secondTerm === 1 || secondTerm % 2 !== 0) && (fibonacciSum += secondTerm);
    secondTerm = firstTerm + secondTerm;
    firstTerm = secondTerm - firstTerm;
    secondTerm = secondTerm;
  }
  return fibonacciSum;
};

//Test cases
describe("sumFibs", () => {
  test("should return a number", () => expect(typeof sumFibs(1)).toEqual("number"));
  test("Should return the correct number", () => {
    expect(sumFibs(1000)).toBe(1785);
    expect(sumFibs(4000000)).toBe(4613732);
    expect(sumFibs(4)).toBe(5);
    expect(sumFibs(75024)).toBe(60696);
  });
});

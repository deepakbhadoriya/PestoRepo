const flipped = (...args) => args.reverse();

// console.log(flipped("a", "b", "c", "d", "e"));

// Test cases
describe("flipped", () => {
  test("should return a number", () => expect(typeof flipped("a")).toEqual("object"));
  test("Should return the arguments in reverse", () => {
    expect(flipped("a", "b", "c", "d", "e")).toStrictEqual(['e', 'd', 'c', 'b', 'a']);
    expect(flipped(1, 2, 3, 4, 5, 6, 7, 8, 9)).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});

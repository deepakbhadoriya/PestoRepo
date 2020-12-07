const handleLikePost = () => {
  let likeCount = 0;
  return () => likeCount += 1;
};

const likePost = handleLikePost();

//test case
describe("likePost", () => {
  test("should return a number", () => expect(typeof likePost()).toEqual("number"));
  test("Should return the number of likes", () => {
    expect(likePost()).toStrictEqual(2);
    expect(likePost()).toStrictEqual(3);
    expect(likePost()).toStrictEqual(4);
    expect(likePost()).toStrictEqual(5);
  });
});

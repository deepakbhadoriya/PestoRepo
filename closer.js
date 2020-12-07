const handleLikePost = () => {
  let likeCount = 0;
  return () => console.log((likeCount += 1));
};

const likePost = handleLikePost();

likePost();
likePost();
likePost();

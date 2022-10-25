const getRandomDateTimeForPost = () => {
  const randomDate = getRandomNumberBetween(1, 31);
  const randomHour = getRandomNumberBetween(0, 24);
  const randomMinute = getRandomNumberBetween(0, 60);
  const randomMonth = getRandomNumberBetween(0, new Date().getMonth());

  const now = new Date();
  let newDate = new Date(
    now.getFullYear(),
    randomMonth,
    randomDate,
    randomHour,
    randomMinute,
    0
  );
  console.log(newDate);
  return newDate;
};

const getRandomDateForComment = (postCreatedAt) => {
  const postDate = new Date(postCreatedAt);
  const minDate = postDate.getDate();
  const minMonth = postDate.getMonth();
  const randomDate = getRandomNumberBetween(minDate + 1, 30);
  const randomHour = getRandomNumberBetween(0, 23);
  const randomMinute = getRandomNumberBetween(0, 60);
  const randomMonth = getRandomNumberBetween(minMonth + 1, 12);

  const now = new Date();
  let newDate = new Date(
    now.getFullYear(),
    randomMonth,
    randomDate,
    randomHour,
    randomMinute,
    0
  );
  return newDate;
};

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export { getRandomDateTimeForPost, getRandomDateForComment };

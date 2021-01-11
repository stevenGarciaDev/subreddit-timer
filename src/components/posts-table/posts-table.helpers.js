import dayjs from 'dayjs';

export const getLinkTextToDisplay = (text, maxLength) => {
  if (text.length > maxLength) {
    const lengthOfElipsis = 3;
    const shortenedText = text.slice(0, maxLength - lengthOfElipsis);
    return `${shortenedText}...`;
  }
  return text;
};

export const getTimeOfPost = (createdAtUtc) => {
  const milliseconds = 1000;
  const dateOfPost = new Date(createdAtUtc * milliseconds);
  return dateOfPost;
};

export const getTimeToDisplay = (createdAtUtc) => {
  const dateOfPost = getTimeOfPost(createdAtUtc);
  return dayjs(dateOfPost).format('hh:mm A');
};

export const sortPostsByDate = (posts) => {
  if (posts.length === 0) return posts;
  return posts.sort((a, b) => {
    const { created_utc: createdUtcForPostA } = a.data;
    const { created_utc: createdUtcForPostB } = b.data;
    const dateOfPostA = getTimeOfPost(createdUtcForPostA);
    const dateOfPostB = getTimeOfPost(createdUtcForPostB);
    return dateOfPostA.getMinutes() - dateOfPostB.getMinutes();
  });
};

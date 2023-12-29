const currentDate = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const formattedDate = currentDate.toLocaleDateString('en-KH', options)
export const slugify = (str) => {
  const slug = str
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-'); // separator
  return slug;
};

export const textToHtml = (str) => {
  return '<p>' + str.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br />') + '</p>';
};

export const toSentenceCase = (str) => {
  const newString = str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
  return newString;
};

export const hashCode = (str) => {
  let hash = 0;
  let i;
  let character;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    character = str.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash |= 0;
  }
  return hash;
};

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

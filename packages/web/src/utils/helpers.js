
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

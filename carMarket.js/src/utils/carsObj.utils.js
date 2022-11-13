const cap1letter = (str) => {
  str = str[0].toUpperCase() + str.slice(1);
  return str.replace("_", " ");
};

export default cap1letter;

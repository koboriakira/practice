let count = (word, words) => {
  return words.has(word) ? words.get(word) + 1 : 1;
};

let lowerCase = el => el.toLowerCase();

let countWord = (line, words) => {
  exceptTagsAndSymbols(line)
    .split(' ')
    .map(lowerCase)
    .forEach(word => {
      words.set(word, count(word, words));
    });
  return words;
};

let countWords = (data, words) => {
  if (words === undefined) {
    words = new Map();
  }
  data.split('\n').forEach(line => {
    words = countWord(line, words);
  });
  return words;
};

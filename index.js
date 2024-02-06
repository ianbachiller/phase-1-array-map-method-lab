const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }
const newTutorialsButStillArrays = tutorials.map(function (tutorial) {
  return tutorial.split(" ");
});

function titleCased() {
  const newTutorials = newTutorialsButStillArrays.map(function (element) {
    return element
      .map(function (word) {
        return wordsToTitleCase(word);
      })
      .join(" ");
  });
  console.log(newTutorials);
  return newTutorials;
}

function wordsToTitleCase(word) {
  return word[0].toUpperCase() + word.slice(1);
}
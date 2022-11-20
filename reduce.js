const wordSmall = (str) => {
  if (!str || typeof str != "string") return null;
  let arrWords = str.trim().split(" d");
  // let wordSmall = arrWords[0];

  return arrWords.reduce((accum, arrWord) => {
    if (accum.length < arrWord.length) {
      return accum;
    }
    return arrWord;
  });
};

console.log(wordSmall("Olá Mundo ddfdfs tefdsf te"));
console.log(wordSmall("123 1 1234 123345"));

//   arrWord.forEach((element, i) => {
//     if (arrWord[i].length < wordSmall.length) {
//       wordSmall = arrWord[i];
//     }
//   });
//   return wordSmall;
// };
// for (let i = 0; i < arrWord.length; i++) {
//   if (arrWord[i].length < wordSmall.length) {
//     wordSmall = arrWord[i];
//   }
// }
// return wordSmall;

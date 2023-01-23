/*написати функцію, яка буде приймати рядок і повертає кількість голосних в рядку 
регістр не враховувати (рахувати і великі і маленькі)
працюємо тільки з латинецею
 */

const str1 = "ddbbcc";
const str2= "eee";
const str3 = "vowels and numbers";
const str4 = "enter ";

/**
 * get numbers of vowels letters from string
 * @param {string} str 
 * @returns {number}
 */
function getNumbersOfVowels(str) {
    const vowels = "aeiouAEIOU";
    const arrVowels = vowels.split(""); 
    let countLetters = 0;
    str.split("").forEach((letter)=>{
    if(arrVowels.indexOf(letter) !== -1){
      countLetters++;} });
    return countLetters;
}

console.log(getNumbersOfVowels(str1));
console.log(getNumbersOfVowels(str2));
console.log(getNumbersOfVowels(str3));
console.log(getNumbersOfVowels(str4));

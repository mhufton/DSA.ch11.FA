import "./styles.css";
const array = [1, 2, 3, 4, 5];

const sum = (a) => {
  // base case
  if (a.length === 1) return a[0];
  return a[0] + sum(a.slice(1));
};
// console.log(sum(array));

const string = "AbCdE";

function reverse(str) {
  // base case
  if (str.length === 1) return str[0];
  return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
}
// console.log(reverse(string));

const xString = "axbxcxd";

function countX(s) {
  if (s.length === 1) {
    if (s[0] === "x") {
      return 1;
    } else {
      return 0;
    }
  }

  if (s[0] === "x") {
    return 1 + countX(s.slice(1));
  } else {
    return countX(s.slice(1));
  }
}

console.log(countX(xString));

function numberOfPaths(n) {
  // base cases
  if ((n === 1) | (n === 0)) return 1;
  if (n < 0) return 0;

  return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3);
}

console.log(numberOfPaths(11));

function anagramsOf(s) {
  // base case
  if (s.length === 1) return s[0];

  // array to hold all the anagrams
  const collection = [];

  // find all anagrams of the substring from the second char until
  // the end. For ex, if the string is "abcd", the substring is "bcd"
  // so we'll find all anagrams of "bcd"
  const substring_anagram = anagramsOf(s.slice(1));

  // iterate of each substring
  for (let i = 0; i < substring_anagram.length; i++) {
    // iterate of over index of the substring from 0 until
    // 1 index past the end of the string
  }
}

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

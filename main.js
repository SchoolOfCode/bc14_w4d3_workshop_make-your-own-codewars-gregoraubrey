/* 
👉 Write your kata here!

Title: STRINGS-TO-SCREAMING-KEBAB-CASE
Description:

Your task is to create a function that takes in one or more strings as an argument and returns a single string comprised of all the arguments (in input order) glued together.

The string your function returns should be in SCREAMING-KEBAB-CASE, with hypens, spaces, and underscores in the input strings all marking the start of a new word.

Each argument should be separated from the next by a single hyphen in the output string.

If any of the arguments are not strings, they should be converted to strings before being glued together.

If any of the arguments contain repeated spaces, hyphens or underscores, these should be replaced with a single hyphen.

For example:

ToScreamingKebab("one_two three-four") should return "ONE-TWO-THREE-FOUR".
ToScreamingKebab("FiVE-sIx_seVen EIGHT") should return "FIVE-SIX-SEVEN-EIGHT"
ToScreamingKebab("NINE", "Te-N", "ELE VEN", 12) should return "NINE-TE-N-ELE-VEN-12"
ToScreamingKebab("Th   ir___TE---EN") should return "TH-IR-TE-EN"
*/

//👉 Write the function your CodeWarriors will start with below here:

// export function toScreamingKebab(...args) {
//     // Your code here
//   }

////////// PLAN ///////////
// make an array out of the arguments
//      map over the array
//      for each item in the array, turn it into a string
// turn each letter in the array into uppercase
//      use the toUpperCase() method
// replace all spaces and underscores with hyphens
//      use the replace() method with a regex of /[_-\s]+/g, "-"
//      the + means one or more of whitespace, hyphen or underscore in a row
// join the array into a string with hyphens between each item
//      use the join() method with a hyphen as the argument
// return finalString

export function toScreamingKebab(...args) {
    const array = args.map(arg => String(arg));
    const uppercaseArray = array.map(item => item.toUpperCase());
    const hyphenatedUppercaseArray = uppercaseArray.map(item => item.replace(/[_-\s]+/g, "-"));
    const finalString = hyphenatedUppercaseArray.join("-");
    return finalString;
}
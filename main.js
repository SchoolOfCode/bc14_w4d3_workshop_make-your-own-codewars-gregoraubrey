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

export function toScreamingKebab(...args) {
    // Your code here
  }
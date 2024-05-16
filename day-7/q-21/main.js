// let book: {
//     title: string;
//     author: string;
//   yearPublished: number
// } = {
//     title: "The Hobbit",
//     author:"J.R.R. Tolkien",
//     yearPublished: 1937
// }; 
// console.log(`Book Information: ${ book.title}, by ${ book.author}, published in ${book.yearPublished}.`);
var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));

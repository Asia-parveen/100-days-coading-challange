// Q14 Answer:
var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q15 Answer:
// let unableToAttend = "Nikola Tesla";
// console.log(`${unableToAttend} can't make it to dinner.`);
// // Replace the guest
// let newGuest = "Leonardo da Vinci";
//  guests[guests.indexOf(unableToAttend)] = newGuest;
// // New invitations
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// // Q15:
var unableToAttend = "Nikola Tesla";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// replace new guest
var newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
// // New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner? "));
});

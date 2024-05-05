// let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, would you like to join me for dinner?`);
// });
var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});

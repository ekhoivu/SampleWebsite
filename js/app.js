/**
 * WEB222 – Final Assignment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       KHOI VU
 *      Student ID: 124611203
 *      Date:       April 7th, 2022
 */

/* let hiring = document.getElementById("hiring-button");
hiring.onclick = function() {
   document.getElementById("form-hidden").hidden = false; 
} */
document.getElementById("question-button").addEventListener("click", function() {
    document.getElementById("form-hidden").hidden = true;
});
document.getElementById("comment-button").addEventListener("click", function() {
    document.getElementById("form-hidden").hidden = true;
});
document.getElementById("hiring-button").addEventListener("click", function() {
    document.getElementById("form-hidden").hidden = false;
});





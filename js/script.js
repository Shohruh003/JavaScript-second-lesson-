alert("Salom, xush kelibsiz!");

var firstName = prompt("Ismingiz nima!");

var paragraph = document.createElement("p");

paragraph.textContent = "Sizning ismingiz : " + firstName;

document.body.appendChild(paragraph);

document.querySelector("p").style.fontSize = "36px";

document.querySelector("p").style.textAlign = "center";

document.querySelector("p").style.color = "red";
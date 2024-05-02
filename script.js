var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var reactionTypes = [
  "S",
  "D",
  "SR",
  "DR",
]
var reactionType = reactionTypes[Math.floor(Math.random() * ((reactionTypes.length - 1) - 0 + 1) + 0)];
var elements = [
    "P", "H", "C", "S", "N", "O"
]
var element1 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)];
elements.splice(elements.indexOf(element1), 1);
var element2 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)];
elements.splice(elements.indexOf(element2), 1);
var element3 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)];
elements.splice(elements.indexOf(element3), 1);
var element4 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)];
elements = [
    "P", "H", "C", "S", "N", "O"
]
switch (reactionType) {
  case "S":
    var compound = element1 + " + " + element2 + " → " + element1 + element2;
  break;
  case "D":   
  var compound = element1 + element2 + " → " + element1 + " + " + element2;
  break;
  case "SR":
  var compound = element1 + " + " + element2 + element3 + " → " + element1 + element3 + " + " + element2;
  break;
  case "DR":
  var compound = element1 + element2 + " + " + element3 + element4 + " → " + element1 + element4 + " + " + element3 + element2;
  break;
}
button1 = document.getElementById("b1");
button1.addEventListener("click", function() {
  guess = "S";
  if (guess == reactionType) {
    button1.style.backgroundColor = "green";
  }
});
button2 = document.getElementById("b2");
button2.addEventListener("click", function() {
  guess = "D";
  if (guess == reactionType) {
    button2.style.backgroundColor = "green";
  }
});
button3 = document.getElementById("b3");
button3.addEventListener("click", function() {
  guess = "SR";
  if (guess == reactionType) {
    button3.style.backgroundColor = "green";
  }
});
button4 = document.getElementById("b4");
button4.addEventListener("click", function() {
  guess = "DR";
  if (guess == reactionType) {
    button4.style.backgroundColor = "green";
  }
});
document.getElementById("equation").innerHTML = compound;
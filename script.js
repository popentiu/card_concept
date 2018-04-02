var text = ["BONJOUR", "HOLA", "GUTEN TAG", "CIAO", "OLÀ", "NAMASTE", "SALUT", "HELLO", "MUIE DRAGNEA"];
var counter = 0;
var elem = document.getElementById("textmain");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}


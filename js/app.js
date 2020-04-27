// Fonction javascript qui gère le déroulement du menu quand on appuie sur le bouton hamburger
function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function ouvrir(id) {
  var x = document.getElementById(id)
  var y = x.parentElement
  var z = y.nextElementSibling
  if (z.className === "closed") {
    z.className ="opened";
    x.setAttribute("name", "eye-off");
  } else {
    z.className="closed";
    x.setAttribute("name", "eye");
  }
}

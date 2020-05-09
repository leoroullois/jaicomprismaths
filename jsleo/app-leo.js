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
    x.setAttribute("src", "../../../images/ferme_r.png");
  } else {
    z.className="closed";
    x.setAttribute("src", "../../../images/bulb.png");
  }
}

function spe() {
  var y = document.getElementById("filiere-term");
  y.innerHTML = "Mathématiques spécialité - Terminale";
  y.style.backgroundColor = "rgb(81, 156, 218)";
}
function complementaire() {
  var y = document.getElementById("filiere-term");
  y.innerHTML = "Mathématiques complémentaire - Terminale";
  y.style.backgroundColor = "#ff524f";
}
function experte() {
  var y = document.getElementById("filiere-term");
  y.innerHTML = "Mathématiques expertes - Terminale";
  y.style.backgroundColor = "#54b86b";
}

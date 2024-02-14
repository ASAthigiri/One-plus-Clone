function myFunction() {
  var n = document.getElementById("myTopnav");
  if (n.className === "topnav") {
    n.className += " responsive";
  } else {
    n.className = "topnav";
  }
}

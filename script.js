let clasificados = [];

function win(btn, equipo) {
  clasificados.push(equipo);
  document.getElementById("results").innerHTML = clasificados.join("<br>");
}

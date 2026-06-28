let clasificados = [];

const partidos = [
  ["Argentina", "Francia"],
  ["Brasil", "Alemania"],
  ["España", "Portugal"],
  ["Inglaterra", "Países Bajos"],
  ["Uruguay", "Italia"],
  ["México", "Estados Unidos"],
  ["Bélgica", "Croacia"],
  ["Japón", "Corea del Sur"]
];

function render() {
  const bracket = document.getElementById("bracket");
  bracket.innerHTML = "";

  partidos.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "match";

    div.innerHTML = `
      <button onclick="win(${index}, '${p[0]}')">${p[0]}</button>
      <button onclick="win(${index}, '${p[1]}')">${p[1]}</button>
    `;

    bracket.appendChild(div);
  });

  document.getElementById("next").innerHTML =
    clasificados.map(t => "✅ " + t).join("<br>");
}

function win(partidoIndex, equipo) {
  clasificados.push(equipo);
  partidos[partidoIndex] = ["✔", "✔"]; // bloquea el partido
  render();
}

render();

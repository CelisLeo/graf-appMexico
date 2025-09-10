// Elementos sliders y colores
const verdeSlider = document.getElementById("verde");
const rojoSlider = document.getElementById("rojo");

const verdeColor = document.getElementById("verdeColor");
const rojoColor = document.getElementById("rojoColor");

const verdeHex = document.getElementById("verdeHex");
const rojoHex = document.getElementById("rojoHex");

const resetBtn = document.getElementById("resetBtn");

// Blanco fijo
document.getElementById("blancoColor").style.backgroundColor = "#FFFFFF";

// Función HEX
function toHex(value) {
  let hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

// Actualizar colores
function updateColors() {
  // Verde -> G variable
  let g = parseInt(verdeSlider.value);
  let verde = "#" + "00" + toHex(g) + "00";
  verdeColor.style.backgroundColor = verde;
  verdeHex.value = verde.toUpperCase();

  // Rojo -> R variable
  let r = parseInt(rojoSlider.value);
  let rojo = "#" + toHex(r) + "0000";
  rojoColor.style.backgroundColor = rojo;
  rojoHex.value = rojo.toUpperCase();
}

// Restaurar colores originales
resetBtn.addEventListener("click", () => {
  verdeSlider.value = 104; // #006847
  rojoSlider.value = 206;  // #CE1126
  updateColors();
});

// Inicializar
updateColors();

// Eventos
verdeSlider.addEventListener("input", updateColors);
rojoSlider.addEventListener("input", updateColors);

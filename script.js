const verdeSlider = document.getElementById("verde");
const rojoSlider = document.getElementById("rojo");

const verdeColor = document.getElementById("verdeColor");
const rojoColor = document.getElementById("rojoColor");

const verdeHex = document.getElementById("verdeHex");
const rojoHex = document.getElementById("rojoHex");

const resetBtn = document.getElementById("resetBtn");

// Blanco fijo
document.getElementById("blancoColor").style.backgroundColor = "#FFFFFF";

// HEX helper
function toHex(value) {
  let hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

// Actualizar colores
function updateColors() {
  let g = parseInt(verdeSlider.value);
  let verde = "#" + "00" + toHex(g) + "00";
  verdeColor.style.backgroundColor = verde;
  verdeHex.value = verde.toUpperCase();

  let r = parseInt(rojoSlider.value);
  let rojo = "#" + toHex(r) + "0000";
  rojoColor.style.backgroundColor = rojo;
  rojoHex.value = rojo.toUpperCase();
}

// Restaurar bandera original
resetBtn.addEventListener("click", () => {
  verdeSlider.value = 104; // Verde original
  rojoSlider.value = 206;  // Rojo original
  updateColors();
});

// Inicializar
updateColors();

verdeSlider.addEventListener("input", updateColors);
rojoSlider.addEventListener("input", updateColors);

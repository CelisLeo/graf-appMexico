// Obtener elementos
const verdeSlider = document.getElementById("verde");
const rojoSlider = document.getElementById("rojo");

const verdeColor = document.getElementById("verdeColor");
const rojoColor = document.getElementById("rojoColor");

const verdeHex = document.getElementById("verdeHex");
const rojoHex = document.getElementById("rojoHex");

// Blanco fijo
document.getElementById("blancoColor").style.backgroundColor = "#FFFFFF";

// Función para convertir número a HEX
function toHex(value) {
  let hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

// Función para actualizar colores
function updateColors() {
  // Verde -> varía G (00FF00 base)
  let g = parseInt(verdeSlider.value);
  let verde = "#" + "00" + toHex(g) + "00";
  verdeColor.style.backgroundColor = verde;
  verdeHex.value = verde.toUpperCase();

  // Rojo -> varía R (FF0000 base)
  let r = parseInt(rojoSlider.value);
  let rojo = "#" + toHex(r) + "0000";
  rojoColor.style.backgroundColor = rojo;
  rojoHex.value = rojo.toUpperCase();
}

// Inicializar
updateColors();

// Eventos de movimiento
verdeSlider.addEventListener("input", updateColors);
rojoSlider.addEventListener("input", updateColors);

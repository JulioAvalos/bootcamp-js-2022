const form = document.getElementsByTagName('form')[0];

const inputCodigo = document.getElementById("codigo");
const inputNombre = document.getElementById("nombre");
const inputCantidad = document.getElementById("cantidad");
const inputPrecio = document.getElementById("precio");
const selectCategoria = document.getElementById("categoria");

const tbody = document.getElementsByTagName('tbody')[0];
const cantidadTotalElement = document.getElementById("cantidad-total");
const precioTotalElement = document.getElementById("precio-total");
const granTotalElement = document.getElementById("gran-total");

let indice = 1;
let cantidadTotal = 0;
let preciosTotales = 0;
let granTotal = 0;
let currentRow;

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const data = new FormData(form);
  const values = Array.from(data.entries());

  const [frmCodigo, frmNombre, frmCantidad, frmPrecio, frmCategoria] = values;

  let codigo = frmCodigo[1];
  const nombre = frmNombre[1];
  const cantidad = frmCantidad[1];
  const precio = frmPrecio[1];
  const categoria = frmCategoria[1];
  const total = cantidad * precio;

  cantidadTotal = parseFloat(cantidad) + cantidadTotal;
  preciosTotales = parseFloat(precio) + preciosTotales;
  granTotal = parseFloat(total + granTotal);

  let tr;

  if(!codigo) {
    codigo = indice++;
    tr = document.createElement("tr");
    tbody.appendChild(tr);
  } else {
    tr = currentRow;
  }

  tr.dataset.categoria = categoria;
  tr.innerHTML = `
    <td>${codigo}</td>
    <td>${nombre}</td>
    <td>${cantidad}</td>
    <td>${precio}</td>
    <td>${total}</td>
    <td></td><a href="#" onclick="onEdit(event)">Editar</a> | <a href="#" onclick="onDelete(event)">Eliminar</a></td>
  `;

  cantidadTotalElement.innerHTML = cantidadTotal;
  precioTotalElement.innerHTML = preciosTotales;
  granTotalElement.innerHTML = granTotal;

  form.reset();

}

function onEdit (event) {
  event.preventDefault();
  
  const anchor = event.target;
  const tr = anchor.parentElement.parentElement;
  const celdas = tr.getElementsByTagName("td");
  const [tdCodigo, tdNombre, tdCantidad, tdPrecio] = celdas;

  inputCodigo.value = tdCodigo.innerText;
  inputNombre.value = tdNombre.innerText;
  inputCantidad.value = tdCantidad.innerText;
  inputPrecio.value = tdPrecio.innerText;
  selectCategoria.value = tr.dataset.categoria;
  
  currentRow = tr;
}

function onDelete (event) {
  event.preventDefault();
  
  const anchor = event.target;
  const tr = anchor.parentElement;
  tbody.removeChild(tr);
}

//minuto 1:13:14

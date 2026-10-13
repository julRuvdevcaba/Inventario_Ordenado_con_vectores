const inventario = new Inventario();

const divDetalles = document.getElementById("detalles");

const btnAdd = document.getElementById("btnAdd");
const btnBuscar = document.getElementById("btnBuscar");
const btnEliminar = document.getElementById("btnEliminar");
const btnListar = document.getElementById("btnListar");
const btnListarInverso = document.getElementById("btnListarInverso");
const btnExtraerPrimero = document.getElementById("btnExtraerPrimero");
const btnExtraerUltimo = document.getElementById("btnExtraerUltimo");


btnAdd.addEventListener("click", () => {

    let codigo = Number(document.getElementById("txtCod").value);
    const btnBuscar = document.getElementById("btnBuscar");
    let nombre = document.getElementById("txtNombre").value;
    let cantidad = Number(document.getElementById("txtCantidad").value);
    let precio = Number(document.getElementById("txtPrecio").value);

    let nuevo = new Producto(codigo, nombre, cantidad, precio);

    inventario.agregar(nuevo);
    
    if (inventario.agregar(nuevo)) {
        divDetalles.innerHTML =
            "<p>Producto agregado correctamente.</p>" + nuevo.infoHtml();
    } else {
        divDetalles.innerHTML =
            "<p>Ya existe un producto con ese código.</p>";
    }
});


btnBuscar.addEventListener("click", () => {
    const codigo = Number(document.getElementById("txtCod").value);
    const producto = inventario.buscar(codigo);

    if (producto === null) {
        divDetalles.innerHTML = "<p>Producto no encontrado.</p>";
    } else {
        divDetalles.innerHTML =
            "<p>Producto encontrado:</p>" + producto.infoHtml();
    }
});


btnEliminar.addEventListener("click", () => {
    const codigo = Number(document.getElementById("txtCod").value);
    const producto = inventario.eliminar(codigo);

    if (producto === null) {
        divDetalles.innerHTML = "<p>No existe ese código.</p>";
    } else {
        divDetalles.innerHTML =
            "<p>Producto eliminado:</p>" + producto.infoHtml();
    }
});


btnListar.addEventListener("click", () => {

    divDetalles.innerHTML = inventario.listar();

});


btnListarInverso.addEventListener("click", () => {

    divDetalles.innerHTML = inventario.listarInverso();

});

btnExtraerPrimero.addEventListener("click", () => {
    const producto = inventario.extraerPrimero();

    if (producto === null) {
        divDetalles.innerHTML = "<p>El inventario está vacío.</p>";
    } else {
        divDetalles.innerHTML =
            "<p>Producto extraído del inicio:</p>" + producto.infoHtml();
    }
});

btnExtraerUltimo.addEventListener("click", () => {
    const producto = inventario.extraerUltimo();

    if (producto === null) {
        divDetalles.innerHTML = "<p>El inventario está vacío.</p>";
    } else {
        divDetalles.innerHTML =
            "<p>Producto extraído del final:</p>" + producto.infoHtml();
    }
});
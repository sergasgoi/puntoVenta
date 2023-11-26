var carrito = {
    id: "default",
    precio: 0,
    cantidad: 0
};
var precioTotal = 0;

function anadirCarrito(id, precio, cantidad) {
    carrito.id = id;
    carrito.precio = parseInt(precio);
    carrito.cantidad = parseInt(cantidad);
}

for (var i = 0; i < document.getElementsByClassName("producto").length; i++) {
    document.getElementsByClassName("producto")[i].onclick = function () {
        this.dataset.cantidad++;
        anadirCarrito(this.dataset.idproducto, this.dataset.precio, this.dataset.cantidad);
        precioTotal = precioTotal + carrito.precio;
        //Añadir al <p> con el id precioTotal la cantidad total de dinero
        document.getElementById("precioTotal").innerHTML = "Total: $" + precioTotal;
        if (this.dataset.cantidad <= 1) {
            //Agregar div con contenido unico de carrito de compras (solo puede existir 1)
            var compra = document.createElement("div");
            compra.setAttribute("id", carrito.id);
            document.getElementById("carritoDeCompras").appendChild(compra);
            agregarElementos(this.dataset.cantidad);
        } else {
            agregarElementos();
        }
    }
}

function actualizador() {
    // Agregar Boton "+" a carrito de compras
    compraDes = document.createElement("button");
    compraDes.setAttribute("class", "mas btn btn-primary");
    compraDes.setAttribute("id", "mas" + carrito.id);
    compraDes.setAttribute("onclick", "sumar(this.id)");
    compraDes.innerHTML = "+";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Cantidad a carrito de compras
    compraDes = document.createElement("p");
    compraDes.setAttribute("class", "cantidad");
    compraDes.innerHTML = carrito.cantidad;
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Boton "-" a carrito de compras
    compraDes = document.createElement("button");
    compraDes.setAttribute("class", "menos btn btn-primary");
    compraDes.setAttribute("id", "menos" + carrito.id);
    compraDes.setAttribute("onclick", "restar(this.id)");
    compraDes.innerHTML = "-";
    document.getElementById(carrito.id).appendChild(compraDes);
    //Agregar Producto a carrito de compras
    compraDes = document.createElement("p");
    compraDes.innerHTML = "Producto: " + carrito.id;
    document.getElementById(carrito.id).appendChild(compraDes);
    // Agregar Precio a carrito de compras
    compraDes = document.createElement("p");
    compraDes.innerHTML = "Precio: " + carrito.precio;
    document.getElementById(carrito.id).appendChild(compraDes);
}

function agregarElementos() {
    if (carrito.cantidad != 1) {
        for (i = 0; i < 5; i++) {
            document.getElementById(carrito.id).removeChild(document.getElementById(carrito.id).childNodes[0]);
        }
    }
    actualizador();
}

function eliminarElementos() {
    if (carrito.cantidad == 0) {
        document.getElementById("carritoDeCompras").removeChild(document.getElementById(carrito.id));
    } else {
        for (i = 0; i < 5; i++) {
            document.getElementById(carrito.id).removeChild(document.getElementById(carrito.id).childNodes[0]);
        }
        actualizador();
    }
}

function sumar(idBoton) {
    for (var j = 0; j < document.getElementsByClassName("producto").length; j++) {
        if (document.getElementById(idBoton).parentNode.id == document.getElementsByClassName("producto")[j].dataset.idproducto) {
            break;
        }
    }
    var nuevaData = document.getElementsByClassName("producto")[j].dataset;
    nuevaData.cantidad++;
    anadirCarrito(nuevaData.idproducto, nuevaData.precio, nuevaData.cantidad);
    agregarElementos(carrito.cantidad);
    precioTotal = precioTotal + carrito.precio;
    //Añadir al <p> con el id precioTotal la cantidad total de dinero
    document.getElementById("precioTotal").innerHTML = "Total: $" + precioTotal;
}

function restar(idBoton) {
    for (var j = 0; j < document.getElementsByClassName("producto").length; j++) {
        if (document.getElementById(idBoton).parentNode.id == document.getElementsByClassName("producto")[j].dataset.idproducto) {
            break;
        }
    }
    var nuevaData = document.getElementsByClassName("producto")[j].dataset;
    nuevaData.cantidad--;
    anadirCarrito(nuevaData.idproducto, nuevaData.precio, nuevaData.cantidad);
    eliminarElementos(carrito.cantidad);
    precioTotal = precioTotal - carrito.precio;
    //Añadir al <p> con el id precioTotal la cantidad total de dinero
    document.getElementById("precioTotal").innerHTML = "Total: $" + precioTotal;
}



document.getElementById("vaciar").onclick = function () {


    let padre = document.getElementById("carritoDeCompras");
    var cant = padre.childNodes.length - 1;

    while (cant > 0) {

        let hijo = padre.childNodes[cant]
        if (hijo.childNodes[1].innerHTML > 1) {
            compraDes.setAttribute("id", "menos" + hijo.id);
            restar(compraDes.id)
            cant++
        } else {
            compraDes.setAttribute("id", "menos" + hijo.id);
            restar(compraDes.id)
        }
        cant--

    }

    precioTotal = 0;

    document.getElementById("precioTotal").innerHTML = "Total: $" + precioTotal;


}

document.getElementById("registrar").onclick = function () {

    let padre = document.getElementById("carritoDeCompras");
    var cant = padre.childNodes.length - 1;

    let array = [];
    var producto
    var cantidad
    var precio

    while (cant > 0) {

        let hijo = padre.childNodes[cant]
        producto = hijo.id
        precio = hijo.childNodes[4].innerHTML
        precio = precio.substr(8, undefined)
        cantidad = hijo.childNodes[1].innerHTML

        if (hijo.childNodes[1].innerHTML > 1) {
            precio = precio * hijo.childNodes[1].innerHTML
        }

        array.push(producto, cantidad, precio)

        cant--
    }

    window.location.href = `/registrar/${array}`


}





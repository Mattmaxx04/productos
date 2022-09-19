console.log(data);

let tablecont = document.getElementById("tablecont");


function mostrarProductos(productos) {
  //que pintara los productos en algun contenedor del html. OK
  tablecont.innerHTML = ""
  for (let i = 0; i < productos.length; i++) {
    let fila = document.createElement("tr");
    fila.className = "tr";
    //table.style.width = '18rem';
    fila.innerHTML = `
   
      <th scope="row">${productos[i].nombre}</th>
      <td>${productos[i].precio}</td>
      <td>${productos[i].descripcion}</td>
      <td>${productos[i].stock}</td>`;
    tablecont.appendChild(fila);
  }
}

function agregarProducto(productoNuevo) {
  data.push(productoNuevo);
}


function pedirProducto() {

    //que debera crear un producto
  // pidiendo los datos por prompt y crear el objeto
  let nombre=prompt("Nombre");
    let precio= parseInt(prompt("Precio"))
    let descripcion= prompt("Descripción")
    let stock= parseInt(prompt("Stock"))

    let productoNuevo = {"nombre":nombre, "precio":precio, "descripcion":descripcion, "stock":stock};


  //dentro de esta funcion se debera llamar a la siguiente funcion.
  agregarProducto(productoNuevo);
  //que debera agregar el producto al array de productos y al final debera llamar a la funcion

  mostrarProductos(data);
}
mostrarProductos(data);

/*
pedirProducto();*/





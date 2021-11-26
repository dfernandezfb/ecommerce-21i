//CARRITO DE COMPRAS
class Producto{
  constructor(id,nombre,precio,imagen){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let carrito;

if(!localStorage.getItem('carrito')){
  carrito = [];
}else{
  carrito=JSON.parse(localStorage.getItem('carrito'))
}

carrito.forEach(product=>{
  let productCard = document.createElement('li');
  productCard.innerHTML=`
  <div id=${product.id}class="card w-50">
  <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.precio}</p>
    <a href="#" class="btn btn-primary">Eliminar producto</a>
  </div>
  </div>
  `;
  let carritoContainer = document.querySelector('#carrito-container');
  carritoContainer.appendChild(productCard);
})


let productos = [new Producto(1,'Agua',100,''),new Producto(2,'Cerveza', 180, ''),new Producto(3,'1kg pan',100,''), new Producto(4,'Vino',500,''), new Producto(5,'Fernet Branca + Coca Cola',750,''), new Producto(6,'Gin',1000,'')];
console.log(productos);
let productosLS = JSON.stringify(productos);
localStorage.setItem('productos',productosLS);

productos.forEach(producto=>{
  let productCard = document.createElement('div');
  productCard.innerHTML = `
  <div class="card my-3" id=${producto.id} style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}</p></a>
    </div>
    <button onclick="redirigir(event)" class="btn btn-warning">Ver producto</button>
    <button onclick="addProduct(event)" class="btn btn-success">Agregar al carrito</button>
  </div>
  `;
  productCard.classList.add('col-4');
  let productContainer = document.querySelector('#products-container');
  productContainer.appendChild(productCard);
})

function addProduct(event){
  let productId = event.target.parentElement.id;
  let product = productos.find(producto=>producto.id == productId);
  carrito.push(product);
  let productCard = document.createElement('li');
  productCard.innerHTML=`
  <div id=${product.id}class="card w-50">
  <div class="card-body">
    <h5 class="card-title">${product.nombre}</h5>
    <p class="card-text">${product.precio}</p>
    <a href="#" class="btn btn-primary">Eliminar producto</a>
  </div>
  </div>
  `;
  let carritoContainer = document.querySelector('#carrito-container');
  carritoContainer.appendChild(productCard);
  localStorage.setItem('carrito',JSON.stringify(carrito));
  // carrito.push(producto.toLowerCase().trim()); //'  HoLa ' '  hola ' 'hola'
  // console.log(carrito);
}

function redirigir(event){
  let idProducto = event.target.parentElement.id;
  window.location.assign(window.location.origin + `/producto.html#${idProducto}`)
}

// function mostrarCarrito(){
//   if(carrito.length===0){
//     alert('Todavía no has agregado productos a tu carrito');
//   }else{
//     alert(`Los productos de tu carrito son:\n-${carrito.join('\n-')}`)
//   }
// }

// function buscarProducto(){
//   let producto = prompt('Que producto desea saber si está en el carrito?');
//   if(carrito.includes(producto.toLowerCase().trim())===true){ //'Hola'
//     alert('El producto está en tu carrito');
//   }else{
//     alert('El producto no se encuentra en tu carrito');
//   }
// }

// function filtrarProductos(){
//   let palabraAFiltrar = prompt('Por que palabra queres filtrar tu carrito?');
//   let productosFiltrados = carrito.filter(producto => producto.includes(palabraAFiltrar.toLowerCase().trim()));
//   if(productosFiltrados.length===0){
//     alert('Ningun producto contiene la palabra especificada');
//   }else{
//     alert(`Los productos que contienen la palabra especificada son: \n-${productosFiltrados.join('\n-')}`);
//   }
// }

// function eliminarProducto(){
//   let productoAEliminar = prompt('Ingrese el producto a eliminar');
//   let posicion = carrito.indexOf(productoAEliminar.toLowerCase().trim());
//   if(posicion===-1){
//     alert('El producto que desea borrar no está en su carrito')
//   }else{
//     carrito.splice(posicion,1);
//     alert('El producto se borró correctamente')
//   }
// }

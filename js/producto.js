let productos = JSON.parse(localStorage.getItem('productos'));

let idProducto = window.location.hash.slice(1);
let prod= productos.find(producto => producto.id == idProducto);
console.log(prod);

let paginaDetalle = document.createElement('div');
paginaDetalle.innerHTML = `
<h1>${prod.nombre}</h1>
<p>${prod.nombre}</p>
<p>${prod.precio}</p>
`;
let padre = document.getElementById('padre');
padre.appendChild(paginaDetalle);

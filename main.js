// fetch ('https://api.escuelajs.co/api/v1/products/1')
// .then(res => res.json())
// .then(data => console.log(data));

//Variables Iniciales
let shoppingCartArray = []; // agregado a carrito
let total = 0;
let productContainer = document.getElementsByClassName('shop-items');
let addBtns = document.querySelectorAll('.shop-item-button');

//Peticion de productos al servidor:

let res = await fetch('https://api.escuelajs.co/api/v1/products')
let data = await res.json()

//Limitamos a 4 producto
let productsArray = data.slice(1,5) //productos que estan en stock
console.log(productsArray)

// Productos de pantalla
productsArray.forEach((product) => {
    productContainer.innerHTML += `
    <div class="shop-item">
        <span class="shop-item-title">${product.title}</span>
        <img class="shop-item-image" src="${product.images[0]}">
        <div class="shop-item-details">
            <span class="shop-item-price">$${product.price}</span>
            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
        </div>
    </div>`
});
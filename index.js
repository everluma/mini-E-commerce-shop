// API theke data ana 

const productGrid = document.getElementById('product-grid');

async function getProducts() {

    try {
        // API call kora 
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Data asar por seti display fuction a pathano 
        displayProducts(products);
    } catch (error) {
        console.error("Data is not Processing:", error)
    };
    
}

// DOM bebohar kore card toiri kora 

function displayProducts(products) {
    // ager content mushe fela 
    productGrid.innerHTML = "";

    // protiti product er jonno structure toiri kora 

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');


        card.innerHTML = `
          <div class="product-tumb">
                <img src="${product.image}" alt="${product.title}">
            </div>

            <div class="product-details">
                <span class="product-catagory">${product.category}</span>
                <h4><a href="#">${product.title.substring(0, 30)}...</a></h4>
                <div class="product-bottom-details">
                    <div class="product-price">$${product.price}</div>
                    <div class="product-links">
                        <button onclick="addToCart(${product.id})" class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>Add</button>
                    </div>
                </div>
            </div>

        `;
        productGrid.appendChild(card);
    });
}

// Call the fuction 
getProducts();


// shopping card functionality (DOM Logic)

let cart = [];

function addToCart(productId) {
    cart.push(productId);

    const cartCount = document.querySelector('.cart-count');
    cartCount.innerText = cart.length;

    alert( "Item is added");
}
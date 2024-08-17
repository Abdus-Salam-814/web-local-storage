const addProduct = () =>{

    const productField =document.getElementById('product-name');
    const quntityField =document.getElementById('product-quntity');

    const product = productField.value;
    const quntity = quntityField.value;
    if(product === "" && quntity === ''){
        return;
    }

    productField.value = '';
    quntityField.value = '';

    console.log(product, quntity);

    displayProduct(product, quntity);
    saveProductToLocalStorage(product, quntity)

}

const displayProduct = (product, quntity) =>{

        const ul = document.getElementById("product-container");

        const li = document.createElement('li');
        li.innerText = `${product}: ${quntity}`;

        ul.appendChild(li);

 


}


const getStoredShopingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    console.log(storedCart);
    
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;

   
}


const saveProductToLocalStorage = (product, quntity) =>{

    const cart = getStoredShopingCart();
    cart[product] = quntity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)

    // console.log(cartStringified);
}

const displayProductsFormLocalStorage =()=>{
    const saveCart = getStoredShopingCart();

    console.log(saveCart)

    for(const product in saveCart){
        const quntity = saveCart[product];

        console.log(product, quntity)
        displayProduct(product, quntity)
    }

    
    
}

displayProductsFormLocalStorage();


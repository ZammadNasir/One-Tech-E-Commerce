
const removeCartItem = () => {
    let deleteBtn = document.querySelectorAll('.cart-items .bi-trash')

    deleteBtn.forEach(btn => {
        btn.addEventListener('click', function (e) {
            let parentEl = e.target.parentElement
            parentEl.remove()
            cartItemCount()
            updateCartTotal()
        })
    })
}

const addItemsToCart = () => {
    let cartBtn = document.querySelectorAll('.cart-btn')

    cartBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {

            let parentEl = e.target.parentElement
            let productImg = parentEl.querySelector('.product-img img').src
            let productPrice = parentEl.querySelector('.product-price p').textContent
            let productTitle = parentEl.querySelector('.product-desc span').textContent
            let cartItemsRow = document.querySelector('.cart-items-row')

            let title = document.querySelectorAll('.cart-desc p')

            for (var i = 0; i < title.length; i++) {
                if (title[i].textContent === productTitle) {
                    e.target.textContent = 'Item already in cart'
                    e.target.style.color = 'red'

                    setTimeout(() => {
                        e.target.textContent = 'Add To Cart'
                        e.target.style.color = 'white'
                    }, 500)
                    return
                }
            }
            e.target.textContent = 'Item added to cart'
            e.target.style.color = '#97fa04'
            setTimeout(() => {
                e.target.textContent = 'Add To Cart'
                e.target.style.color = 'white'
            }, 500)
            


                
                cartItemsRow.innerHTML += `
            <div class="cart-product px-1 py-3 border">
                <div class="d-flex">
                <div class="cart-img">
                <img src="${productImg}">
                    </div>
                    <div class="cart-desc">
                        <p class="m-0 fw-bold fs-14">${productTitle}</p>
                        <span class="fs-12 txt-gray fw-bold cart-price">${productPrice}</span>
                        </div>
                </div>
                    <i class="bi bi-trash"></i>
            </div>`
            document.querySelectorAll('.bi-trash').forEach(delBtn => { delBtn.addEventListener('click', removeCartItem) })
            cartItemCount()
            updateCartTotal()
        })
    })
}

const cartItemCount = () => {
    let cartCount = document.querySelector('.cart-count')
    let cartItemsRow = document.querySelector('.cart-items-row')

    cartCount.textContent = cartItemsRow.childElementCount
    let emptyText = document.querySelector('.empty-text')
    let totalPrice = document.querySelector('.total-price')
    if(cartItemsRow.childElementCount > 0){
        document.querySelector('.check-out').style.display = 'block'
        emptyText.style.display = 'none'
        totalPrice.style.display = 'block'
        
    }
    else{
        document.querySelector('.check-out').style.display = 'none'
        emptyText.style.display = 'block'
        totalPrice.style.display = 'none'
    }
}

let totalPrice = document.querySelector('.total-price')
const updateCartTotal = () =>{
    let cartProductsPrice = document.querySelectorAll('.cart-price')

    let total = 0
    cartProductsPrice.forEach(price =>{
        let parsedPrice = parseFloat(price.textContent.replace('$', ''))
        total = total + parsedPrice
    })
    totalPrice.textContent = '$ ' + total    
}
export { removeCartItem, addItemsToCart}
import { addItemsToCart, removeCartItem } from "./cart.js";
import { featuredProducts, saleProducts, bestRated } from "./dealsproduct.js";
import { animating } from './observer.js'

const liElements = document.querySelectorAll('.deals-li li');

liElements.forEach((li, index) => {
    li.addEventListener('click', () => {
        liElements.forEach((li, i) => {
            if (i === index) {
                li.classList.add('active');
            } else {
                li.classList.remove('active')
            }
        });
    });
});
liElements.forEach(li => {
    li.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'Featured') {
            generatingProducts(featuredProducts)
        }
        else if (e.target.innerHTML == 'On Sale') {
            generatingProducts(saleProducts)
        }
        else if (e.target.innerHTML == 'Best Rated') {
            generatingProducts(bestRated)
        }

    })
})
let generatingProducts = (categories) => {
    let products = document.querySelector('.products')

    products.innerHTML = categories.map((x) => {
        return ` <div class="col-md-4 col-lg-3 col-sm-6 p-0">
        <div class="product text-center border-right position-relative">
            <div class="product-inner">
            <div class="${x.class} position-absolute">
                <p class="text-white fs-12 bg-dan rounded-5">${x.text}</p>
            </div>
            <div class="product-img d-flex justify-content-center align-items-center">
                <img src="${x.productImg}">
            </div>
                <div class="product-price ${x.class} d-flex justify-content-center align-items-baseline gap-2">
                <p class="fs-16 fw-bold mt-4 mb-0">${x.productPrice}</p>
                <span class="fs-12 txt-gray">${x.oldPrice}</span>
                </div>
            <div class="product-desc">
                <span class="fs-14">${x.productTitle}</span>
            </div>
                <button class="cart-btn">Add To Cart</button>
            </div>
            </div>
            </div>`
    }).join('')
    addItemsToCart()
}

let dealsRight = document.querySelector('.deals-right');
let dealsLeft = document.querySelector('.deals-left');
let dealsContainer = document.querySelector('.deals-product');

dealsRight.addEventListener('click', function () {
    if (dealsContainer.scrollLeft + dealsContainer.clientWidth >= dealsContainer.scrollWidth) {
        dealsContainer.scrollLeft = 0;
    } else {
        dealsContainer.scrollLeft += 400;
    }
});

dealsLeft.addEventListener('click', function () {
    if (dealsContainer.scrollLeft <= 0) {
        dealsContainer.scrollLeft = dealsContainer.scrollWidth - dealsContainer.clientWidth;
    } else {
        dealsContainer.scrollLeft -= 400;
    }
});

let symbol1 = document.querySelector('.symbol1')
let symbol2 = document.querySelector('.symbol2')
let trendsBox = document.querySelector('.box-div')

symbol1.addEventListener('click', function () {
    trendsBox.scrollLeft -= 250;
})
symbol2.addEventListener('click', function () {
    trendsBox.scrollLeft += 250;
})

let boxes = document.querySelectorAll('.dots span')
let box2 = document.querySelector('.dot2')
let reviews = document.querySelector('.reviews')

boxes.forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (e.target.classList == 'dot1') {
            reviews.scrollLeft -= 1000
        }
        else if (e.target.classList == 'dot2') {
            reviews.scrollLeft = 1000
        }
    })
})
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        boxes.forEach((box, i) => {
            if (i === index) {
                box.classList.add('bg-main');
                box.style.backgroundColor = '#0e8ce4'
            } else {
                box.classList.remove('bg-main')
                box.style.backgroundColor = '#ccc7575e'
            }
        });
    });
});

const dealsTime = () => {
    let hrs = document.querySelectorAll('.hours')
    let mins = document.querySelectorAll('.mins')
    let secs = document.querySelectorAll('.secs')

    let seconds = 60
    let minutes = 50
    let hours = 32
    setInterval(() => {
        seconds--
        secs.forEach(item => {
            item.innerHTML = seconds
            if (item.innerHTML == '0') {
                seconds = 60
                minutes--
                mins.forEach(min => {
                    min.innerHTML = minutes
                    if (mins.innerHTML == '0') {
                        hours--
                        hrs.forEach(hour => {
                            hour.innerHTML = hrs
                        })
                    }
                })
            }

        })

    }, 1000);



}
dealsTime()

let sym1 = document.querySelector('.sym1')
let sym2 = document.querySelector('.sym2')
let recentProducts = document.querySelector('.recent-products')

sym1.addEventListener('click', function () {
    recentProducts.scrollLeft -= 170
})
sym2.addEventListener('click', function () {
    recentProducts.scrollLeft += 170
})
setInterval(() => {
    dealsContainer.scrollLeft = 400
}, 10000);
setInterval(() => {
    dealsContainer.scrollLeft = -400
}, 25000);

const init = () => {
    generatingProducts(featuredProducts)
    animating()
    removeCartItem()
}
init()
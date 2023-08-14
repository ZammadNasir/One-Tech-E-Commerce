function animating(){
    const bannerHeading = document.querySelector('.banner-left')
const bannerInner = document.querySelector('.banner-inner')
const policy = document.querySelectorAll('.policy-inner .row .col-md-2')
const dealsCon = document.querySelector('.deals-con')
const dealsProduct = document.querySelector('.deals-product')
const popularBoxes = document.querySelectorAll('.popular-box')
const macBookOne = document.querySelector('.macbook-inner .one')
const macBookTwo = document.querySelector('.macbook-inner .two')
const bestProduct = document.querySelectorAll('.best-product')
const advertBoxes = document.querySelectorAll('.advert-inner .box')
const trendBoxes = document.querySelectorAll('.trends-inner .box')
const trendHeading = document.querySelector('.trends-inner .col-md-3')
const review = document.querySelectorAll('.review-box')
const product = document.querySelectorAll('.product')
const products = document.querySelector('.products')



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
        }
    })
});


policy.forEach(item => {
    observer.observe(item)
})
observer.observe(bannerHeading)
observer.observe(bannerInner)
observer.observe(dealsCon)
observer.observe(dealsProduct)
observer.observe(trendHeading)
popularBoxes.forEach(box =>{
    observer.observe(box)
})
observer.observe(macBookOne)
observer.observe(macBookTwo)
bestProduct.forEach(product =>{
    observer.observe(product)
})
advertBoxes.forEach(box =>{
    observer.observe(box)
})
trendBoxes.forEach(box =>{
    observer.observe(box)
})
review.forEach(item =>{
    observer.observe(item)
})
}
export { animating }
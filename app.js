const product = document.querySelector('.product');
const viewBtn = document.querySelector('.view-btn');
const producHead = document.querySelector('.product-head');
const headBtn = document.querySelector('.head-btn');

viewBtn.addEventListener('click', () => {
    product.classList.add('pullUp');
    setTimeout(() => {
        producHead.classList.add('invisible')
    }, 200);
});

headBtn.addEventListener('click', () => {
    product.classList.remove('pullUp');
    producHead.classList.remove('invisible');
});
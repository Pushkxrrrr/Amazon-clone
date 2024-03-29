const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control-prv')
const next_btn = document.querySelector('.control-nxt')

let n = 0;

function changeSilde() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSilde();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSilde()
})
next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSilde()
})


const scrollContanier = document.querySelectorAll('.products');
for (const item of scrollContanier) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})




ScrollReveal().reveal('.principal');
ScrollReveal().reveal('.noticias', {delay: 300});
ScrollReveal().reveal('.bannerUno', {delay: 300});
ScrollReveal().reveal('.bannerDos', {delay: 300});

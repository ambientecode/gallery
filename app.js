const images = document.querySelectorAll('.img-item');
const imageView = document.querySelector('.image-view');
const btnClose = document.querySelector('.btn-close');

images.forEach((image) => {
    image.addEventListener('click', (event) => {
        let src = event.target.getAttribute('src');
        imageView.style.backgroundImage = `url(${src})`;
        btnClose.style.display = 'flex';
    });
});

btnClose.addEventListener('click', (event) => {
    imageView.style.backgroundImage = '';
    btnClose.style.display = 'none';
})
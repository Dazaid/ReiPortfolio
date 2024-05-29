document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');
    let currentIndex = 0;

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                items[currentIndex].classList.remove('active');
                currentIndex++;
                items[currentIndex].classList.add('active');
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentIndex > 0) {
                items[currentIndex].classList.remove('active');
                currentIndex--;
                items[currentIndex].classList.add('active');
            }
        });
    });
});

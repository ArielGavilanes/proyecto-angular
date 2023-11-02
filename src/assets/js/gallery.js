const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const content = item.querySelector('.accordion-content');

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
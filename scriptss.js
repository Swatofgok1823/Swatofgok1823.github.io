document.querySelectorAll('.accordion-item-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.style.display === 'block';

        document.querySelectorAll('.accordion-item-body').forEach(item => {
            item.style.display = 'none';
        });

        body.style.display = isOpen ? 'none' : 'block';
    });
});

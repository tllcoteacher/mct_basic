document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.scroll-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});

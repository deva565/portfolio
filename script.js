// Scroll Animations
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 1.5) {
            section.classList.add('visible');
        }
    });
});

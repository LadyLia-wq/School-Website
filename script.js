document.addEventListener('DOMContentLoaded', () => {
    // const navLinks = document.querySelectorAll('.nav-links a');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const targetId = link.getAttribute('href').substring(1);
    //         const targetSection = document.getElementById(targetId);
    //         targetSection.scrollIntoView({ behavior: 'smooth' });
    //     });
    // });

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out to us!');
        form.reset();
    });
});
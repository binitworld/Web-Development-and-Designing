document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Smooth scrolling for Contact link
    const contactLink = document.querySelector('.nav__links a[href="#contactSection"]');
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });

    // Handling primary and secondary button clicks
    const primaryButton = document.querySelector('.primary__btn');
    const secondaryButton = document.querySelector('.secondary__btn');

    primaryButton.addEventListener('click', () => {
        console.log('Primary button clicked!');
        // Add your logic for the primary button click here
    });

    secondaryButton.addEventListener('click', () => {
        console.log('Secondary button clicked!');
        // Add your logic for the secondary button click here
    });

    // Social icons hover effect
    const socialIcons = document.querySelectorAll('.socials span');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});

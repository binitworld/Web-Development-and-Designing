document.addEventListener('DOMContentLoaded', () => {
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

    
    const primaryButton = document.querySelector('.primary__btn');
    const secondaryButton = document.querySelector('.secondary__btn');

    primaryButton.addEventListener('click', () => {
        console.log('Primary button clicked!');
        
    });

    secondaryButton.addEventListener('click', () => {
        console.log('Secondary button clicked!');
        
    });

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

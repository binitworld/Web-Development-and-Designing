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

    // Handling primary and secondary button clicks
    const primaryButton = document.querySelector('.primary__btn');
    const secondaryButton = document.querySelector('.secondary__btn');

    primaryButton.addEventListener('click', () => {
        console.log('Primary button clicked!');
        // Add any action you want to perform
    });

    secondaryButton.addEventListener('click', () => {
        console.log('Secondary button clicked!');
        // Add any action you want to perform
    });

    // Hover effect for social media icons
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

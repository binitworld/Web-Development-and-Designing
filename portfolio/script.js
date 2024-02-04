var typed = new Typed(".text", {
    strings: ["Full-Stack Developer", "Dynamic Coder", "DevOps Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function openGoogleSearch() {
    window.location.href = 'https://www.google.com/search?q=binit+bhushan&oq=BINIT+B&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MgYIAhAjGCcyBwgDEAAYgAQyBggEEEUYQTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYQagCALACAA&sourceid=chrome&ie=UTF-8';
}
function toggleInfo(link) {
    const parentDiv = link.parentElement;
    const infoDiv = parentDiv.querySelector('.additional-info');
    
    if (!infoDiv) {
        const additionalInfo = document.createElement('div');
        additionalInfo.className = 'additional-info';
        additionalInfo.innerHTML = '<p>1. Automate your software</p><p>2. Apply version control for your product</p><p>3. Testing</p><p>4. Monitoring</p>';
        parentDiv.appendChild(additionalInfo);
    }

    
    infoDiv.style.display = infoDiv.style.display === 'block' ? 'none' : 'block';
    link.textContent = infoDiv.style.display === 'block' ? 'Show Less' : 'Learn More';
}
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    
    // Add click event for mobile devices
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    // Optional: Add hover effect for desktop
    card.addEventListener('mouseenter', () => {
        card.classList.add('flipped');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });
}); 
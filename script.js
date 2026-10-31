document.addEventListener('DOMContentLoaded', () => {
    // Smooth background video fallback check
    const video = document.querySelector('.bg-video');
    if (video) {
        video.play().catch(err => {
            console.log("Autoplay blocked or restricted:", err);
        });
    }
});

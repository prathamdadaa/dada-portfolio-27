document.addEventListener('DOMContentLoaded', () => {
  // Ensure background video plays smoothly
  const bgVideo = document.querySelector('.bg-video');
  if (bgVideo) {
    bgVideo.play().catch(error => {
      console.log("Autoplay was prevented:", error);
    });
  }

  // Horizontal mouse scroll support for navbar links
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      navLinks.scrollLeft += evt.deltaY;
    });
  }
});

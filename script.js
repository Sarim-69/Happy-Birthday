// script.js
document.addEventListener("DOMContentLoaded", () => {
    const mediaElements = document.querySelectorAll(".animate");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 1.0 }
    );
  
    mediaElements.forEach((element) => observer.observe(element));
  });

  function launchConfetti() {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;
    const colors = ['#bb0000', '#ffffff', '#FFD700', '#00FF00'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Trigger Confetti on Page Load
document.addEventListener("DOMContentLoaded", () => {
    launchConfetti();

    const mediaElements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 1.0 }
    );

    mediaElements.forEach((element) => observer.observe(element));
});
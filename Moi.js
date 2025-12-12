(function() {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
         // Фоллбек: если браузер старый – просто показываем всё
        elements.forEach(el => el.classList.add('reveal-visible'));
        return;
    }

    // Если у пользователя включено "уменьшить анимации"
    const reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
        elements.forEach(el => el.classList.add('reveal-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
})();

const AddDiv = document.querySelector('#AddDiv')


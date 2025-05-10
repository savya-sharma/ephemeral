// locomotive js  --  smoothscrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Handle smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Get the gallery link
    const galleryLink = document.querySelector('.gallery-link');

    if (galleryLink) {
        galleryLink.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Use locomotive scroll to scroll to the target
                scroll.scrollTo(targetElement);
            }
        });
    }
});

// gsap to animate
gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1" , {
    style: 2,
    y: 10,
    delay:  .3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});


gsap.from(".anim2", {
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Power2,
    duration: 1
})


// shery js to animate images according


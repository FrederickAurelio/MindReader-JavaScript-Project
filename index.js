const MyObserver = new IntersectionObserver((entries) => {
    entries.forEach(function (entry) {
        if (desktop.matches) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-how-container");
                // to stop observing
                // MyObserver.unobserve(entry.target);
            }
            // else {
            //     entry.target.classList.remove("show-how-container");
            // }
        }
        if (mobile.matches) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-mobile-how-container");
            }
        }
    });
});

var mobile = window.matchMedia("(max-width: 760px)")
var desktop = window.matchMedia("(min-width: 761px)")

const hiddenElements = document.querySelectorAll(".how-container");
hiddenElements.forEach(function (element) {
    MyObserver.observe(element);
});
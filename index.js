const obsCallback = (entries) => {
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
}
const obsOptions = {
  root: null,
}
const MyObserver = new IntersectionObserver(obsCallback, obsOptions);

var mobile = window.matchMedia("(max-width: 760px)");
var desktop = window.matchMedia("(min-width: 761px)");

const hiddenElements = document.querySelectorAll(".how-container");
hiddenElements.forEach(function (element) {
  MyObserver.observe(element);
});

// Scrolling
document.querySelector("#header-menu").addEventListener("click", function(e){
  const target = e.target.closest(".scroll")
  if(target){
    const scrollTo = target.getAttribute("scrollTo");
    document.querySelector(`#${scrollTo}`).scrollIntoView({behavior: "smooth"});
  }
});

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("scrollTo");
if(id){
  document.querySelector(`#${id}`).scrollIntoView({behavior: "smooth"});
}

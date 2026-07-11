// color for navigation bar buttons when entering/leaving a section

const NavBarButtons = document.querySelectorAll(".default_nav_button");

// options for the observer
// by just using this setup for the options, it works well detecting the sections, even when scrolling slowly or returning to sections.
// the problem was in using a rootmargin different than 0px. this is just fine for what we need.
const Options = {
    root: null,
    rootMargin: "-50% 0px -49% 0px",
    threshold: 0,
};

// function callback for the observer. here we do all the logic needed to check the intersections with the sections and changing the color of the buttons
const SectionsObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting) {

            console.log("intersecting: ", entry.target.id);

            NavBarButtons.forEach(button => {
                button.classList.replace("active_nav_button", "default_nav_button");
            });

            if(entry.target.id == "home") return;
            else document.getElementById(entry.target.id + "_button")?.classList.replace("default_nav_button", "active_nav_button");

        }

    })
};

// we declare our observer to check for all the sections in the page
const Observer = new IntersectionObserver(SectionsObserverCallback, Options);
// we can obtain all the sections in our document with the following line of code. reminder that we obtain the <section> elements in the html.
const Sections = document.querySelectorAll("section");

// then for all the sections that we obtained we add each one to the observer.
Sections.forEach(section => {
    Observer.observe(section);
});
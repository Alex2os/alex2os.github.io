// color for navigation bar buttons when entering/leaving a section

const NavBarButtons = document.querySelectorAll(".default_nav_button");

// options for the observer
// using a rootmargin of 0px and a threshold of 0.5 is enough for what we want in the navigation bar. previous visual bugs were solved by-
// instead of grabbing the whole sections (see commented code at the end of this file) we now grab the id's by themself, and it seems this is the correct way-
// to do this.
const Options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

// function callback for the observer. here we do all the logic needed to check the intersections with the sections and changing the color of the buttons
const SectionsObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting) {

            // console.log("intersecting: ", entry.target.id);

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
// const Sections = document.querySelectorAll("section");

// then for all the sections that we obtained we add each one to the observer.
/*
Sections.forEach(section => {
    Observer.observe(section);
});
*/

// we obtain the sections in our code to add an observer to them. we don't choose the sections  as in the commented code, as that ruins the purpose of the-
// options threshold of 0.5, as if we grab the sections by themself, for bigger sections (like the games section) it will not work properly. so we-
// grab the sections by id ("#games", "#projects", etc.) and then add an observer to them.
Observer.observe(document.querySelector("#home"));
Observer.observe(document.querySelector("#about_me"));
Observer.observe(document.querySelector("#projects"));
Observer.observe(document.querySelector("#games"));
Observer.observe(document.querySelector("#contact"));


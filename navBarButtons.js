// color for navigation bar buttons when entering/leaving a section

const NavBarButtons = document.querySelectorAll(".default_nav_button");

// options for the observer
// for sections that are not that big (like home, about me and contacts) a threshold of 0.6 is enough. for other sections (like projects and games) a-
// threshold of less than 0.5 is used, as a threshold of 0.5 or greater like this one can't work for those bigger sections.

// something to mention here is that we use these thresholds here (0.6 for smaller and 0.3 for big) in order for no visual bugs to happen.
// in testing, with a threshold in smaller with 0.5 and 0.2 on big some visual bugs happened, so this is the setup for now for no visual bugs and that works-
// for now. maybe in the future (when sections are bigger, depending if we add or erase projects) we will need to change the thresholds again, but this-
// works properly for now
const OptionsSmallSection = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
};

const OptionsBigSection ={
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
}

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
const ObserverSmallSections = new IntersectionObserver(SectionsObserverCallback, OptionsSmallSection);
const ObserverBigSection = new IntersectionObserver(SectionsObserverCallback, OptionsBigSection);

// we can obtain all the sections in our document with the following line of code. reminder that we obtain the <section> elements in the html.
// const Sections = document.querySelectorAll("section");

// then for all the sections that we obtained we add each one to the observer.
/*
Sections.forEach(section => {
    Observer.observe(section);
});
*/

// we obtain the sections manually (we can obtain both here with "#id" or like in the commented code) to add the required observer to them.
ObserverSmallSections.observe(document.querySelector("#home"));
ObserverSmallSections.observe(document.querySelector("#about_me"));
ObserverSmallSections.observe(document.querySelector("#contact"));

ObserverBigSection.observe(document.querySelector("#projects"));
ObserverBigSection.observe(document.querySelector("#games"));

console.log(document.querySelector("#home"));



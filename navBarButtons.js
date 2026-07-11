// color for navigation bar buttons when entering/leaving a section

// options for the observer
const Options = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // this is so the observer can trigger when a section has occupied 
    threshold: 0,
};

// function callback for the observer. here we do all the logic needed to check the intersections with the sections and changing the color of the buttons
const SectionsObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {

        console.log("callback called");
        if(entry.isIntersecting) {
            console.log("hello");
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

// scroll for navigation bar buttons
const HomeButton = document.getElementById("home_button");
const AboutMeButton = document.getElementById("about_me_button");
const ProjectsButton = document.getElementById("projects_button");
const GamesButton = document.getElementById("games_button");
const ContactButton = document.getElementById("contact_button");

const HomeFlex = document.getElementById("home");
const AboutMeFlex = document.getElementById("about_me");
const ProjectsFlex = document.getElementById("projects");
const GamesFlex = document.getElementById("games");
const ContactFlex = document.getElementById("contact");

HomeButton?.addEventListener("click", function () {MoveToTarget(HomeFlex);});
AboutMeButton?.addEventListener("click", function () {MoveToTarget(AboutMeFlex);});
ProjectsButton?.addEventListener("click", function () {MoveToTarget(ProjectsFlex);});
GamesButton?.addEventListener("click", function () {MoveToTarget(GamesFlex);});
ContactButton?.addEventListener("click", function () {MoveToTarget(ContactFlex);});

function MoveToTarget(flex) {

    flex?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// color for navigation bar buttons when entering/leaving a section

// options for the observer
const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.1,
};

// function callback for the observer. here we do all the logic needed to check the intersections with the sections and changing the color of the buttons
const SectionsObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
        }
            
    })
};

// we declare our observer to check for all the sections in the page
const observer = new IntersectionObserver(SectionsObserverCallback, options);
// we can obtain all the sections in our document with the following line of code. reminder that we obtain the <section> elements in the html.
const sections = document.querySelectorAll("section");

// then for all the sections that we obtained we add each one to the observer.
sections.forEach(section => {
    observer.observe(section);
});



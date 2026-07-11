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
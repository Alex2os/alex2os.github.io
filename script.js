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
const Options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.1,
};

// function callback for the observer. here we do all the logic needed to check the intersections with the sections and changing the color of the buttons
const SectionsObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
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

// PART TO DISPLAY THE IMAGES AND DO THEM BIGGER WHEN CLICKED

// we declare a map (which is like a dictionary) to save the paths to all our images. we do this for the gallery display, so we can access this images-
// whenever we want without worrying about the order too much.

const ImageNames = new Map([
    [0, "proclot_sim1"],
    [1, "proclot_sim2"],
    [2, "proclot_sim3"],
    [3, "museum_search1"],
    [4, "museum_search2"],
    [5, "museum_search3"],
    [6, "museum_search4"],
    [7, "minecraft_godot1"],
    [8, "minecraft_godot2"],
    [9, "minecraft_godot3"],
    [10, "minecraft_godot4"],
    [11, ""], // vocho's images will be here when they're turned from .jpg to .png
    [12, ""],
    [13, ""],
    [14, ""],
    [15, "pixel_gems1"],
    [16, "pixel_gems2"],
    [17, "pixel_gems3"],
    [18, "pixel_gems4"],
]);

// here we declare an image variable that will help us to instantiate and control the current image in the gallerydisplay
let image;
let actual_image_index;

// with querySelector we get the first match with what we are searching. in this case, we want our gallery display
const GalleryDisplay = document.querySelector(".gallery_display")
GalleryDisplay?.classList.add("hidden_element");

// function to exit the gallery display once the user clicks the exit button or clicks elsewhere other than the image or the buttons
function ExitGalleryDisplay() {
    GalleryDisplay?.classList.add("hidden_element");

    // to remove the image or the object from the document we can just do element.remove() like we do here. we also assign the image to null.
    image?.remove();
    image = null;

}

const GalleryImageContainer = document.querySelector(".gallery_image_container");

const GalleryExitButton = document.getElementById("gallery_button_exit");
GalleryExitButton?.addEventListener("click", function () {ExitGalleryDisplay()})

const GalleryLeftButton = document.getElementById("gallery_button_left");

GalleryLeftButton?.addEventListener("click", function () {

    console.log(actual_image_index)
    if(actual_image_index - 1 < 0) actual_image_index = ImageNames.size - 1;
    else actual_image_index--;

    image?.remove();
    CreateImageInGallery(ImageNames.get(actual_image_index));

});

const GalleryRightButton = document.getElementById("gallery_button_right");
GalleryRightButton?.addEventListener("click", function () {

    console.log(actual_image_index)
    if(actual_image_index + 1 > ImageNames.size - 1) actual_image_index = 0;
    else actual_image_index++;
    

    image?.remove();
    CreateImageInGallery(ImageNames.get(actual_image_index));

});



// a function to search a given image name/key's index. this is used so each time the user clicks on an image we know which index the image has.
// knowing the index is used for the gallery buttons, to switch between images.
function SearchImageIndex(image_key) {
    for(let i = 0; i < ImageNames.size; i++) if(image_key == ImageNames.get(i)) return i;
}

// we add an event listener for a key. in this case we check whenever the user presses the escape key. if the user presses it when the gallery display is active-
// (e.g, gallery display classlist does not contain hidden_element) then we exit the gallery display.
document.addEventListener("keydown", (event) => {

    // debug only. with this we can see the key pressed and the code of said key.
    // console.log("key pressed: ", event.key, "key code: ", event.code);

    if(event.code == "Escape" && !GalleryDisplay?.classList.contains("hidden_element")) ExitGalleryDisplay();
});

document.addEventListener("click", (event) => {

    // in this case we add a document event listener for the clicks. when a click occurs, we check the following:
    // we check if the event target is an image. we do this to prevent instantly closing the gallery display when clicking on an image for the first time, and-
    // also because we have an image itself, so this is good enough to check the image.
    // we also check if event is an instance of an <a>, as there are buttons the user can click when in the gallery display.
    // for an instance of an <a> we use HTMLAnchorElement
    // if both are false, then we are good to go, and we assign the gallery display to hidden element in the function we have inside of here
    if(!(event.target instanceof HTMLImageElement) && !(event.target instanceof HTMLAnchorElement)) ExitGalleryDisplay();


});

// function to create and instantiate an image in the gallery

// we can create and instantiate new resources or elements in the page dinamically, as we can see here, we create an image object to put it in the page.
// for this function, we pass the alt attribute here to use it as reference to get the image we are going to instantiate. the alt attribute is equal to-
// how the image is stored in the images in this case.
function CreateImageInGallery(image_name) {

    image = document.createElement("img");

    // we assign the attributes we need for our resource
    image.src = "Resources/Images/" + image_name + ".png";
    image.alt = image_name;

    // debugging only
    // console.log(image.src, image.alt);

    // remember that the ? is used to avoid the error that the variable, in this case the GalleryDisplay, could be null. so if it's null, when having the-
    // ? it just stops and doesnt do the function or line of code.
    GalleryImageContainer?.appendChild(image);

}

const project_images = document.querySelectorAll(".project_image");

// for each project image, we add an event listener so when it's clicked we create the image in the gallery and also show the gallery display
project_images.forEach((image) => {
    image.addEventListener("click", function () {

        let image_name = image.getAttribute("alt");

        CreateImageInGallery(image_name)

        actual_image_index = SearchImageIndex(image_name);

        console.log("actual image index: ", actual_image_index);
        // when adding or removing classes we don't use the . here. just the class' name
        GalleryDisplay?.classList.remove("hidden_element");
    });
});

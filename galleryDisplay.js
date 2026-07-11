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
    [11, "vochos_console1"],
    [12, "vochos_console2"],
    [13, "vochos_console3"],
    [14, "vochos_console4"],
    [15, "vochos_remake1"],
    [16, "vochos_remake2"],
    [17, "vochos_remake3"],
    [18, "vochos_remake4"],
    [19, "pixel_gems1"],
    [20, "pixel_gems2"],
    [21, "pixel_gems3"],
    [22, "pixel_gems4"],
]);

// with querySelector we get the first match with what we are searching. in this case, we want our gallery display
const GalleryDisplay = document.querySelector(".gallery_display");
const GalleryImageContainer = document.querySelector(".gallery_image_container");
const GalleryExitButton = document.getElementById("gallery_button_exit");
const GalleryLeftButton = document.getElementById("gallery_button_left");
const GalleryRightButton = document.getElementById("gallery_button_right");
const project_images = document.querySelectorAll(".project_image");

// here we declare an image variable that will help us to instantiate and control the current image in the gallerydisplay
let image;
let actual_image_index; // this is for the actual index we are in in the gallery. we use this variable to control what image is going to be displayed next or-
// prior when clicking the buttons.

GalleryDisplay?.classList.add("hidden_element");

// gallery buttons
GalleryExitButton?.addEventListener("click", function () {ExitGalleryDisplay()})
GalleryLeftButton?.addEventListener("click", function () {

    if(actual_image_index - 1 < 0) actual_image_index = ImageNames.size - 1;
    else actual_image_index--;

    image?.remove();
    CreateImageInGallery(ImageNames.get(actual_image_index));

});
GalleryRightButton?.addEventListener("click", function () {

    if(actual_image_index + 1 > ImageNames.size - 1) actual_image_index = 0;
    else actual_image_index++;
    

    image?.remove();
    CreateImageInGallery(ImageNames.get(actual_image_index));

});

// document event listener for a key
// we add an event listener for a key. in this case we check whenever the user presses the escape key. if the user presses it when the gallery display is active-
// (e.g, gallery display classlist does not contain hidden_element) then we exit the gallery display.
document.addEventListener("keydown", (event) => {

    // debug only. with this we can see the key pressed and the code of said key.
    // console.log("key pressed: ", event.key, "key code: ", event.code);

    if(event.code == "Escape" && !GalleryDisplay?.classList.contains("hidden_element")) ExitGalleryDisplay();
});

// for each project image, we add an event listener so when it's clicked we create the image in the gallery and also show the gallery display
project_images.forEach((image) => {
    image.addEventListener("click", function () {

        let image_name = image.getAttribute("alt");

        CreateImageInGallery(image_name)

        actual_image_index = SearchImageIndex(image_name);

        // when adding or removing classes we don't use the . here. just the class' name
        GalleryDisplay?.classList.remove("hidden_element");
    });
});



// function to exit the gallery display once the user clicks the exit button or clicks elsewhere other than the image or the buttons
function ExitGalleryDisplay() {
    GalleryDisplay?.classList.add("hidden_element");

    // to remove the image or the object from the document we can just do element.remove() like we do here. we also assign the image to null.
    image?.remove();
    image = null;

}

// a function to search a given image name/key's index. this is used so each time the user clicks on an image we know which index the image has.
// knowing the index is used for the gallery buttons, to switch between images.
function SearchImageIndex(image_key) {
    for(let i = 0; i < ImageNames.size; i++) if(image_key == ImageNames.get(i)) return i;
}

/*
document.addEventListener("click", (event) => {

    // in this case we add a document event listener for the clicks. when a click occurs, we check the following:
    // we check if the event target is an image. we do this to prevent instantly closing the gallery display when clicking on an image for the first time, and-
    // also because we have an image itself, so this is good enough to check the image.
    // we also check if event is an instance of an <a>, as there are buttons the user can click when in the gallery display.
    // for an instance of an <a> we use HTMLAnchorElement
    // if both are false, then we are good to go, and we assign the gallery display to hidden element in the function we have inside of here
    if(!(event.target instanceof HTMLImageElement) && !(event.target instanceof HTMLAnchorElement)) ExitGalleryDisplay();


});
*/

// function to know if an image is medium or not, using the size of the image.
// in this case we use a threshold of 700 for the width to know if it's medium
function IsImageMedium(image_object){ return image_object.naturalWidth <= 700 || image_object.naturalHeight <= 700 ? true : false; }

// function to create and instantiate an image in the gallery

// we can create and instantiate new resources or elements in the page dinamically, as we can see here, we create an image object to put it in the page.
// for this function, we pass the alt attribute here to use it as reference to get the image we are going to instantiate. the alt attribute is equal to-
// how the image is stored in the images in this case.
function CreateImageInGallery(image_name) {

    image = document.createElement("img");

    // we assign the attributes we need for our resource
    image.src = "Resources/Images/" + image_name + ".png";
    image.alt = image_name;

    if(IsImageMedium(image)) image.classList.add("gallery_image_big");
   
    else image.classList.add("gallery_image");

    // debugging only
    // console.log(image.src, image.alt);

    // remember that the ? is used to avoid the error that the variable, in this case the GalleryDisplay, could be null. so if it's null, when having the-
    // ? it just stops and doesnt do the function or line of code.
    GalleryImageContainer?.appendChild(image);

}
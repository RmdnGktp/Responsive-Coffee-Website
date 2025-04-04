const mobileLinksMenu = document.querySelector(".menu-links");
const listBtn = document.querySelector("#list-btn");
const closeBtn = document.querySelector("#x-btn");
const blurContainer= document.querySelector(".container");

// Open mobile menu on list button click
// listBtn.addEventListener("click", () => mobileLinksMenu.classList.add("show-mobile-menu"));
listBtn.addEventListener("click", function() {
    mobileLinksMenu.classList.add("show-mobile-menu")
    blurContainer.classList.add("blur")
});

// Close mobile menu on close button click
// closeBtn.addEventListener("click", () => mobileLinksMenu.classList.remove("show-mobile-menu"));

closeBtn.addEventListener("click", function() {
    mobileLinksMenu.classList.remove("show-mobile-menu")
    blurContainer.classList.remove("blur")
});
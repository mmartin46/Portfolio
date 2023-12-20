// script.js

let allSections = {
    meSection: "me",
    projSection: "proj",
    skillSection: "skills",
    workSection: "work"
};

Object.values(allSections).forEach(sectionId => {
    let sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
        sectionElement.addEventListener("click", function() {
            // FIXME: add a specific part based on the button clicked
        });
    }
});

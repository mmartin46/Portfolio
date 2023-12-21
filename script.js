/* global document */
/* jslint browser */
// script.js


document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const allSections = {
        meSection: "me",
        projSection: "proj",
        skillSection: "skills",
        workSection: "work"
    };

    Object.values(allSections).forEach(function (sectionId) {
        let sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            sectionElement.addEventListener("click", function() {
                whichSection(sectionId);
            });
        }
    });
    function whichSection(clickedSection) {
        let contentDivString = clickedSection + "_content";
        let contentDiv = document.getElementById(contentDivString);

        Object.values(allSections).forEach(function (sectionId) {
            console.log(sectionId + '_content');
            if (contentDiv) {
                handleMatch(contentDiv, sectionId, clickedSection);
            }
        });
    }

    function handleMatch(contentDiv, sectionId, clickedSection) {
        contentDiv.style.display = sectionId === clickedSection ? "block" : "none";
    }
});

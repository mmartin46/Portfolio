/* global document */
/*jslint browser */
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

    // Initalizes the sections to not be selected
    function initializeSections(allSections) {
        Object.values(allSections).forEach(function (sectionId, index) {
            let contentDivString = sectionId + "_content";
            let contentDiv = document.getElementById(contentDivString);

            // Start by setting the default section to the about me section.
            if (contentDiv) {
                contentDiv.style.display = "none";
            }
        });
    }

    initializeSections(allSections);

    function whichSection(clickedSection) {
        let contentDivString = clickedSection + "_content";
        let contentDiv = document.getElementById(contentDivString);

        // If the section has already been clicked
        if (contentDiv.classList.contains("active")) {
            return;
        }

        Object.values(allSections).forEach(function (sectionId) {
            if (contentDiv) {
                if (sectionId === clickedSection) {
                    handleMatch(contentDiv);
                }
            }
        });
    }

    function handleMatch(contentDiv) {
        Object.values(allSections).forEach(function (section) {
            let currContentDiv = document.getElementById(section + "_content");
            if (currContentDiv) {
                currContentDiv.style.display = "none";
            }

            contentDiv.style.display = "block";
            document.getElementById(section + "_content").classList.remove("active");
        });

        contentDiv.style.display = "block";
        contentDiv.classList.add("active");
    }
});

// Get all the articles on the page
const tennisarticles = document.querySelectorAll("article");

document.addEventListener("DOMContentLoaded", function(event) {
    buildNavigationFromArticles();
});

/**
 * Builds the navigation menu based on the articles available on the page
 */
function buildNavigationFromArticles() {
    // Create navigationFragment which will hold all anchor elements
    const navigationFragment = document.createDocumentFragment();
    for (const tennisarticle of tennisarticles) {
        const tennisarticleheader = tennisarticle.querySelector("h2").innerText;
        // Create the navigation element and append to the fragment
        const navigationElement = document.createElement('a');
        navigationElement.classList.add('navigationItem');
        navigationElement.innerText = tennisarticleheader;
        // Associate onClick event
        addOnClickEventToNaivgationItem(navigationElement);
        navigationFragment.appendChild(navigationElement);
    }
    document.getElementById("navigationsid").appendChild(navigationFragment);

}

/**
 * 
 * Assoicates onClick event to Navigation Item 
 */
function addOnClickEventToNaivgationItem(navigationElement) {
    navigationElement.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById(navigationElement.innerText).scrollIntoView(true);
    });
}

/**
 * Associates scroll event to the document and highlights the section in view port
 */
document.addEventListener('scroll', function(e) {
    t = setTimeout(function() {
        const elementInViewPort = getElementInViewPort();
        if (elementInViewPort != undefined) {
            elementInViewPort.classList.add("sectionHighlight");
        }

    }, 300);
});

/**
 * Fetches the current element in view port
 */
function getElementInViewPort() {
    // Reset all elements backgroud color
    for (const tennisarticle of tennisarticles) {
        tennisarticle.classList.remove("sectionHighlight");
    }
    // Get the first element which is in the viewport
    for (const tennisarticle of tennisarticles) {
        const h2Element = tennisarticle.firstElementChild;
        var bounding = h2Element.getBoundingClientRect();

        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            return tennisarticle;
        }
    }
}
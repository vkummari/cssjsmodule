// Get all the articles on the page
const tennisarticles = document.querySelectorAll("article");

document.addEventListener("DOMContentLoaded", function(event) {
    buildNavigationHeader();
});

/**
 * Builds the navigation menu based on the articles available on the page
 */
function buildNavigationHeader() {
    // Create navigationFragment which will hold all anchor elements
    const navigationFragment = document.createDocumentFragment();
    for (const tennisarticle of tennisarticles) {
        const tennisarticleheader = tennisarticle.querySelector("h2").innerText;
        // Create the navigation element and append to the fragment
        const navigationElement = document.createElement('li');
        navigationElement.classList.add('navigationItem');
        navigationElement.innerText = tennisarticleheader;
        // Associate onClick event
        addOnClickEventToNaivgationItem(navigationElement);
        navigationFragment.appendChild(navigationElement);
    }
    document.getElementById("navigationsid").appendChild(navigationFragment);
    //Once the navigation bar is build, put the articles section right below the navbar
    const navBarDivHeight = this.document.getElementById("navbardiv").clientHeight;
    document.getElementById("sectionsid").style.paddingTop = navBarDivHeight + 'px';
}

/**
 * 
 * Associates onClick event to Navigation Item and scroll to that element
 */
function addOnClickEventToNaivgationItem(navigationElement) {
    navigationElement.addEventListener("click", function(event) {
        event.preventDefault();
        const navBarDivHeight = document.getElementById("navbardiv").clientHeight;
        var topOfElement = document.querySelector('#' + navigationElement.innerText).offsetTop - navBarDivHeight;
        window.scroll({ top: topOfElement, behavior: "smooth" });
    });
}

/**
 * Associates scroll event to the document and highlights the section in view port
 */
document.addEventListener('scroll', function(e) {
    t = setTimeout(function() {
        const articleInViewPort = getArticleInViewPort();
        if (articleInViewPort != undefined) {
            articleInViewPort.classList.add("sectionHighlight");
        }

    }, 300);
});

/**
 * Fetches the current element in view port
 */
function getArticleInViewPort() {
    // Reset all elements backgroud color
    for (const tennisarticle of tennisarticles) {
        tennisarticle.classList.remove("sectionHighlight");
    }
    // Get the first element which is in the viewport
    // Logic checks the article header element is right below the header
    for (const tennisarticle of tennisarticles) {
        const headerElement = tennisarticle.firstElementChild;
        var headerBox = headerElement.getBoundingClientRect();
        const navBarBottom = document.getElementById("navbardiv").getBoundingClientRect().bottom;
        if (headerBox.top >= navBarBottom) {
            return tennisarticle;
        }
    }
}
/**
 * When window resizes, start the sections right below the header
 */
window.addEventListener('resize', function() {
    const navBarDivHeight = this.document.getElementById("navbardiv").clientHeight;
    document.getElementById("sectionsid").style.paddingTop = navBarDivHeight + 'px';
});
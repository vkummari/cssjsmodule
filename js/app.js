document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Hello - Page loaded")
    buildNavigationFromArticles();
});

/**
 * Builds the navigation menu based on the articles available on the page
 */
function buildNavigationFromArticles() {
    // Get all the articles on the page
    const tennisarticles = document.querySelectorAll("article");
    // Create navigationFragment which will hold all anchor elements
    const navigationFragment = document.createDocumentFragment();
    for (const tennisarticle of tennisarticles) {
        console.log(tennisarticle.querySelector("h2").innerText);
        const tennisarticleheader = tennisarticle.querySelector("h2").innerText;
        // Create the navigation element and append to the fragment
        const navigationElement = document.createElement('a');
        navigationElement.classList.add('navigationItem');
        navigationElement.innerText = tennisarticleheader;
        // Associate onClick event
        addOnClickEventToNaivgationItem(navigationElement);
        navigationFragment.appendChild(navigationElement);
    }
    console.log("Navigation Fragment" + navigationFragment);
    console.log(document.getElementById("navigationsid"));
    document.getElementById("navigationsid").appendChild(navigationFragment);

}

/**
 * 
 * Assoicates onClick event to Navigation Item 
 */
function addOnClickEventToNaivgationItem(navigationElement) {
    console.log("Inside associating on Click event")
    navigationElement.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(navigationElement.innerText + " is clicked");
        console.log(document.getElementById(navigationElement.innerText));
        document.getElementById(navigationElement.innerText).scrollIntoView(true);
    });
}
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Hello - Page loaded")
    buildNavigationFromArticles();
});

/**
 * 
 */
function buildNavigationFromArticles() {
    // Get all the articles on the page
    const tennisarticles = document.querySelectorAll("article");
    for (const tennisarticle of tennisarticles) {
        console.log(tennisarticle.querySelector("h2").innerText);
        const tennisarticleheader = tennisarticle.querySelector("h2").innerText;
    }

}
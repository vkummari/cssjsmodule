CSS JS Module
=============

Contents of the project
------------------------

The project contains the followings files.

* js/app.js 
    * **buildNavigationHeader** function builds navigation header from the articles available in index.html page and sets the body content right below the header
    * **addOnClickEventToNaivgationItem** function associates click event to the header items as they are built and added to the header and helps user to navigation to respective section.
    * **getArticleInViewPort** function gets the first article section that is in view port.
    * **Listener event** is established for the **document scroll** to highlight the section active in Orange background
    * **Listener event** is established for the **window resize** for articles content to begin right under the header
* index.html - The static page with different section of articles
* appstyle.css - Holds all the stlying information for the page.
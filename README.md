# SC-APOD
This project was created to bring satisfaction to Space Club enthusiasts all over the world. It was built at the request of the Space Club OAU StarGazers Society. The scope of the app is that users/visitors can visit the web app and send a request based on a date input to view a picture of the day which depicts an occurence in space with an explanation which provides more information about the occurence. To make the web app more aesthetically pleasing, a background picker is present for users/vistors to choose whichever one they prefer. Also, upon requesting for an APOD, the background image of the web app changes to match the APOD

**Link to project:** http://spc-apod.netlify.app/

![alt tag](images/gif5.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, NASA APOD API

This project was built using HTML as the base structure with CSS for the styling. Postman (https://www.postman.com/) was used to test the NASA APOD API before it was implemented with the JavaScript. Based on the data obtained from the API, DOM manipulation was carried out to change and display data obtained within the DOM.

As for the background picker, a section was added to house the different background images and then an event listener is placed on each image to cause the web app backgorund to change to whatever image is clicked on.

Within the fetch section in the JS, the body background was set to change on every response to the request to get an APOD to match the picture of the day.

## Optimizations

To further improve this app, the local storage could be used to store a component of liked space occurences which the user could add using a favourite/like button. So that whenever the user visits the app, they could just go down memory lane and visit their liked/favourited space occurences.

Also, instead of using just a bland background, which looks good by the way, the web app could be made to have a background images which changes upon each reload session and also options could be provided to toggle between different background images depending on the users preference. 

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. I learnt quite a lot, for example, I learnt how to better implement flexbox in design and also a more efficient way of styling background images.
I was also able to see the importance of testing before implementations especially for APIs, Postman (https://www.postman.com/) was really helpful in acheiving that.
This project has also helped me find efficient ways to solve problems, like in making a different background upon each time the website is loaded and other things like creating new elements within the DOM and manipulating those created elements.
Also, separation of concerns is really important and Mobile First! Always and Forever!

## Examples:
Take a look at a few other projects that I have in my own portfolio:

**Edie Agency:** https://github.com/daniel-ezekiel/edie-agency-website

**Prima Interiors:** https://github.com/daniel-ezekiel/interior-consultant-lp

**The Creative Crew:** https://github.com/daniel-ezekiel/team-page-challenge




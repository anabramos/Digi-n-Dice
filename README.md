# Digi & Dice

## About Digi & Dice

Digi & Dice is an online initiative dice roller for table top and/or online Dungeons and Dragons player. Designed specifically for those days when you forget to pack you d20 for battle. 

The Digi & Dice project is a user centric interactive Front-End Development website. This is my second project as part of the Diploma in Software Development at Code Institute.

Link to live website: https://anabramos.github.io/Digi-n-Dice/

<img src="assets/images/design/am-i-responsive.png" style="width: 60%" />

## Table of Contents
- [Features](#features)
    * [Features to be Implemented](#features-to-be-implemented)
- [User Experience (UX)](#user-experience-ux)
- [Testing](#testing)
    * [Component level Testing](#component-level-testing)
    * [User level Testing](#user-level-testing)
    * [Bugs](#bugs)
        * [Known Issues](#known-issues)
    * [Validator Testing](#validator-testing)
    * [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

<a name="features"></a>

## Features

- Header & logo
    - The header is situated at the top of the page, with the logo of the Digi & Dice to the left. The logo brings the distinct dragon in the shape of the icon & that can be recognized by all true D&D players. 
    - The Digi & Dice logo also functions as an anchor link to the homepage in case the user wishes to refresh/restart/load the page again.
    
    <img src="assets/images/design/header.png" style="width: 60%">

- Quote section
    - As part of the interactivity of the page, the user will find a variety of quotes related to D&D coming back every 3 seconds to engage them with the website and attract their interest.
    - This feature is disabled for side-bar and mobile mode (screens with max-width of 620px).
    
    <img src="assets/images/design/quote-section.png" style="width: 60%">

- Initiative dice roll section
    - The dice roll functionality is built so that users can include their initiative modifiers and the initiative roll will calculate the sum of these two values. 
    - If no initiative modifier is provided when performing a dice roll, the user will receive as a result a reminder to add its modifier. 
    - When the user clicks on the dice roll button having added a valid initiative modifier value, they will receive as a response the already calculated total initiative value of their roll + initiative modifier. 
    
    <img src="assets/images/design/dice-roll-section.png" style="width: 60%">

- Initiative history section
    - The initiative history section will log the results of a user's initiative rolls up until a maximum of 7 rolls. 
    - After 7 rolls, for every new dice roll the latest logged initiatives will be deleted, giving room for the newest one.
    - This feature allows the user to see their latest rolled initiative especially in cases where you get inspiration, help and/or advantage and need to compare/sum two different rolls.
    
    <img src="assets/images/design/initiative-history.png" style="width: 60%">
 
- Initiative triggered gif section
    - Another interactive feature of Digi & Dice is the gif display triggered by the initiative value rolled.
    - For lower initiative values (initiative < 7) the section will display gifs that translate the slowness of the action.
    - For medium initiative values (initiative > 7 && initiative < 13) the section will display gifs that translate the medium pace of the action.
    - For high initiative values (initiative > 13) the section will display gifs that translate the speediness of the action.
    - This feature is disabled for side-bar and mobile mode (screens with max-width of 620px).
    
    <img src="assets/images/design/gif-section.png" style="width: 40%">

- Footer 
    - The footer credits the creator of the website.

    <img src="assets/images/design/footer.png" style="width: 60%">

<a name="features-to-be-implemented"></a>

### Features to be implemented

- Implement an API for quote and gif generators
- Expand the dice roll beyond initiative rolls (d20) to include also d4, d6, d8, d10, and d12.

<a name="user-experience-ux"></a>

## User Experience (UX)
The user experience for the website is built with 2 personas in mind. Each persona presents a different user story and different goals when accessing the website. 

- Personas 
    - Persona 1: Tabletop player.
    - Persona 2: Online player.
    - Persona 3: New D&D player

- User stories

    - A tabletop player:
        - I often play D&D with my party in person around a table.
        - I want an initiative dice roller that can be used by the whole party.
        - We need to have the history of initiative rolled up to 5 party members.
        - We would like to have fun while using the online dice roller.

    - An online player:
        - I often play D&D online
        - I require a vertical side-bar version of an initiative dice roller only with the most basic features. 
        - I do not want to have to scroll down on the website to see the results. 

    - A new D&D player:
        - I am still getting familiar with the different dice rolls. 
        - I want to use an online dice roller that will clearly state the kind of dice I should be using for a certain action (initiative d20).
        - I want to learn from the website what different roll values stand for and how to calculate these values. 

- Digi & Dice goals with the website:
    - Attract D&D enthusiasts to make use of the website.
    - Create an interactive and fun experience for group parties using the website.

<a name="testing"></a>

## Testing

<a name="component-level-testing"></a>

### Component level Testing

- Compatibility & Responsiveness
    - The website was tested and it is working on different browsers: Google Chrome, Firefox, and Microsoft Edge.
    - Tested on different devices using Chrome DevTools and other available from myself and friends. 
    - The website is responsive on screen widths from 2560px to 320px.

- Header/Logo
    - The internal link in the logo is working and opening the home page as desired.

- Quote section
    - The quote section is working and displaying a random quote every 3 seconds. 

- Modifier input field
    - The modifier input field is working and will only accept number inputs.
    - The modifier input field is required, which means if the user does not fill in the calculation for initiative will not happen and the user will receive a message requiring to do so.

- Roll dice button
    - The button is working and providing the correct output based on the calculation it does.
    - When the button is clicked, it will trigger 3 things:
        - Display an initiative number or a request for the user to provide an initiative modifier;
        - Display the calculation of the initiative in the 'initiative history box' on the top of the list, with distinct style;
        - Display a gif that corresponds with the initiative number rolled. 

- Initiative history container
    - All initiatives rolled are being logged properly into the container, including being added to the top of the list in different styling.
    - The sum between the dice roll and initiative modifier is working correctly. 

<a name="user-level-testing"></a>

### User level Testing
During a game friends of mine tested the website in their own mobiles, laptops, etc. 

 - Overall Navigation 
    - No issues reported.

- Website Responsiveness
    - Issue reported with horizontal scrolling caused by the footer content. Changes to address this issue were implemented by giving the footer a different content in smaller screen sizes. 
    - Issue reported with gifs that were either displaying in line with other containers or below it. Changes to address this issue were implemented by adding different styling to the div holding the gifs section.

- Dice roll section
    - No issues reported.

- Initiative history section
    - Issue reported with the way in which the initiative history is logged, which was displayed in line and not very transparent in regards to the dice roll. Changes to address this issue were implemented by displaying the initiative history log in a list format and presenting the entire calculation rather than just the initiative number. 

<a name="bugs"></a>

### Bugs
While building Digi & Dice, many things were not working as expected. Some bugs I encountered were:

- When building the quotes section I used the setInterval() method to display a random quote every 3 seconds after the loading of the DOM. Initially I could see the placeholder welcome text would change to a quote after 3 seconds, but this would then stay on as the only displayed quote. This happened because the randomQuote variable had been defined outside the function (and therefore was out of scope), and it was returning the already defined random quote. By introducing this variable inside the loadRandomQuote() function I was able to fix the bug and make a new random quote appear every 3 seconds. 

- When using JavaScript to get the value of the element with id = "modifier" this was returning as a string value and therefore was printing the sum of the dice roll and initiative modifier one after the other. Example: dice roll = 15 and initiative modifier = 3, the sum was logging 153. To fix this I have used the .valueAsNumber property.

- My HTML code was not passing the W3C validation because my img tag had no src attribute, which was because there was a condition in my JavaScript document that would add a src to the tag based on the initiative that was rolled. To avoid having errors in this situation I have created a square image with same color background  as the website so that this is the initial src attribute of the img tag while still looking like the page is empty. 

- Because I have made use of the 'click' event listener I have not used a submit type button, but rather just a button. In this case, I was not able to use the required attribute on my modifier input field and therefore decided to create an if/else statement to print a reminder paragraph for users who do not fill in their initiative modifiers.

    <a name="known-issues"></a>

    #### Known issues

    - On Mozila Firefox the initiative history container creates a bigger top margin gap in comparison with the roll dice box container, making one box taller than the other. This however does not impact the functionality of the website and main features.

<a name="validator-testing"></a>

### Validator Testing

- HTML
    - No errors or warnings returned from the [W3C Markup Validator Service](https://validator.w3.org/)

- CSS
    - No errors or warnings returned from the [W3C CSS Validator Service](https://jigsaw.w3.org/css-validator/)

- JavaScript
    - No errors, warnings or bugs returned from the [JSHint](https://jshint.com/)

<a name="accessibility"></a>

### Accessibility

- The color pallet and contrast for the website was tested on [WebAIM](https://webaim.org/resources/contrastchecker/)
- The website has been tested on lighthouse for accessibility.
    - Desktop

    <img src="assets/images/design/lighthouse-desktop.png" style="width: 60%">

    - Mobile

    <img src="assets/images/design/lighthouse-mobile.png" style="width: 60%">

<a name="deployment"></a>

## Deployment

The website was deployed using GitHub Pages. For that, the following steps were taken:
1. From the GitHub repository page go to 'Settings'.
2. From 'Settings', scroll until the 'GitHub Pages' section.
3. At the 'GitHub Pages' section open the dedicated GitHub Pages tab by clicking on the link.
4. In the new tab select the main branch using the dropdown menu and click 'Save'.
5. A link will be provided where the website is now published.

    * After deployment the live website link was available at most devices from friends, colleagues and CI community members but not on my own computer. After consulting tutor support and research on stack overflow, I made an empty commit (which was recommended) and then the website became available again.

- Forking
    - To use this project as a reference or starting point, or even to propose changes to it, you can fork this repository by following these steps: 
        1. From the GitHub repository page click on 'Fork' in the top-right corner.
        2. Create a new repository with a new name based on this project. 
        3. Make sure to credit the project in case you decide to use any of the original code.

<a name="design"></a>

## Design

- Colors
    - The website colors are inspired by D&D Fire dragons. It uses different shades of red and dark red with yellow details to create contrast between text and background.

        <img src="assets/images/design/my-colors.png" style="width: 60%" style="height: 120px">

- Fonts
    - The website uses a combination of Josefin Slab and Special Elite fonts, with a fall back to sans-serif. These fonts are popularly paired together. Special Elite is used in the website for high-level headings while Josefin Slab is used for regular text and low level headings. The fonts were compared and taken from [Google Fonts](https://fonts.google.com/).

- Icons
    - This website makes use of icons from [Font Awesome](https://fontawesome.com/) to give a new visual element and reference existing imagery from Dungeons and Dragons. The Icons are used to indicate the purpose of the website.

- Gifs
    - All gifs for this project were taken from [GIPHY](https://giphy.com/). 

<a name="technologies-used"></a>

## Technologies Used

- Languages
    - [HTML5](https://en.wikipedia.org/wiki/HTML)
    - [CSS](https://en.wikipedia.org/wiki/CSS)
    - [Javascript](https://en.wikipedia.org/wiki/JavaScript)

- Libraries & Frameworks
    - [Google Fonts](https://fonts.google.com/)
    - [Font Awesome](https://fontawesome.com/)

- Tools
    - [Gitpod](https://www.gitpod.io/)
    - [Github](https://github.com/)
    - [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)
    - [Coolors (color schemes generator)](https://coolors.co/)
    - [GIPHY](https://giphy.com/)
    - [W3C HTML Validation Service](https://validator.w3.org/)
    - [W3C CSS Validation Service](https://validator.w3.org/)
    - [JSHint](https://jshint.com/)
    - [Am I Responsive?](http://ami.responsivedesign.is/)
    - [WebAIM](https://webaim.org/resources/contrastchecker/)

<a name="credits"></a>

## Credits

- Content
     
    - All code for this project was written by myself: Ana Ramos Barretto.

- Media

    - All gifs for this website were taken from [GIPHY](https://giphy.com/).

<a name="acknowledgements"></a>

## Acknowledgements

A huge thanks to my mentor Samantha Dartnall, the CI slack community and tutoring team, my party the Erasmus Eradicators and DM who tested the website during our last game. 
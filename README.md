## About Digi & Dice

Digi & Dice is an online initiative dice roller for table top and/or online Dungeons and Dragons player. Designed specifically for those days when you forget to pack you d20 for battle. 

The Digi & Dice project is a user centric interactive Front-End Development website. This is my second project as part of the Diploma in Software Development at Code Institute.

Link to live website: !!!

## Features

- Navigation Bar
    - The navigation bar is situated at the top of the page, with the logo of the Digi & Dice to the left. The logo brings the distinct dragon in the shape of the & that can be recognized by all true D&D players. 
    - The Digi & Dice logo also functions as an anchor link to the homepage.

- Quote section
    - As part of the interactivity of the page, the user will find a variety of quotes related to D&D coming back every 3 seconds to engage them with the website and attract their interest. 

- Initiative dice roll section
    - The dice roll functionality is build so that users can include their initiative modifiers and the initiative roll will calculate the sum of these two values. 
    - If no initiative modifier is provided when performing a dice roll, the user will receive as a result a reminder to add its modifier. 
    - When the user clicks on the dice roll button having added a valid initiative modifier value, they will receive as a response the total initiative value of their roll. 

- Initiative history section
    - The initiative history section will log the results of a user's initiative rolls up until a max. of 10 rolls. 
    - After 10 rolls, for every new dice roll the latest logged initiatives will be deleted, giving room for the newest one. 

- Initiative triggered gif section
    - Another interactive feature of Digi & Dice is the gif display triggered by the initiative value rolled.
    - For lower initiative values (initiative < 7) the section will display gifs that translate the slowliness of the action.
    - For medium initiative values (initiative > 7 && initiative < 13) the section will display gifs that translate the medium pace of the action.
    - For high initiative values (initiative > 13) the section will display gifs that translate the speediness of the action.

- Footer 
    - The footer credits the creator of the website. 

### Features to be implemented

- Implement an API for quote and gif generators
- Expand the dice roll beyond initiative rolls (d20) to include also d4, d6, d8, d10, and d12.
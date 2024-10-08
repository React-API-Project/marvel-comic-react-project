# [Marvel Searcher]

Created by William Zen and Jahmari Maxwell.

## 🚀 Mission statement

Our application, Marvel Searcher is for anyone who loves comics. It allows users to search any comic character name along with the comic that they come from and display that information.

## API & React Router

This application will use the Marvel API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

Link to API documentation: [[https://developer.marvel.com/docs]]


- API endpoint #1 :https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0
  - Fetches list of characters
  - I want to fetch the unique ID of the character, name of the character, thumbnail - representative image for this character

- API endpoint #2 :/v1/public/characters/{characterId}/comics
  - Fetches the comics’ cover
  - I would like to fetch the comic by ID and title of the comic while also displaying the thumbnail of the comic

- API endpoint #3 : /v1/public/characters/{characterId}/stories 
  - Fetch's ‘story’ behind the searched character id
  - I would like to fetch the ID, description, and title.



[If your API requires an API key, say so here.]

**Example:**
https://api.artic.edu/api/v1/artworks
This will fetch an array of artwork objects
For each artwork, I want the id, title, and image_id

https://api.artic.edu/api/v1/artworks/{id}
This will fetch a single artwork object
I will use the id, title, short_description, medium_display, place_of_origin and image_id

https://api.artic.edu/api/v1/artworks/search?q={query}
This will fetch a list of artworks that relate to the search query
For each artwork, I will use the id and title

## 👩‍💻 MVP User Stories & Frontend Routes

The color scheme for this project is #817E9F

* The application will feature the following frontend routes and core features:

- On the /home page, users can…
Input a value inside the search bar which will fetch characters through their name

- On the /home page, users can…
View the images of the characters currently searched

- On the /home page, users can…
Once the character is searched users have the option to click” reveal story” to fetch Story{description}

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

- Users will be able to…
Keep a stored log of their recent searches cascading from most recent to oldest maybe as a small icon or the names in a box somewhere on the screen

- Users will be able to…
See all instances/characters of relevance to the character's name, multiple boxes showcasing instead of just one

- Users will be able to…
Users will be able to change the color theme from light mode to dark mode



**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [x] Fetch the API 8/20
- [x] H1 title, Search bar form, Buttons 8/20
- [x] Styling the Home page with the idea of our wireframe in mind. 8/20

**Day 2**
- [x] Show description of Marvel character 8/21
- [ ] (Strecth)Rendering multiple images 8/21

**Day 3** (MVP due by the end of the day)
- [ ] Build NavBar 8/22
- [ ] Style About Page 8/22

**Day 4**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 5**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

Wireframe link: [[https://excalidraw.com/#room=6d31299855f32f63e583,PwAAhY0fk6EM2WYSJSwzBA]]

[Wireframe for page 1]

![alt text](<Main Page.png>)

[Wireframe for page 2]

![alt text](About.png)

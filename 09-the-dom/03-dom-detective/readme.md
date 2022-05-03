# 03 Dom Detective

## Author Details

- Name : Raul
- Surname: Bercea
- Mail: raul.bercea@edu.itspiemonte.it

## Excercise Requirements

- Go to www.gog.com
- Use the devtools to view the DOM and write Javascript in the console
- Use the DOM access methods to find the following:

    ○ Every image on the page

    ○ The main menu at the top of the page

    ○ All the news items under "News"

    ○ The footer

    ○ All the social media links at the bottom of the page
- Produce a readme.md file with
    ○ snippets of your Javascript code

    ○ explanations of what which elements they select

## Snippets

1. Using a querySelector in order to get all images on the page

```javascript
// getting every image on the page
document.querySelectorAll("img");
```

2. Getting the main menu using a get element by class name

```javascript
// getting the main menu at the top of the page
let menu = document.getElementsByClassName("menu-main");
```

3. Getting all the items in the news section

```javascript
// all the news items under news
let newsItems = document.let getElementsByClassName("news-section");
```

4. Getting the footer of the page

```javascript
//getting the footer
let footer = document.getElementByTagName("footer");
```

5. Getting the social media links

```javascript
//gettin all social media links in the footer
let socialMedia = document.getElementsByTagName("footer-microservice-socials");
```

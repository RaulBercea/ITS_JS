# 04 Custom Detective

## Author Details

- Name : Raul
- Surname: Bercea
- Mail: raul.bercea@edu.itspiemonte.it

## Excercise Requirements

- Choose a news website that you like
- Use the devtools to view the DOM and write Javascript in the console
- Use the DOM access methods to find
  - At least 10 different elements or collections of elements in the page
  - Choose interesting elements that require complex selectors to reach
- Produce a readme.md file with
  - A link to the website that you chose
  - snippets of your Javascript code
  - explanations of what which elements they select

## Solution

Chosen website : [BBC News](www.bbc.com/news)

- 1

```javascript
// selecting the most read articles
document.getElementsByClassName("nw-c-most-read");
```

- 2

```javascript
// selecting the search button
document.getElementById("orbit-search-button");
```

- 3

```javascript
// selecting all the titles within the msut see section
document.querySelectorAll(".nw-c-must-see h3");
```

- 4

```javascript
// selecting the most read article within the most read section

document.querySelectorAll(".nw-c-most-read li:first-of-type");
```

- 5

```javascript
// selecting every odd topic of the news within the highlited news that is visible
document.querySelectorAll(
  "div.nw-c-top-stories .nw-c-promo-meta .gs-c-section-link:nth-of-type(odd):not(.hidden)"
);
```

- 6

```javascript
// selecting the contact information
document.querySelectorAll(".ws-c-get-in-touch");
```

- 7

```javascript
// selecting both home buttons in the navigation barrs
document.querySelectorAll("nav > ul > li:first-child");
```

- 8

```javascript
// selecting the full story heading
document.querySelectorAll("div.nw-c-full-story > div:first-child");
x;
```

- 9

```javascript
// selecting all the headings in arround the bbc section
document.querySelectorAll(
  "div.nw-c-around-the-bbc > div a h3:nth-of-type(odd)"
);
```

- 10

```javascript
// selecting all the social media icons in the find us here section
document.querySelectorAll("div.ws-c-social-slice ul li svg");
```

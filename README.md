# pesapal
This Is The Solution to Pesapal Problem One and Problem 3.
-- The Code for problem one lies on the "problem1solution" folder >> "server folder" >> "index.js" file
-- The Code for problem 3 lies on the "PROBLEM 3" folder >>  "scrapper.js" file

# Table Of Contents
- [Problem Title](#problem-title)
- [problem 1 Objective](#problem-objective)
- [Technologies Used for solving problem one](#problem-one-technologies)
- [Code Results](#results)
- [How it works](#explanation)

- [Problem 3 Title](#problem3-title)
- [problem 3 Objective](#problem-3-objective)
- [Technologies Used to solve problem 3](#problem-three-technologies)

- [What i do](#what-i-do)





## Problem Title
Problem 1: Web server (with optional secure communication).

## Problem objective
Design a basic HTTP web-server application which can listen on a configurable TCP port and serve both static HTML and dynamically generated HTML by means of a chosen programming language, such as in the way Apache uses PHP. It is acceptable for this server application to support only a restricted subset of HTTP, such as GET or POST requests, and the only headers it must support are Content-Type and Content-Length.

### problem one Technologies
 The following Technologies and programming languages were used to meet the above objectives.
 - Javascript Programming Language.
 - React js Framework(for the home and signup pages).
 - Node js runtime environment.
 - Axios Library for performing http requests.
 - Express js Framework.
 - Cors middleware(to secure the routes on the web-server).
 - bcrypt library to encrypt the data coming from the client side to the db on the serverside.
 - mysql database to store the userdetails from the client side.
 - Sass library to style up the client side.
 - vsCode code editor.

## Results
The client side code produces the below results when run on the browser on localhost
- ### home page route
![Code Results](/image/home_page.png)
- ### register route
![Code Results](/image/signup_page.png)
The server side code displays the below results on the browser
- ### GET request for the home("/") route
![Code Results](/image/serverhomeroute.png)

## Explanation
- ### On The Server side
- User details are received from the client side through a POST request on the "/register" route and are then stored to the database on the serverside
- The home "/" route on the GET request retrieves data from the database.The data is then being fetched on the client side and displayed on the home page

## Problem3 Title
Problem 3: Diction & dictionary scrapping.

## Problem 3 objective
Write an application which, when given a web page will download the text on it and output a sorted list of the unique words on the page, with counts of the occurrences.



### problem Three Technologies
 The following Technologies and programming languages were used to meet the above objectives.
 - Javascript Programming Language.
 - Node js runtime environment.
 - puppeteer library


## What i do
- I create fullstack web applications which can perform the (CRUD) operations i.e CREATE READ UPDATE and DELETE data with nodejs,mysql db and reactjs




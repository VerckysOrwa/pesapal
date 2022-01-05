# pesapal
This Is The Solution to Pesapal Problem One.
The Code lies on the "solution" folder >> "server folder" >> "index.js" file

# Table Of Contents
- [Problem Title](#problem-title)
- [Objective](#problem-objective)
- [Technologies Used](#technologies)
- [Code Results](#results)
- [How it works](#explanation)
- [What i do](#what-i-do)





## Problem Title
Problem 1: Web server (with optional secure communication).

## Problem objective
Design a basic HTTP web-server application which can listen on a configurable TCP port and serve both static HTML and dynamically generated HTML by means of a chosen programming language, such as in the way Apache uses PHP. It is acceptable for this server application to support only a restricted subset of HTTP, such as GET or POST requests, and the only headers it must support are Content-Type and Content-Length.

### Technologies
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

## What i do
- I create fullstack web applications which can perform the (CRUD) operations i.e CREATE READ UPDATE and DELETE data with nodejs,mysql db and reactjs




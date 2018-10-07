# andpraSDE003

This project is to provide UI for users to do following:
- posts tab in navbar to view top 8 Expedia's fb posts
- quotes tab in navbar to view top 10 Mark Twain quotes from http://www.goodreads.com website
- login tab in navbar to authenticate a user to http://www.goodreads.com website


## Prereeuisites

- node 8.12.0
- npm 5.0.2
- python 3.5.0
- Make sure the following modules are available - flask, os, bs4, urllib.request, json. These modules can either be installed using pip (linux/windows) and easyinstall (windows)


## How to run

Clone the code into local and go to the current directory

Steps to start web server:

Go to ./flask folder in the project and run the command "python flaskapp.py". This starts the server on http://localhost:4300 . You can use the following endpoints to get raw json:
- http://localhost:4300/posts to get top 8 Expedia's Facebook posts
- http://localhost:4300/quotes to get top 10 Mark Twain quotes
	

Steps to start client:

From the current directory, run the following commands  to start the server on http://localhost:4200 :
- npm install
- ng serve


## Note
The login tab authenticates the user to http://www.goodreads.com but doesn't redirect the user back to the client application i.e., http://localhost:4200 . For more details on this, please take a look at my other repository http://github.com/
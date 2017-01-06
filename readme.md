# Assignment Tracker
Project Purpose: To understand the way Document Databases function, and how to interact with them.

Create a MongoDB application to store student assignment information, including the assignment name, the student's identity, their score on the assignment, and the date it was turned in. Only the identity and date completed are required.

###Tying it all together

When the page loads, display a list of all assignments that are in the database.

Create text inputs that will create assignments using the "/assignments" POST route.

###Create an "Assignment" Model
In your Node application, create a folder called `models`. Within that folder create a mongoose model named `assignments` and give it some properties that an assignment would have.

The minimum requirements are: assignment_name, student_name, score, and date_completed.

When creating your model it may be useful to see some [Mongoose Schema documentation](http://mongoosejs.com/docs/guide.html), and also to look at all of the [MongoDB Types](http://docs.mongodb.org/manual/reference/bson-types/)

###Create GET and POST routes for /assignments

Next you'll need to be able to access the assignments via an API. Use a combination of REST methods and Mongo methods to make a route for reading all assignments, and for creating new assignments.

*Hint:* Use req.body to access the data that is passed into the API. Also, be sure to test them with Postman client or cURL.

*Remember, in REST:*

GET: Get a resource from the database.
POST: Post a new resource to the
PUT: Put in a change to a resource already in the database.
DELETE: To remove, delete or archive a resource.

###Additional GET functionality

In addition, the route that reads all assignments should also accept an ID. When it receives the ID, it should be given to the mongoose function `Assignments.find` and return only that one. Otherwise if no ID is supplied, it should return all assignments.

##HARD MODE

Once you have that working add a button next to each assignment record. When the button is clicked, it will delete the record from the database using Ajax. You will need to create a DELETE route, and will need to use `Assignments.findByIdAndRemove`.  Feel free to break this into two steps (first find, then remove).

##PRO MODE

Finally, add another button to each record on the index that allows the user to update the database entry. This will also need to be done via Ajax. Updating should either be done in a modal window, or a series of inputs that shows/hides when the edit button is clicked. You will need to pass the assignment ID and the form data to a new PUT route, and to `Assignments.findByIdAndUpdate`, or alternatively, `Assignments.findById` followed by a `model.save()`.

&nbsp;
#Setting Up

###Make sure MongoDB is installed, and run mongod.
Run the command `mongod` from the terminal. If it fails, follow the [installation guide](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/).

###Install Robomongo
[Get it here.](https://robomongo.org/)

Use it. Love it.

**REVIEW**

How to install the module:
`npm install mongoose --save`

How to remove the module
`npm remove mongoose --save`

###Create a new NodeJS application.
Create a basic NodeJS application with an Express server. Set up a router called index.js (for your home page) and also a router called assignment.js (for your assignment routes).

###Get connected to your database.
Put the following into your server side server.js file.

``` JavaScript
var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
```

####What does this code do?
Line 1: requires MongoDB and lets us use the Mongoose functions.
Line 3: This is just a URL to the mongo database, which you set up earlier. The URL specifies a document store named `assignments` (this name is chosen by us)
Line 4: Connects to the database using the URL from line 3. It will return an object that gives us access to the client.
Line 6: The "on error" function allows us to see a console log when it can't connect.
Line 10: The final "once open" function lets us know when it's connected.


Completed Items
===============
[x] Create text inputs that will create assignments using the "/assignments" POST route.
[x]Create a folder called `models`. Within that folder create a mongoose model named `assignments` and give it some properties that an assignment would have.The minimum requirements are: assignment_name, student_name, score, and date_completed.
[x] Make a route for reading all assignments, and for creating new assignments.
[x] The route that reads all assignments should also accept an ID. When it receives the ID, it should be given to the mongoose function `Assignments.find` and return only that one. Otherwise if no ID is supplied, it should return all assignments.

Hard mode
=========
[x]Add a button next to each assignment record. When the button is clicked, it will delete the record from the database using Ajax. You will need to create a DELETE route, and will need to use `Assignments.findByIdAndRemove`.

Pro Mode
========
[x]Add another button to each record on the index that allows the user to update the database entry.
[x]Updating should either be done in a modal window, or a series of inputs that shows/hides when the edit button is clicked.

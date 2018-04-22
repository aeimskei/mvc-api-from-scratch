# Build a RESTful Designer API with an MVC architecture
Separate the concerns of a server-side application

## API for Designer Database

* GET /designers
* GET /designers/:id
* POST /designers
* PUT /designers/:id
* DELETE /designers/:id

## MVC Architecture 
Is about organizing code in a specific way. 

* Models: manage and work with all the data. For example, a model would interact with the designers array.
* Controllers: go between the model and the view. They process what the model gives them and prepares it for the view.
* View: The view is how the information is presented. Most often it's about a visual interface.
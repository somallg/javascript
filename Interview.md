# MEAN Stack Interview Question

# 1. What is an error-first callback?
* First parameter of the callback function is an err, or *null* if there is no error
* Example: 
	* `db.collection.save(function (err, data) { });
	* `Post.find({}, function (err, items) { } );`
	* `fs.readFile(path, function (err, data) { } );`

# 2. How can you avoid callback hell?
* **modulization**
* Use Promises

# 3. How can you listen on port 80 with Node?
* port 80 need sudo 

# 4. What's the event loop?
* V8 Engine
* libuv => loop constantly check for event

# 5. What tools can be used to assure consistent style?
* JSHint
* JSLint

# 6. What's the difference between operational and programmer errors?
* Operational errors are not bugs, but problem with the system, like *request timeout* or *hardware failure*
* Programmer error are actual bugs

# 7. Why npm shrinkwrap is useful?
* This version locks down the versions of a package's dependencies so that you can control exactly which verions of each dependency will be used when your package is installed

# 8. What's a stub? Name a use case
* Stubs are functions/programs that simulate the behaviours of components/modules

# 9. What's a test pyramid? How can you implement it when talking about HTTP APIs?
* A test pyramid describes that when writing test cases there should be a lot more low-level unit tests than high level end-to-end tests
* When talking about HTTP APIs, it may come down to this:
	* a lot of low-level unit tests for you models
	* less integration tests, where your test how your models interact with each other
	* a lot less acceptance tests, where you test the actual HTTP endpoints

# 10. What's your favourite HTTP framework and why?
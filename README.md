	This is intended to be a coding exercise done at home, at a time convenient to you, using the tools and libraries that you’re comfortable working with. We will be looking for clean, readable, correct code over code highly optimized for performance or a visually pleasing solution (a nice looking application would be a bonus). There is no limit to the amount of time you spend on it, but it is feasible to build a complete, working solution in a couple of hours.

	Problem Constraints

	Before looking at the problem itself, please read the following constraints:

	● The solution should be implemented as a single page application, using JavaScript, React, and Redux
	● Feel free to use Babel and any other preprocessors for CSS etc
	● It should go without saying that all code submitted should be created by you for the
	purpose of this exercise and not taken from other projects or other sources
	● Please provide the solution in the form of a zip file containing those files you would
	normally check in to version control (such as git)
	● You are free to use any general purpose open source frameworks. Please include these
	as dependencies in your build system of choice rather than extra files or references to
	external sites
	● You do not need to provide production artifacts, i.e. minification and other serving
	optimisations can be left out
	● You do not need to consider authentication or other security concerns
	● While the description below will mention a server, feel free to stub out any http requests with a local, asynchronous function, no actual server logic is required
	● Errors happen ­ networks go down, servers stop responding etc. Your solution needs to
	do something with errors (but it doesn't have to be pretty). If using local stubs, please include a way of inducing errors for testing this in the UI
	● Overall, the solution you submit should meet your standard for “production ready”, but
	we will not be looking for 100% test coverage or redundant documentation as a goal in itself

	Coding Challenge

	Multiple Choice Test

	Your challenge is to design and implement a simple multiple choice exam as a single page
	application. When the application is loaded, all questions should be retrieved from the server as a JSON document containing a list of questions. Each question has a question text, and a list of answers to choose from. The initial document does not contain the correct answer.

	The UI should allow for the user to navigate directly to any question in the set, as well as going to the next and previous question ­ only one question should be displayed at a time.

	When the user selects an answer from the choices given, the application should invoke the server with a POST containing a reference to the question and the answer given. The server should return the correct answer, and the UI finally update to reflect whether the answer given was the correct one (and if not, which one was).

	Each question can only be answered once, but questions can be answered in any order.

	Navigating to an already answered question will show the answer given as well as the correct one.

	After each question has been answered (regardless of order), a summary should be displayed showing the number of questions answered correctly (calculated on the client).

	As mentioned above, feel free to substituted server calls with local, asynchronous stub
	functions. The only two service calls required should be:

	● Get the list of questions (with alternatives)
	● Post the answer to a single question, retrieving the correct answer as a response
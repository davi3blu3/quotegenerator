// apiKey variable loaded via config.js file, set to .gitignore for security

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", true);
xhr.setRequestHeader("X-Parse-Application-Id", "quotegenerator");
xhr.setRequestHeader("X-Mashape-Key", apiKey);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
xhr.onload = function() {
	if (xhr.readyState === 4) {
	console.log(xhr.status);
	console.log(xhr.statusText);
	var responseObject = JSON.parse(xhr.responseText);

	var newQuote = responseObject.quote;
	var newAuthor = responseObject.author;
	var quoteField = document.getElementById('quote');
	var authorField = document.getElementById('author');
	quoteField.innerHTML = newQuote;
	authorField.innerHTML = newAuthor;

	}
}

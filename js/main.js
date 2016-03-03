// 'appId' and 'apiKey' variables loaded via config.js file, set to .gitignore for security

function newQuote() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", true);
	xhr.setRequestHeader("X-Parse-Application-Id", appId);
	xhr.setRequestHeader("X-Mashape-Key", apiKey);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send();
	xhr.onload = function() {
		if (xhr.readyState === 4) {
			var responseObject = JSON.parse(xhr.responseText);
			var newQuote = responseObject.quote;
			var newAuthor = responseObject.author;
			var quoteField = document.getElementById('quote');
			var authorField = document.getElementById('author');
			quoteField.innerHTML = newQuote;
			authorField.innerHTML = newAuthor;
		}
	}	
}

newQuote();

var button = document.getElementById('button');
button.addEventListener("click", newQuote, false);

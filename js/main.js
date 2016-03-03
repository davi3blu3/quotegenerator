/* ON HOLD AFTER 429 TOO MANY REQUESTS

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://quotes.rest/qod.json?category=funny", true);
xhr.send();
xhr.onload = function() {
	if (xhr.readyState === 4) {
	console.log(xhr.status);
	console.log(xhr.statusText);
	var responseObject = xhr.responseText;
	var newQuote = responseObject.contents.quotes[0].quote;
	var newAuthor = responseObject.contents.quotes[0].author;
	var quoteField = document.getElementById('quote');
	var authorField = document.getElementById('author');
	quoteField.innerHTML = newQuote;
	authorField.innerHTML = newAuthor;
	}
}

*/

var testObject = {
    "success": {
        "total": 1
    },
    "contents": {
        "quotes": [
            {
                "quote": "Although golf was originally restricted to wealthy, overweight Protestants, today it's open to anybody who owns hideous clothing.",
                "length": "129",
                "author": "Dave Barry",
                "tags": [
                    "clothing",
                    "fashion",
                    "funny",
                    "golf",
                    "humor",
                    "sports"
                ],
                "category": "funny",
                "date": "2016-03-03",
                "title": "Funny Quote of the day",
                "background": "https://theysaidso.com/img/bgs/joker_card.jpg",
                "id": "wpkXjtM5DgxjJIYwJyBNXweF"
            }
        ]
    }
}

// console.log(testObject); // Object {success: Object, contents: Object}
// console.log(testObject.success); // Object {total: 1}
// console.log(testObject.contents); // Object {quotes: Array[1]}
// console.log(testObject.contents.quotes); // [Object]
// console.log(testObject.contents.quotes[0]); //Object {quote: "Although golf was originally restricted to wealthy…y it's open to anybody who owns hideous clothing.", length: "129", author: "Dave Barry", tags: Array[6], category: "funny"…}
// console.log(testObject.contents.quotes[0].quote); // Although golf was originally restricted to wealthy, overweight Protestants, today it's open to anybody who owns hideous clothing.
// console.log(testObject.contents.quotes[0].author); // Dave Barry
var newQuote = testObject.contents.quotes[0].quote;
var newAuthor = testObject.contents.quotes[0].author;
var quoteField = document.getElementById('quote');
var authorField = document.getElementById('author');
quoteField.innerHTML = newQuote;
authorField.innerHTML = newAuthor;


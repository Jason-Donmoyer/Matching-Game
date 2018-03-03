/*
 * Create a list that holds all of your cards
 */

// Selects the ul element to append cards to 
let deck = document.querySelector(".deck");


// game size variables
let gameWidth = 4;
let gameHeight = 4;

// match variables
let firstCard = null;
let secondCard = null;
let checkTimeout = null;
let matches = 0;

// creates the card array
let cardArray = [
				"fa-diamond",
				"fa-paper-plane-o",
				"fa-anchor",
				"fa-bolt",
				"fa-cube",
				"fa-leaf",
				"fa-bicycle",
				"fa-bomb",
				"fa-diamond",
				"fa-paper-plane-o",
				"fa-anchor",
				"fa-bolt",
				"fa-cube",
				"fa-leaf",
				"fa-bicycle",
				"fa-bomb"
				];


function getCards(array) {
	let shuffledArray = shuffle(array);
	let cards = [];

	for (let i = 0; i < shuffledArray.length; i++) {
		
		let card = document.createElement('li');
		card.classList.add('card');
		let item = document.createElement('i');
		item.classList.add('fa')
		item.classList.add(shuffledArray[i]);
		card.appendChild(item);
		cards.push(card);

		card.addEventListener('click', (e) => {
			let card = e.target;
			//alert("you clicked card number" + [i]);
			card.setAttribute('class', 'card show');
			card.setAttribute('style', '::before');
			

			if (firstCard === null) {
				firstCard = card;
			} else if (firstCard === card) {
				firstCard = null;
			} else if (secondCard === null) {
				secondCard = card;
				

				//checkMatch();
			}
		});
	}

	return cards;
		
}

// function checkMatch() {
// 	if (firstCard.firstElementChild.classList === secondCard.firstElementChild.classList) {
// 		firstCard.removeAttribute('class');
// 		secondCard.removeAttribute('class');
// 		firstCard.setAttribute('class', 'card match');
// 		secondCard.setAttribute('class', 'card match');
// 	} else {
// 		firstCard.removeAttribute('class');
// 		secondCard.removeAttribute('class');
// 		firstCard.setAttribute('class', 'card');
// 		secondCard.setAttribute('class', 'card');
// 	}

// 	firstCard = null;
// 	secondCard = null;
// 	checkTimeout = null;
// }

function dealCards(array) {
	newDeck = getCards(array);

	for (i = 0; i < newDeck.length; i++) {
		deck.appendChild(newDeck[i]);
	}
}
// function createCard(array, posX, posY) {
// 	let card = document.createElement('li');
// 	card.classList.add('card');
// 	let item = document.createElement('i');
// 	item.classList.add('fa' + shuffledArray[i]);
// 	card.appendChild(item);
// 	deck.appendChild(card);
// }

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

dealCards(cardArray);

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

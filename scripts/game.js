const cards = document.querySelectorAll(".flip-card");

window.onload = function() {
    for(let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("flip");
    }

    setTimeout(() => {
        for(let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("flip");
        }
    }, 600);
};

let clickedCards = [];
let wonCards = [];

for (let card of cards) {
    card.addEventListener("click", () => displayCard(card));
}

function displayCard(cardToDisplay) {
    const clickedBefore = clickedCards.includes(cardToDisplay);
    const wonBefore = wonCards.includes(cardToDisplay);
    if (clickedCards.length < 2 && !clickedBefore && !wonBefore) {
        cardToDisplay.classList.toggle("flip");
        clickedCards.push(cardToDisplay);
        
        if (clickedCards.length === 2) {
            const firstID = clickedCards[0].id;
            const secondID = clickedCards[1].id;

            setTimeout(() => {
                if (firstID === secondID) {
                    wonCards = wonCards.concat(clickedCards);
                    checkWin();
                } else {
                    for (let clickedCard of clickedCards) {
                        clickedCard.classList.toggle("flip");
                    }
                }
                clickedCards = [];
            }, 900);
        }
    }
}

function checkWin() {
    if (wonCards.length === cards.length) {
        document.getElementById("poopup").style.display = "flex";
    }
}




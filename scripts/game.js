const cards = document.querySelectorAll(".flip-card");
let clickedCards = [];
let wonCards = [];


for (let card of cards) {
    console.log(card);
    card.addEventListener("click", () => displayCard(card));
}

function displayCard(cardToDisplay) {
    const clickedBefor = clickedCards.includes(cardToDisplay);
    const wonBefor = wonCards.includes(cardToDisplay);
    if (clickedCards.length < 2 && !clickedBefor && !wonBefor) {
        cardToDisplay.classList.toggle("flip");
        clickedCards.push(cardToDisplay);
        if (clickedCards.length === 2) {

            // const firstCardColor = getComputedStyle(clickedCards[0]).backgroundColor;
            // const secondCardColor = getComputedStyle(clickedCards[1]).backgroundColor;
            const firstID = clickedCards[0].id;
            const secondID = clickedCards[1].id;

            setTimeout(() => {
                if (firstID === secondID) {
                    wonCards = wonCards.concat(clickedCards)
                    checkWin(cards);
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
function checkWin(allCards) {
    wonStatus = true;
    for (let card of allCards) {
        if (card.classList.contains("flip")) {
            wonStatus = false;
            break;
        }
    }
    if (wonStatus) { alert("Game Cleared!! You Won !!!"); }
}
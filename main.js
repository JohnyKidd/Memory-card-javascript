// create the playfield and the cards
const cardNumber = 12

const playArea = document.querySelector(".cardGrid")

for (let i = 0; i < cardNumber; i++){
    const card = document.createElement("div")
    card.className="card"
    playArea.appendChild(card)
}

//selecting the cards for further actions
const deck = document.querySelectorAll('.card')

//color palette
const colors = ["red", "blue", "green", "purple", "black", "yellow","red", "blue", "green", "purple", "black", "yellow"]

console.log(deck)

//iterate the cards for game logic and animation
for (let i = 0; i < deck.length; i++){
    deck[i].addEventListener("click", ()=>{
        deck[i].className = "cardClick"
        deck[i].style.background = colors[i]
    })
}
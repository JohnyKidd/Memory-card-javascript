//selecting the cards
const deck = document.querySelectorAll('.card')

//iterate the cards for game logic and animation
for (let i = 0; i < deck.length; i++){
    deck[i].addEventListener("click", ()=>{
        deck[i].className = "cardClick"
        console.log("clicked")
    })
    deck[i].addEventListener("mouseleave", ()=>{
        deck[i].className = "card"
        console.log("left")
    })
}
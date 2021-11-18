// variables for game logic
selectedCard1 = ""
card1ID = ""
card2ID = ""
selectedCard2 = ""
haveSelected = false

// shuffle function for arrays
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

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
shuffle(colors)
pairNumber = colors.length

//iterate the cards for game logic and animation
for (let i = 0; i < deck.length; i++){
    deck[i].addEventListener("click", ()=>{
        deck[i].className = "cardClick"
        deck[i].id = i
        console.log(deck[i].id)
        deck[i].style.background = colors[i]
        deck[i].name = colors[i]

        if (!haveSelected){
            haveSelected = true
            selectedCard1 = deck[i].name
            card1ID = deck[i].id
            console.log(selectedCard1)
        }
        else{
            haveSelected = false
            selectedCard2 = deck[i].name
            card2ID = deck[i].id
            console.log(selectedCard2)
            
            if (selectedCard1 === selectedCard2){
                deck[card1ID].style.background = "white"
                deck[card1ID].style.pointerEvents = "none"
                deck[card2ID].style.background = "white"
                deck[card2ID].style.pointerEvents = "none"
                pairNumber-=1
                if (pairNumber<=0){console.log("winner")}
            }
            else{
                setTimeout(() => {
                    deck[card1ID].style.backgroundImage = "url('assets/cardBack.png')"
                    deck[card2ID].style.backgroundImage = "url('assets/cardBack.png')"
                    deck[card1ID].className = "card"
                    deck[card2ID].className = "card"
                }, 750);
            }
        }
    })
}
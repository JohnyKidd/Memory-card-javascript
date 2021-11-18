// variables for game logic
selectedCard1 = ""
card1ID = ""
card2ID = ""
selectedCard2 = ""
haveSelected = false
pairNumber = 6

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

//iterate the cards for game logic and animation
for (let i = 0; i < deck.length; i++){
    deck[i].addEventListener("click", ()=>{
        deck[i].className = "cardClick"
        deck[i].id = i
        deck[i].style.background = colors[i]
        deck[i].name = colors[i]

        // selecting the cards
        if (!haveSelected){
            haveSelected = true
            selectedCard1 = deck[i].name
            card1ID = deck[i].id
        }
        else{
            haveSelected = false
            selectedCard2 = deck[i].name
            card2ID = deck[i].id
            
            // matching
            if (selectedCard1 === selectedCard2){
                deck[card1ID].style.background = "white"
                deck[card1ID].style.pointerEvents = "none"
                deck[card2ID].style.background = "white"
                deck[card2ID].style.pointerEvents = "none"
                pairNumber-=1

                // win condition
                if (pairNumber<=0){
                    playArea.innerHTML = ""
                    playArea.className = "gameWon"
                    const winDiv = document.createElement("div")
                    playArea.appendChild(winDiv)
                    const winText = document.createElement("h1")
                    winText.innerHTML = "You have won this round!"
                    winText.style.color = "white"
                    winDiv.appendChild(winText)
                    const restartButton = document.createElement("button")
                    restartButton.innerHTML = "new round"
                    restartButton.className = "restartButton"
                    winDiv.appendChild(restartButton)

                    restartButton.addEventListener("click", ()=>{
                        window.location.reload()
                    })
                }

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
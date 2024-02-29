console.log('It should be working');
let music = new Audio("./Resource/music.mp3")
let audioTurn = new Audio("./Resource/ting.mp3")
let gamerover = new Audio("./Resource/gameover.mp3")
let playerTurn = "X"
let isgameover = false;
let round = 1;
//Function to change the turn

const changeTurn = () => {
  return playerTurn == "X"? "O" : "X"
}

//Function for who won
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName("symbol");
    let wins = [
        [0, 1, 2, 6, 4, 0],
        [3, 4, 5, 6, 16, 0],
        [6, 7, 8, 6, 26, 0],
        [0, 3, 6, -4, 15, 90],
        [1, 4, 7, 6, 15, 90],
        [2, 5, 8, 16, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 7, 15, 135],
    ]
    wins.forEach(e=>{
        
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}   

//Game Logic
let boxes = document.getElementsByClassName("box");
let gameInfo = document.getElementsByClassName("info")[0]


console.log(Array.from(boxes));
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".symbol");
    
    element.addEventListener("click",()=>{
        if(boxtext.innerText == ""){
            boxtext.innerText = playerTurn
            playerTurn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                gameInfo.innerText = "Its " + playerTurn + " Turn Now"
            }
        }
    })
})

// Logic for new game
let newGame = document.getElementById("reset");
let roundElement = document.getElementById("round")
newGame.addEventListener("click", ()=>{
    let boxtext = document.getElementsByClassName("symbol");
    Array.from(boxtext).forEach(e=>{
        e.innerText = ""
    })
    let gameInfo = document.getElementsByClassName("info")[0]
    gameInfo.innerText = "Its " + playerTurn + " Turn Now"
    round++
    isgameover = false;
    roundElement.innerText = `Round  ${round} :`
    playerTurn = "X"
        gameInfo.innerText = "Its " + playerTurn + " Turn Now"
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px"
        document.querySelector(".line").style.width = "0";
    
})
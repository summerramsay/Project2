const buttonR = document.querySelector('#R');
const buttonP = document.querySelector('#P');
const buttonS = document.querySelector('#S');

//randomNumber = Math.floor(Math.random() * 3)
let winCount = 0
let loseCount = 0
let tieCount = 0

let ans = buttonR.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 0) {
        let comp = ans
        if(comp === ans) {
            tieCount++
        }   
    } else if(randomNumber === 1) {
        loseCount++
    } else if(randomNumber === 2) {
        winCount++
    }
    let h2Wins = document.querySelector('#W');
    h2Wins.innerText = ("Wins: ") + winCount
    
    let h2Ties = document.querySelector('#T');
    h2Ties.innerText = ("Ties: ") + tieCount

    let h2Lose = document.querySelector('#L');
    h2Lose.innerText = ("Losses: ") + loseCount
})
let ansTwo = buttonP.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 0) {
        winCount++
        //alert("You win comp chose r")
    } else if(randomNumber === 1) {
        let comp = ansTwo
        if(comp === ansTwo) {
            tieCount++
            //alert("Tie")
        }
    } else if(randomNumber === 2) {
        loseCount++
        //alert("You lose comp chose s")
    }
    let h2Element = document.querySelector('h2');
    h2Element.innerText = ("Wins: ") + winCount

    let h2Ties = document.querySelector('#T');
    h2Ties.innerText = ("Ties: ") + tieCount

    let h2Lose = document.querySelector('#L');
    h2Lose.innerText = ("Losses: ") + loseCount
})
let ansThree = buttonS.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 0) {
        loseCount++
        //alert("You lose comp chose r")
    } else if(randomNumber === 1) {
        winCount++
        //alert("You win comp chose p")
    } else if(randomNumber === 2) {
        let comp = ansThree
        if(comp === ansThree) {
            tieCount++
            //alert("Tie")
        }
    }
    let h2Element = document.querySelector('h2');
    h2Element.innerText = ("Wins: ") + winCount

    let h2Ties = document.querySelector('#T');
    h2Ties.innerText = ("Ties: ") + tieCount

    let h2Lose = document.querySelector('#L');
    h2Lose.innerText = ("Losses: ") + loseCount
})



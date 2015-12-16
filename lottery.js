var amount = 10;
var yourNumber = document.getElementById("your-number"); 
var totalAmount = 0;
var wins = 0;
var losses = 0;

function runGame () {
    var playerNum = document.getElementById("player-number").value;
    amount--;
    document.getElementById("amount").innerHTML = amount;
    var lottery = Math.floor(Math.random()*10+1);
    document.getElementById("lottery").innerHTML = lottery;
    if(playerNum == lottery) {
        totalAmount += 10;
        document.getElementById("total-amount").innerHTML = totalAmount;
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("Congratulations you won $10");
    }
    else {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("I'm sorry bro, go to ride bicicle");
    }
    
    document.getElementById("lottery").innerHTML = "";
    document.getElementById("player-number").value = "";
}

document.getElementById("button").addEventListener("click", runGame)
var legends = new Array("Bloodhound", "Gibraltar", "Lifeline", "Pathfinder", "Wraith", "Bangalore", "Caustic", "Mirage", "Octane", "Player Choice");
var locations = new Array("Slum Lakes", "Artillery", "Relay", "Cascades", "The Pit", "Runoff", "Bunker", "Airbase", "Farm", "Wetlands", "Swamps", "Hydro Dam", "Bridges", "Repulsor", "Water Treatment", "Market", "Skull Town", "Thunderdome", "Drop Ship", "Player Choice");

function randomize(){
	//random the players and drop location
	var randLeg1 = Math.floor(Math.random()*10);
	var randLeg2 = Math.floor(Math.random()*10);
	var randLeg3 = Math.floor(Math.random()*10);
	var randLoc = Math.floor(Math.random()*21);
	//make sure there are no duplicate legends randomed, "Player Choice" can be duped.
	if(randLeg1 == randLeg2 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
		while(randLeg1 == randLeg2){
			randLeg2 = Math.floor(Math.random()*10);
		}
	}
	if(randLeg1 == randLeg3 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
		while(randLeg1 == randLeg3){
			randLeg3 = Math.floor(Math.random()*10);
		}
	}
	if(randLeg2 == randLeg3 && (legends[randLeg2].localeCompare("Player Choice") != 0)){
		while(randLeg2 == randLeg3){
			randLeg3 = Math.floor(Math.random()*10);
		}
	}

	//check how many players to random and output
	if(document.getElementById("onePlayer").checked){
		document.getElementById("player1").innerHTML = "Player 1: "+legends[randLeg1];
		document.getElementById("player2").innerHTML = "";
		document.getElementById("player3").innerHTML = "";
		document.getElementById("dropLoc").innerHTML = "Drop location: "+locations[randLoc];
	}
	if(document.getElementById("twoPlayer").checked){
		document.getElementById("player1").innerHTML = "Player 1: "+legends[randLeg1];
		document.getElementById("player2").innerHTML = "Player 2: "+legends[randLeg2];
		document.getElementById("player3").innerHTML = "";
		document.getElementById("dropLoc").innerHTML = "Drop location: "+locations[randLoc];
	}
	if(document.getElementById("threePlayer").checked){
		document.getElementById("player1").innerHTML = "Player 1: "+legends[randLeg1];
		document.getElementById("player2").innerHTML = "Player 2: "+legends[randLeg2];
		document.getElementById("player3").innerHTML = "Player 3: "+legends[randLeg3];
		document.getElementById("dropLoc").innerHTML = "Drop location: "+locations[randLoc];
	}
}

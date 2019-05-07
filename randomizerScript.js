//array to hold all possible legends
var legends = new Array("Bloodhound", "Gibraltar", "Lifeline", "Pathfinder", "Wraith", "Bangalore", "Caustic", "Mirage", "Octane", "Player Choice");
//array to hold major drop location
var locations = new Array("Slum Lakes", "Artillery", "Relay", "Cascades", "The Pit", "Runoff", "Bunker", "Airbase", "Farm", "Wetlands", "Swamps", "Hydro Dam", "Bridges", "Repulsor", "Water Treatment", "Market", "Skull Town", "Thunderdome", "Drop Ship", "Player Choice");
//array to hold all the common weapons
var weapons = new Array("Longbow", "G7 Scout", "Triple Take", "Hemlok", "R-301", "Flatline", "Havoc", "Spitfire", "Devotion", "R-99", "Prowler", "Alternator", "EVA-8", "Peacekeeper", "Mozambique", "Wingman", "RE-45", "P2020");
//string to hold output message
var playerOneOutput = "";
var playerTwoOutput = "";
var playerThreeOutput = "";

function randomize(){

	//random the players and drop location
	var randLeg1 = Math.floor(Math.random()*10);
	var randLeg2 = Math.floor(Math.random()*10);
	var randLeg3 = Math.floor(Math.random()*10);
	//var randLoc = Math.floor(Math.random()*20);
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
	//make sure that each player does not have duplicate weapons



	//check how many players to random and output
	if(document.getElementById("onePlayer").checked){
		playerOneOutput = "Player 1: "+legends[randLeg1];
		playerTwoOutput = "";
		playerThreeOutput = "";
		if(document.getElementById("randomizeLoadout").checked){
			playerOneOutput += randWeapons();
		}
		printLeg();
		checkAndPrintLoc();
	}
	if(document.getElementById("twoPlayer").checked){
		playerOneOutput = "Player 1: "+legends[randLeg1];
		playerTwoOutput = "Player 2: "+legends[randLeg2];
		playerThreeOutput = "";
		if(document.getElementById("randomizeLoadout").checked){
			playerOneOutput += randWeapons();
			playerTwoOutput += randWeapons();
		}
		printLeg();
		checkAndPrintLoc();
	}
	if(document.getElementById("threePlayer").checked){
		playerOneOutput = "Player 1: "+legends[randLeg1];
		playerTwoOutput = "Player 2: "+legends[randLeg2];
		playerThreeOutput = "Player 3: "+legends[randLeg3];
		if(document.getElementById("randomizeLoadout").checked){
			playerOneOutput += randWeapons();
			playerTwoOutput += randWeapons();
			playerThreeOutput += randWeapons();
		}
		checkAndPrintLoc();
		printLeg();
	}
}

function randWeapons(){
	var randWep1 = Math.floor(Math.random()*18);
	var randWep2 = Math.floor(Math.random()*18);
	while(randWep1 == randWep2){
		randWep2 = Math.floor(Math.random()*18);
	}
	return " | "+weapons[randWep1]+", "+weapons[randWep2];
}

function printLeg(){
	document.getElementById("player1").innerHTML = playerOneOutput;
	document.getElementById("player2").innerHTML = playerTwoOutput;
	document.getElementById("player3").innerHTML = playerThreeOutput;
}

function checkAndPrintLoc(){
	var randLoc = Math.floor(Math.random()*20);
	if(document.getElementById("randomizeLocation").checked){
		document.getElementById("dropLoc").innerHTML = "Drop location: "+locations[randLoc];
	}
}

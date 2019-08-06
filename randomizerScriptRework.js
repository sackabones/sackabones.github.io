//array to hold all possible legends
var legends = new Array("Player Choice", "Bloodhound", "Gibraltar", "Lifeline", "Pathfinder", "Wraith", "Bangalore", "Caustic", "Mirage", "Octane", "Wattson");
//array to hold major drop location
var locations = new Array("Slum Lakes", "Artillery", "Relay", "Containment", "The Pit", "Runoff", "Bunker", "Airbase", "Farm", "Wetlands", "Swamps", "Hydro Dam", "The Cage", "Repulsor", "Water Treatment", "Market", "Skull Town", "Thunderdome", "Drop Ship", "Nesting Grounds", "Player Choice");
//array to hold all the common weapons
var weapons = new Array("Longbow", "G7 Scout", "Triple Take", "Hemlok", "R-301", "Flatline", "Havoc", "Spitfire", "Devotion", "R-99", "Prowler", "Alternator", "EVA-8", "Peacekeeper", "Mozambique", "Wingman", "RE-45", "P2020");
//string to hold output message
var playerOneOutput = "";
var playerTwoOutput = "";
var playerThreeOutput = "";
var randLeg1;
var randLeg2;
var randLeg3;
var lastChecked;

function randomize(){
	//check the number of players checked
	var numberOfPlayers = 0;
	playerOneOutput = "";
	playerTwoOutput = "";
	playerThreeOutput = "";
	if(document.getElementById("onePlayer").checked){
			numberOfPlayers = 1;	
	}
	if(document.getElementById("twoPlayer").checked){
			numberOfPlayers = 2;
	}
	if(document.getElementById("threePlayer").checked){
			numberOfPlayers = 3;
	}
	switch(numberOfPlayers){
		case 1:
			//one player selected
			//check what fields are checked [legends][loadout] and random them
			if(document.getElementById("randomizeLegend").checked){
				//randomize the legend
				randLeg1 = Math.floor(Math.random()*legends.length);
				//print the output
				playerOneOutput = "Player 1: "+legends[randLeg1];
				playerTwoOutput = "";
				playerThreeOutput = "";
			}
			if(document.getElementById("randomizeLoadout").checked){
				playerOneOutput += randWeapons();
			}
			break;
		case 2:
			//two players selected
			//check what fields are checked [legends][loadout] and random them
			if(document.getElementById("randomizeLegend").checked){
				//randomize the legend
				randLeg1 = Math.floor(Math.random()*legends.length);
				randLeg2 = Math.floor(Math.random()*legends.length);
				//check for dup legend rolls
				if(randLeg1 == randLeg2 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
					while(randLeg1 == randLeg2){
						randLeg2 = Math.floor(Math.random()*legends.length);
					}
				}
				//print the output
				playerOneOutput = "Player 1: "+legends[randLeg1];
				playerTwoOutput = "Player 2: "+legends[randLeg2];
				playerThreeOutput = "";
			}
			if(document.getElementById("randomizeLoadout").checked){
				playerOneOutput += randWeapons();
				playerTwoOutput += randWeapons();
			}
			break;
		case 3:
			//three plaers selected
			//check what fields are checked [legends][loadout] and random them
			if(document.getElementById("randomizeLegend").checked){
				//randomize the legend
				randLeg1 = Math.floor(Math.random()*legends.length);
				randLeg2 = Math.floor(Math.random()*legends.length);
				randLeg3 = Math.floor(Math.random()*legends.length);
				//check for dup legend rolls
				if(randLeg1 == randLeg2 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
					while(randLeg1 == randLeg2){
						randLeg2 = Math.floor(Math.random()*legends.length);
					}
				}
				if(randLeg1 == randLeg3 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
					while(randLeg1 == randLeg3){
						randLeg3 = Math.floor(Math.random()*legends.length);
					}
				}
				if(randLeg2 == randLeg3 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
					while(randLeg2 == randLeg3){
						randLeg3 = Math.floor(Math.random()*legends.length);
					}
				}
				//print the output
				playerOneOutput = "Player 1: "+legends[randLeg1];
				playerTwoOutput = "Player 2: "+legends[randLeg2];
				playerThreeOutput = "Player 3: "+legends[randLeg3];
			}
			if(document.getElementById("randomizeLoadout").checked){
				playerOneOutput += randWeapons();
				playerTwoOutput += randWeapons();
				playerThreeOutput += randWeapons();
			}
			break;
		default:
			playerOneOutput = "";
			playerTwoOutput = "";
			playerThreeOutput = "";
	}
	numberOfPlayers = 0;
	printLeg();
	checkAndPrintLoc();
}

function randWeapons(){
	var randWep1 = Math.floor(Math.random()*weapons.length);
	var randWep2 = Math.floor(Math.random()*weapons.length);
	var randWep2 = Math.floor(Math.random()*weapons.length);
	while(randWep1 == randWep2){
		randWep2 = Math.floor(Math.random()*weapons.length);
	}
	return " | "+weapons[randWep1]+", "+weapons[randWep2];
}

function printLeg(){
	//set the output div to visible
	document.getElementById("outputDiv").style.display = "block";
	//print the legends
	document.getElementById("player1").innerHTML = playerOneOutput;
	document.getElementById("player2").innerHTML = playerTwoOutput;
	document.getElementById("player3").innerHTML = playerThreeOutput;
}

function checkAndPrintLoc(){
	var randLoc = Math.floor(Math.random()*locations.length);
	if(document.getElementById("randomizeLocation").checked){
		document.getElementById("dropLoc").innerHTML = "Drop location: "+locations[randLoc];
	}
	else{
		document.getElementById("dropLoc").innerHTML = "";
	}
}

function checkAndPrintLegs(){
	var randLeg1 = Math.floor(Math.random()*legends.length);
	var randLeg2 = Math.floor(Math.random()*legends.length);
	var randLeg3 = Math.floor(Math.random()*legends.length);
	if(randLeg1 == randLeg2 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
		while(randLeg1 == randLeg2){
			randLeg2 = Math.floor(Math.random()*legends.length);
		}
	}
	if(randLeg1 == randLeg3 && (legends[randLeg1].localeCompare("Player Choice") != 0)){
		while(randLeg1 == randLeg3){
			randLeg3 = Math.floor(Math.random()*legends.length);
		}
	}
	if(randLeg2 == randLeg3 && (legends[randLeg2].localeCompare("Player Choice") != 0)){
		while(randLeg2 == randLeg3){
			randLeg3 = Math.floor(Math.random()*legends.length);
		}
	}
}

function legCheck(){
	//check if the same radio is clicked, if so, unclick it
	if(document.getElementById("onePlayer").checked){
		//do something then change lastChecked
		if(document.getElementById("onePlayer").id === lastChecked){
			document.getElementById("onePlayer").checked = false;
			lastChecked = "";
		}
		else{
			lastChecked = document.getElementById("onePlayer").id;
		}
	}
	if(document.getElementById("twoPlayer").checked){
		if(document.getElementById("twoPlayer").id === lastChecked){
			document.getElementById("twoPlayer").checked = false;
			lastChecked = "";
		}
		else{
			lastChecked = document.getElementById("twoPlayer").id;
		}
	}
	if(document.getElementById("threePlayer").checked){
		if(document.getElementById("threePlayer").id === lastChecked){
			document.getElementById("threePlayer").checked = false;
			lastChecked = "";
		}
		else{
			lastChecked = document.getElementById("threePlayer").id;
		}
	}
}
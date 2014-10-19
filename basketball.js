var prompt = require('sync-prompt').prompt;

///////////////////////////////////PART 2////////////////////////////////
var request = require('request');
request('http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-06-15-heat-spurs.json', function (error, response, body) {

var newStats=[];
newStats=JSON.parse(body);

//var nbaStats=[{"position": "F", "freeThrowsAttempted": 9, "defensiveRebounds": 9, "offensiveRebounds": 1, "threesMade": 3, "turnovers": 1, "freeThrowsMade": 8, "assists": 5, "threesAttempted": 9, "fieldGoalsMade": 10, "fieldGoalsAttempted": 21, "name": "L. James", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "R. Lewis", "steals": 0, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 7, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 5, "fieldGoalsMade": 6, "fieldGoalsAttempted": 14, "name": "C. Bosh", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 4, "defensiveRebounds": 3, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 3, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 4, "fieldGoalsAttempted": 12, "name": "D. Wade", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 4, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 4, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 1, "fieldGoalsAttempted": 8, "name": "R. Allen", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "S. Battier", "steals": 1, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 5, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "C. Andersen", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "N. Cole", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "U. Haslem", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 3, "defensiveRebounds": 1, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 1, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 4, "fieldGoalsAttempted": 7, "name": "M. Beasley", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Chalmers", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "J. Jones", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "T. Douglas", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 8, "offensiveRebounds": 2, "threesMade": 3, "turnovers": 3, "freeThrowsMade": 5, "assists": 2, "threesAttempted": 4, "fieldGoalsMade": 7, "fieldGoalsAttempted": 10, "name": "K. Leonard", "steals": 1, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 6, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 5, "fieldGoalsAttempted": 10, "name": "T. Duncan", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 8, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 2, "freeThrowsMade": 0, "assists": 6, "threesAttempted": 3, "fieldGoalsMade": 2, "fieldGoalsAttempted": 7, "name": "B. Diaw", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 0, "fieldGoalsAttempted": 5, "name": "D. Green", "steals": 2, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 1, "fieldGoalsMade": 7, "fieldGoalsAttempted": 18, "name": "T. Parker", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 4, "offensiveRebounds": 0, "threesMade": 3, "turnovers": 2, "freeThrowsMade": 4, "assists": 4, "threesAttempted": 6, "fieldGoalsMade": 6, "fieldGoalsAttempted": 11, "name": "M. Ginobili", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "T. Splitter", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 5, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 8, "fieldGoalsMade": 6, "fieldGoalsAttempted": 10, "name": "P. Mills", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "M. Bonner", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Belinelli", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "J. Ayres", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "C. Joseph", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 2, "defensiveRebounds": 0, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "A. Baynes", "steals": 0, "team": "Spurs"} ]; 

//Final Score
var finalScore=function(arr){
  var sumOne=0;
  var sumTwo=0;
  var twoPointersSpurs=0;
  var twoPointersHeat=0;
  var threeTotal=0;
  var freeTotal=0;
  var three=0;
  var free=0;
  var showArrOne=[];
  arr.forEach(function(entry){
    if((entry.team==="Spurs")||(entry.team==="Clippers")){
      	threeTotal+= entry.threesMade;
      	freeTotal+=entry.freeThrowsMade;
        twoPointersSpurs+=((entry.fieldGoalsMade - entry.threesMade));
    }
    else if((entry.team==="Heat")||(entry.team==="Thunder")){
        three+= entry.threesMade;
      	free+= entry.freeThrowsMade;
        twoPointersHeat+=((entry.fieldGoalsMade - entry.threesMade));
    }
		sumOne=(((threeTotal)*3)+((freeTotal))+((twoPointersSpurs)*2));
        sumTwo=(((three)*3)+((free))+((twoPointersHeat)*2));
  });
		showArrOne.push({"The Heat final score is":sumTwo},{"The Spurs final score is":sumOne});
    	//showArrOne.push({"The Thunder final score is":sumTwo},{"The Clippers final score is":sumOne});
  return showArrOne;
}; 
var please=finalScore(newStats);
console.log(please);
console.log("=====");

//Player With Highest Percentage of Points From Three Pointers
var highestPercentThrees= function(arr){
 var percent=0;
 var precentHolder=0;
 var nameOfThrees;
 var pname="";
  arr.forEach(function(entry){
      if((((entry.threesMade)*3)>10)){
			 percent=((entry.threesMade) / (entry.threesAttempted) *100);
			 if(percent>precentHolder){
			 	nameOfThrees=entry.name;
			 }
    }
  });

  console.log("* Player with highest percentage of points from three pointers:");
  return nameOfThrees;
};

var percentageOfThrees= highestPercentThrees(newStats);
console.log(percentageOfThrees);

//Team With Most Rebounds
var mostRebounds= function(arr){
  var dReboundOneSum=0;
  var dReboundTwoSum=0;
  var oReboundOneSum=0;
  var oReboundTwoSum=0;
  var reboundSumOne=0;
  var reboundSumTwo=0;
  var showArrThree=[];  
  arr.forEach(function(entry){
    if((entry.team==="Spurs")||(entry.team==="Clippers")){
      dReboundOneSum+=entry.defensiveRebounds;
      oReboundOneSum+=entry.offensiveRebounds;
    }
    else if( (entry.team==="Heat")||(entry.team==="Thunder") ){
      dReboundTwoSum+=entry.defensiveRebounds;
      oReboundTwoSum+=entry.offensiveRebounds;
    }
  });
  reboundSumOne=dReboundOneSum+oReboundOneSum;
  reboundSumTwo=dReboundTwoSum+oReboundTwoSum;
  
  if(reboundSumOne>reboundSumTwo){
    showArrThree.push({"* Team with most rebounds: Spurs with":reboundSumOne});
  }
  else if(reboundSumOne<reboundSumTwo){
    showArrThree.push({"* Team with most rebounds: Heat with":reboundSumTwo});
  }
	return showArrThree;
};
var rebounds= mostRebounds(newStats);
console.log(rebounds);

//Player filter
function isNotAGaurd(element) {
  return element = "G";
};

//Non Guard Player With Most Assists
var mostAssists= function(arr){
  var mostAssistCount=0;
  var assistArr=[];
  var showArrFour=[];
  arr.filter(isNotAGaurd);
  arr.forEach(function(entry){
  	
    if((entry.assists>0)){
    	assistArr.push(entry);
    }
  });
  mostAssistCount=Math.max.apply(Math,assistArr.map(function(o){return o.assists;}));
  assistArr.forEach(function(entry){
    if(mostAssistCount===entry.assists){
      showArrFour.push({"* Non guard player with most assists":entry.name},{"with":mostAssistCount});
    }	
  });
	return showArrFour;
};

var assists= mostAssists(newStats);
console.log(assists);

//Players With More Turnovers Than Assists
var moreTurnOvers= function(arr){
  var turnOver=[];
    arr.forEach(function(entry){
    if(entry.turnovers>entry.assists){
    	turnOver.push(entry.name);
    }
  });
  console.log("* Players with more turnovers than assists:");
  return turnOver;
};
var messinUp= moreTurnOvers(newStats);
console.log(messinUp);

///////////////////////////////////PART 3////////////////////////////////
//Heat vs Spurs and Thunder vs Clippers, Retrieve JSON from URL
})
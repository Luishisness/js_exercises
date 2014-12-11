js_exercises
============

applied internet tech-Express - Chapter 5 Exercises and Basketball Stats



Overview
Description
exercises-ch05.js - Solve two exercises from Chapter 5 in Eloquent JavaScript, 2nd Edition.

basketball.js - Print out a report analyzing basketball games based off of JSON data. There are two parts to this file:

An initial version that works off of a JSON string within your code.
An iteration that works off of remote urls and additional data.
See the sample output at the end of these instructions.

Submission Process
You will be given access to a private repository on GitHub. It will contain two files, exercises-ch05.js and basketball.js.

The final version of your assignment should be in GitHub, but a submission should still be sent via NYU Classes.

Push your changes to the homework repository on GitHub.
Add the URL of the repository to your assignment submission in NYU Classes.
(6 points) Make at Least 4 Commits
Commit multiple times throughout your development process.
Make at least 3 separate commits - (for example, one option may be to make one commit per part in the homework).
Regarding the Due Date
Although code is in GitHub, date of submission in NYU Classes will be used to determine late/not late (see submission process below).
Commits later than that date will be handled on a case-by-case basis.
24 hour grace period where NYU Classes is still open.
After that, no late homeworks will be accepted.
Part 1 - Chapter 5 Exercises
The solutions to the following problems can go in the same file - exercises-ch05.js:

(1 point) Flattening
Solve the problem, Flattening, on page 102 of Eloquent JavaScript, 2nd Edition.

print out the result of running your code on the following array [[2, 4, 6], [8], [10, 12]]
See the docs on the concat array method here or on page 76 of Eloquent JavaScript, 2nd Edition
(4 points) Every and Then Some
Solve the problem, Every and then some, on page 103 of Eloquent JavaScript, 2nd Edition.

every
print out the text, Running every...
print out the result of running your every function to determine if every element in the following array is divisible by 3: [9, 48, 204, 528942] (just print out true or false)
some
print out the text, Running some...
print out the result of running your some function to determine if any string the following array has a length of exactly 9: ['aardvark', 'abbreviate', 'abacuses', 'abandoners', 'abalones'] (just print out true or false)
Part 2 - Heat vs Spurs, Local Copy of JSON Data
The data for this game is sourced from nba.com's Box Score for the Heat vs Spurs 6/15/2014 (scroll down, and click on the box score tab… also the video on the page autoplays, so watch out!). You'll be using this data to extract some information from the game.

Importing Data
Start with a local copy of data by creating a variable and setting it equal to the string version (put it in quotes) of the game's data in JSON format (you can copy and paste the code below).
Use methods from the built-in JSON object to convert the string data into an actual JavaScript object. See the slides or the docs
(This may seem odd at first, but it'll be useful later when we fetch remote data as a string)
[{"position": "F", "freeThrowsAttempted": 9, "defensiveRebounds": 9, "offensiveRebounds": 1, "threesMade": 3, "turnovers": 1, "freeThrowsMade": 8, "assists": 5, "threesAttempted": 9, "fieldGoalsMade": 10, "fieldGoalsAttempted": 21, "name": "L. James", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "R. Lewis", "steals": 0, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 7, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 5, "fieldGoalsMade": 6, "fieldGoalsAttempted": 14, "name": "C. Bosh", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 4, "defensiveRebounds": 3, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 3, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 4, "fieldGoalsAttempted": 12, "name": "D. Wade", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 4, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 4, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 1, "fieldGoalsAttempted": 8, "name": "R. Allen", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "S. Battier", "steals": 1, "team": "Heat"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 5, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "C. Andersen", "steals": 1, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 1, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "N. Cole", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "U. Haslem", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 3, "defensiveRebounds": 1, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 1, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 4, "fieldGoalsAttempted": 7, "name": "M. Beasley", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Chalmers", "steals": 1, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 1, "name": "J. Jones", "steals": 0, "team": "Heat"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 1, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 2, "fieldGoalsMade": 1, "fieldGoalsAttempted": 2, "name": "T. Douglas", "steals": 0, "team": "Heat"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 8, "offensiveRebounds": 2, "threesMade": 3, "turnovers": 3, "freeThrowsMade": 5, "assists": 2, "threesAttempted": 4, "fieldGoalsMade": 7, "fieldGoalsAttempted": 10, "name": "K. Leonard", "steals": 1, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 6, "defensiveRebounds": 6, "offensiveRebounds": 2, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 4, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 5, "fieldGoalsAttempted": 10, "name": "T. Duncan", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 8, "offensiveRebounds": 1, "threesMade": 1, "turnovers": 2, "freeThrowsMade": 0, "assists": 6, "threesAttempted": 3, "fieldGoalsMade": 2, "fieldGoalsAttempted": 7, "name": "B. Diaw", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 1, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 3, "fieldGoalsMade": 0, "fieldGoalsAttempted": 5, "name": "D. Green", "steals": 2, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 2, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 2, "threesAttempted": 1, "fieldGoalsMade": 7, "fieldGoalsAttempted": 18, "name": "T. Parker", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 5, "defensiveRebounds": 4, "offensiveRebounds": 0, "threesMade": 3, "turnovers": 2, "freeThrowsMade": 4, "assists": 4, "threesAttempted": 6, "fieldGoalsMade": 6, "fieldGoalsAttempted": 11, "name": "M. Ginobili", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 2, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 1, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "T. Splitter", "steals": 1, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 1, "offensiveRebounds": 0, "threesMade": 5, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 8, "fieldGoalsMade": 6, "fieldGoalsAttempted": 10, "name": "P. Mills", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 2, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "M. Bonner", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 2, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 1, "threesAttempted": 0, "fieldGoalsMade": 2, "fieldGoalsAttempted": 3, "name": "M. Belinelli", "steals": 0, "team": "Spurs"}, {"position": "C", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 1, "fieldGoalsAttempted": 1, "name": "J. Ayres", "steals": 0, "team": "Spurs"}, {"position": "G", "freeThrowsAttempted": 0, "defensiveRebounds": 0, "offensiveRebounds": 0, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 0, "assists": 0, "threesAttempted": 1, "fieldGoalsMade": 0, "fieldGoalsAttempted": 2, "name": "C. Joseph", "steals": 0, "team": "Spurs"}, {"position": "F", "freeThrowsAttempted": 2, "defensiveRebounds": 0, "offensiveRebounds": 1, "threesMade": 0, "turnovers": 0, "freeThrowsMade": 2, "assists": 0, "threesAttempted": 0, "fieldGoalsMade": 0, "fieldGoalsAttempted": 0, "name": "A. Baynes", "steals": 0, "team": "Spurs"} ]
Examining the Data
The resulting data should be an array with multiple player objects
Examine the properties in the player objects:
name: (String the player's name
team: (String) the team that the player is on
position: (String) the player's position - (G)uard, (F)orward or (C)enter
fieldGoalsMade: (Number) the number of field goals (both two pointers and three pointers, worth 2 and 3 points each respectively) that a player made
fieldGoalsAttempted: (Number) the number of field goals (both two pointers and three pointers) that a player attempted
freeThrowsMade: (Number) the number of free throws that a player made (each only worth 1 point)
freeThrowsAttempted: (Number) the number of free throws that a player attempted
defensiveRebounds: (Number) the player's number of defensive rebounds
offensiveRebounds: (Number) the player's number of offensive rebounds
threesMade: (Number) the number of three point field goals that a player made
threesAttempted: (Number) the number of three point field goals that a player attempted
turnovers: (Number) the number of turnovers a player made (loss of possession of ball)
assists: (Number) the number of assists that a player made (the number of passes that led to a score)
steals: (Number) the number of steals that a player made (the number of times the ball is taken away from a player on the opposing team)
Calculations
(6 points) Implementation Requirements
You must use at least three of the following Array methods at least once each in your program:

forEach
filter
map
reduce
(5 points) Final Score
Print out the final score of the game based on the data provided.
The score for each team can be calculated by summing the following values for each player on that team:
3 points for every of three point field goal made
2 points for every two point field goal made
1 point for every free throw made
Note that the number of 2 point field goals made is actually number of fieldGoalsMade - threesMade (because fieldGoalsMade counts both twos and threes)
Output the score in the following format: Final Score: Team1 Score1, Team2 Score2.
Print out 5 equals signs on the next line: =====.
Example output:
Final Score: Heat 87, Spurs 104
=====
(5 points) Player With Highest Percentage of Points From Three Pointers
Print out the name of the player that scored at least 10 points and had the highest percentage of their points from three point shots.
The output should be in the following format: * Player with highest percentage of points from three pointers: Player Name.
Example output:
* Player with highest percentage of points from three pointers: P. Mills
(5 points) Team With Most Rebounds
Print out the name of the team that had the most rebounds, along with the number of rebounds that they had.
The number of rebounds is the sum of Offensive Rebounds and Defensive Rebounds.
The output should be in the following format: Team with most rebounds: Team Name with Number of Rebounds.
Example output:
* Team with most rebounds: Heat with 41
(5 points) Non Guard Player With Most Assists
Print out the name of the player (that doesn't play the Guard position) that had the most assists, along with the number of assists that they had.
Anyone who's value in the position property is not G is not a guard.
The output should be in the following format: Non guard player with most assists: Player Name with Number of Assists.
Example output:
* Non guard player with most assists: B. Diaw with 6
(5 points) Players With More Turnovers Than Assists
List all of the players that have more turnovers than assists.
The format of the output should be: * Players with more turnovers than assists:.
…Followed by a list of player names.
Example output:
* Players with more turnovers than assists:
  D. Wade
  R. Allen
  S. Battier
  K. Leonard
Example Output


Final Score: Heat 87, Spurs 104
=====
* Player with highest percentage of points from three pointers: P. Mills
* Team with most rebounds: Heat with 41
* Non guard player with most assists: B. Diaw with 6
* Players with more turnovers than assists:
  D. Wade
  R. Allen
  S. Battier
  K. Leonard
Part 3 - Heat vs Spurs and Thunder vs Clippers, Retrieve JSON from URL
(2 points) Setup for Retrieving JSON
Instead of hardcoding a JSON string in your program, change your code so that it requests JSON data from the specified url. Run your report on both sets of data. Change your program accordingly… and remember that you can overwrite your existing file (the diffs are in git anyway).

Install the requests library in your project's root folder: npm install request (similar to installing sync-prompt in the previous assignment)
Add the module to the beginning of your program (again, similar to using sync-prompt in the previous assignment)
Add node_modules to your .gitignore file so that it isn't tracked by git (same as previous assignment)
Read the documentation to see how to use the module (or see the slides)
(6 points) Process Data From Requested JSON
At the beginning of your program, use the requests module to retrieve the following URLs
http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-06-15-heat-spurs.json
http://foureyes.github.io/csci-ua.0480-fall2014-002/homework/02/2014-04-09-thunder-clippers.json
Process the data from each URL to print out a report on both games.
Do this by moving all of your processing logic into a callback function.
Use that callback function to handle data from your requests.



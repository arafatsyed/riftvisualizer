"use strict";

console.log("testing examples")

//Example 1 (free mode)
const newMap = new RiftVisualizer("#firstMap","createState");
newMap.rvCreateInterface(0.4);
let reset =0;
function getGameState(e){
    if(reset===0){
        const copiedMapExample1 = new RiftVisualizer("#copiedMapExampleOne","static");
        const newMapGameState = newMap.rvGetGameStateJSON();
        copiedMapExample1.rvCreateInterface(0.4);
        copiedMapExample1.rvSetGameStateJSON(newMapGameState);
        $("#getGameStateExampleOne").text("Hide Map")

        let newDiv = document.createElement('div');
        newDiv.classList.add("textPara");

        let functionDump = document.createElement('p');
        functionDump.classList.add("code");
        functionDump.innerText = "Game State Object:\n "+"'"+newMapGameState+"'";

        newDiv.append(functionDump);

        $("#copiedMapExampleOne").append(newDiv);
        reset=1;
    }
    else{
        $("#copiedMapExampleOne").html("");
        $("#getGameStateExampleOne").text("Get Game State")
        reset=0;
    }
}


//Example 2 (dev use state)
const gamestateExample = new RiftVisualizer("#gamestateExample","static");
gamestateExample.rvCreateInterface(0.4);
//blue side champions
gamestateExample.rvSpawnChampion("Jayce","blue",572,162,true);
gamestateExample.rvSpawnChampion("Vi","blue",342,220,true);
gamestateExample.rvSpawnChampion("Vex","blue",567,385,true);
gamestateExample.rvSpawnChampion("Caitlyn","blue",457,287,true);
gamestateExample.rvSpawnChampion("Leona","blue",802,143/0.4,true);

//red team
gamestateExample.rvSpawnChampion("Shen","red",292/0.4,58/0.4,true);
gamestateExample.rvSpawnChampion("Nami","red",361/0.4,64/0.4,true);
gamestateExample.rvSpawnChampion("Jinx","red",442/0.4,86/0.4,true);
gamestateExample.rvSpawnChampion("Zed","red",404/0.4,123/0.4,true);
gamestateExample.rvSpawnChampion("Kayn","red",363/0.4,200/0.4,true);

//structures
let structures = ["bn1","bn2","btt3","btt2","btt1","bmt3","bmt2","bbt3","bbt2","rn1","rn2","rti","rmi","rbi","rmt3","rmt2","rmt1","rbt3","rbt2","rtt3","rtt2","rtt1","bmi","bti","bbi"]
gamestateExample.rvSpawnStructure(structures);
gamestateExample.rvSpawnMonsters(["baron","rbluebuff","rgromp","rwolves","rraptors","bredbuff","bkrugs","braptors","bbluebuff"]);

//marker
gamestateExample.rvAddMarker("Dragon Dead","#ff3300",1157,917,true);
gamestateExample.rvAddMarker("Blue Team Minions Pushed","aqua",1395,702,true);
gamestateExample.rvAddMarker("ward","yellow",652,287,true);

let exampleTwoChampions = gamestateExample.rvGetSpawnedChampions();
let exampleTwoMonsters = gamestateExample.rvGetSpawnedMonsters();
gamestateExample.rvHighlight(exampleTwoChampions[9],"violet");
gamestateExample.rvHighlight(exampleTwoMonsters[0],"yellow");

const jsonObject = gamestateExample.rvGetGameStateJSON();

//Example 3 (animations)
const jungleExample = new RiftVisualizer("#jungleExample","static");
jungleExample.rvCreateInterface(0.4);
jungleExample.rvUserDeletePermission(false);
let pos = 0;

jungleExample.rvSpawnMonsters(["bredbuff","bkrugs","braptors","bwolves","bbluebuff","bgromp","tscuttle"]);
let jgler = jungleExample.rvSpawnChampion("Warwick","blue",379/0.4,408/0.4, false);
jungleExample.rvAddMarker("Start red","yellow",412/0.4,365/0.4);

function handleOnClick(e){
    if(e==="prev"){
        pos--;
        if(pos<=0){

            pos=7;
        }  
    }
    else{
        pos++;
    }
    moveMarkerExampleTwo();
}

function moveMarkerExampleTwo(){
    jungleExample.rvDeleteAllMarkers();
    
    if(pos===7){
        pos=0;
        
        jungleExample.rvAddMarker("Start Red","yellow",412/0.4,365/0.4,false);
        jungleExample.rvMoveChampion(jgler,379/0.4,408/0.4,false)
    }

    if(pos===1){
        
        jungleExample.rvAddMarker("Clear Raptors","yellow",357/0.4,307/0.4,false);
        jungleExample.rvMoveChampion(jgler,390/0.4,342/0.4);
    }
    else if(pos===2){
        jungleExample.rvAddMarker("Clear Wolves","yellow",219/0.4,282/0.4,false);
        jungleExample.rvMoveChampion(jgler,218/0.4,302/0.4);
    }
    else if(pos===3){
        jungleExample.rvAddMarker("Clear Blue Buff","yellow",212/0.4,231/0.4,false);
        jungleExample.rvMoveChampion(jgler,221/0.4,252/0.4);
    }
    else if(pos===4){
        jungleExample.rvAddMarker("Clear Gromp","yellow",170/0.4,204/0.4,false);
        jungleExample.rvMoveChampion(jgler,192/0.4,236/0.4);
    }
    else if(pos===5){
        jungleExample.rvAddMarker("Clear Scuttle","yellow",251/0.4,186/0.4,false);
        jungleExample.rvMoveChampion(jgler,290/0.4,205/0.4);
    }
    else if(pos===6){
        jungleExample.rvAddMarker("Gank Mid or Top","yellow",251/0.4,186/0.4,false);
        jungleExample.rvAddMarker("Top","Aqua",197/0.4,79/0.4,false);
        jungleExample.rvAddMarker("Mid","Aqua",382/0.4,265/0.4,false);
        jungleExample.rvMoveChampion(jgler,196/0.4,105/0.4);
    }
}

//example 4 Different Size Maps

const smallMap = new RiftVisualizer("#smallMap","static");
const gameStateObjectEx4 = '{"champions":[{"name":"Jinx","team":"blue","x":1407.5,"y":1177.5,"movable":true},{"name":"Nami","team":"blue","x":1195,"y":1205,"movable":true},{"name":"Yone","team":"blue","x":887.5,"y":710,"movable":true},{"name":"Ziggs","team":"red","x":1040,"y":617.5,"movable":true},{"name":"Jayce","team":"blue","x":372.5,"y":305,"movable":true},{"name":"Mundo","team":"red","x":515,"y":155,"movable":true},{"name":"Vayne","team":"red","x":1592.5,"y":1035,"movable":true},{"name":"Lulu","team":"red","x":1620,"y":817.5,"movable":true},{"name":"Nunu","team":"blue","x":510,"y":660,"movable":true},{"name":"Kayn","team":"red","x":1415,"y":712.5,"movable":true}],"monsters":[{"name":"baron"},{"name":"dragon"},{"name":"bgromp"},{"name":"bbluebuff"},{"name":"bwolves"},{"name":"braptors"},{"name":"bredbuff"},{"name":"bkrugs"},{"name":"rgromp"},{"name":"rbluebuff"},{"name":"rwolves"},{"name":"rraptors"},{"name":"rredbuff"},{"name":"rkrugs"},{"name":"tscuttle"},{"name":"bscuttle"}],"structures":[{"name":"bmt1"},{"name":"bmt2"},{"name":"bmt3"},{"name":"btt1"},{"name":"btt2"},{"name":"btt3"},{"name":"bbt1"},{"name":"bbt2"},{"name":"bbt3"},{"name":"bn1"},{"name":"bn2"},{"name":"rmt1"},{"name":"rmt2"},{"name":"rmt3"},{"name":"rtt1"},{"name":"rtt2"},{"name":"rtt3"},{"name":"rbt1"},{"name":"rbt2"},{"name":"rbt3"},{"name":"rn1"},{"name":"rn2"},{"name":"rti"},{"name":"rmi"},{"name":"rbi"},{"name":"bti"},{"name":"bmi"},{"name":"bbi"}],"markers":[]}'
smallMap.rvCreateInterface(0.2);
smallMap.rvSetGameStateJSON(gameStateObjectEx4);

const smallMap2 = new RiftVisualizer("#smallMap2","static");
smallMap2.rvCreateInterface(0.3);
smallMap2.rvSetGameStateJSON(gameStateObjectEx4)

//example 5 Quiz Template

const gameStateObjectEx5 = '{"champions":[{"name":"Vayne","team":"blue","x":1080,"y":870,"movable":true},{"name":"Braum","team":"blue","x":1235,"y":770,"movable":false},{"name":"Volibear","team":"blue","x":1037.5,"y":730,"movable":false},{"name":"Anivia","team":"blue","x":892.5,"y":732.5,"movable":false}],"monsters":[{"name":"baron"}],"structures":[{"name":"bmt2"},{"name":"bmt3"},{"name":"btt1"},{"name":"btt2"},{"name":"btt3"},{"name":"bbt3"},{"name":"bn1"},{"name":"bn2"},{"name":"rmt2"},{"name":"rmt3"},{"name":"rtt2"},{"name":"rtt3"},{"name":"rbt2"},{"name":"rbt3"},{"name":"rn1"},{"name":"rn2"},{"name":"rti"},{"name":"rmi"},{"name":"rbi"},{"name":"bti"},{"name":"bmi"},{"name":"bbi"}],"markers":[{"text":"Won Team Fight At Dragon","x":1195,"y":977.5,"color":"violet","movable":false}]}';
//library set up
const quizMap = new RiftVisualizer("#quizMap","quiz");
quizMap.rvCreateInterface(0.4);
quizMap.rvSetGameStateJSON(gameStateObjectEx5);

//remove user deleting permission
quizMap.rvUserDeletePermission(false);

//quiz set up
quizMap.rvHighlight(quizMap.rvGetSpawnedChampions()[0],"yellow");
quizMap.rvSetQuizZone(quizMap.rvGetSpawnedChampions()[0],595,339,891,576);

function evaluateQuiz(){
    if(quizMap.rvEvaluateQuiz()===true){
        $("#answerBox").text("Correct! You should do baron here.")
    }
    else{
        $("#answerBox").text("Incorrect! Press show answer if you are stuck!")
    }
}

function showAnswer(){
    quizMap.rvMoveChampion(quizMap.rvGetSpawnedChampions()[0],710,422.5);
}
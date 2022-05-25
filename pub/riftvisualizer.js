/*League map Visualizer library*/
"use strict";


(function(global, document, $) {
    const log = console.log;
    log("library loaded")
    function RiftVisualizer(elementId, type) {

    this.parent = elementId; //parent element of where instance of library will be in
    this.type = type; //type of map interactionfor the user
    this.turretsOriginal = [

        {
            turret: "bmt1",
            spawned: false,
            side: "blue",
            left: 41.2,
            top: 54.8
        },
        {
            turret: "bmt2",
            spawned: false,
            side: "blue",
            left: 37,
            top: 63.9

        },
        {
            turret: "bmt3",
            spawned: false,
            side: "blue",
            left: 29.75,
            top: 70.4
        },
        {
            turret: "btt1",
            spawned: false,
            side: "blue",
            left: 16.4,
            top: 29.65

        },
        {
            turret: "btt2",
            spawned: false,
            side: "blue",
            left: 18.4,
            top: 52.15
        },
        {
            turret: "btt3",
            spawned: false,
            side: "blue",
            left: 16.2,
            top: 66.5
        },
        {
            turret: "bbt1",
            spawned: false,
            side: "blue",
            left: 66.5,
            top: 88.47
        },
        {
            turret: "bbt2",
            spawned: false,
            side: "blue",
            left: 46.95,
            top: 85.31
        },
        {
            turret: "bbt3",
            spawned: false,
            side: "blue",
            left: 32.9,
            top: 86.23
        },
        {
            turret: "bn1",
            spawned: false,
            side: "blue",
            left: 19.05,
            top: 79.41
        },
        {
            turret: "bn2",
            spawned: false,
            side: "blue",
            left: 21.6,
            top: 82.36
        },
        {
            turret: "rmt1",
            spawned: false,
            side: "red",
            left: 56.75,
            top: 41.88
        },
        {
            turret: "rmt2",
            spawned: false,
            side: "red",
            left: 60.65,
            top: 32.88
        },
        {
            turret: "rmt3",
            spawned: false,
            side: "red",
            left: 67.45,
            top: 26.2122
        },
        {
            turret: "rtt1",
            spawned: false,
            side: "red",
            left: 32.9,
            top: 10.96
        },
        {
            turret: "rtt2",
            spawned: false,
            side: "red",
            left: 51,
            top: 13.28
        },
        {
            turret: "rtt3",
            spawned: false,
            side: "red",
            left: 63.65,
            top: 12.01
        },
        {
            turret: "rbt1",
            spawned: false,
            side: "red",
            left: 83.35,
            top: 66.54
        },
        {
            turret: "rbt2",
            spawned: false,
            side: "red",
            left: 79.65,
            top: 44.34
        },
        {
            turret: "rbt3",
            spawned: false,
            side: "red",
            left: 80.45,
            top: 30.57
        },
        {
            turret: "rn1",
            spawned: false,
            side: "red",
            left: 74.25,
            top: 16.16
        },
        {
            turret: "rn2",
            spawned: false,
            side: "red",
            left: 76.9,
            top: 18.62
        },
        {
            turret: "rti",
            spawned: false,
            side: "red",
            left: 67.55,
            top: 13.77
        },
        {
            turret: "rmi",
            spawned: false,
            side: "red",
            left: 69.9,
            top: 24.73
        },
        {
            turret: "rbi",
            spawned: false,
            side: "red",
            left: 80.15,
            top: 26.7
        }
        ,
        {
            turret: "bti",
            spawned: false,
            side: "blue",
            left: 16.65,
            top: 71.68
        },
        {
            turret: "bmi",
            spawned: false,
            side: "blue",
            left: 27.25,
            top: 73.78
        },
        {
            turret: "bbi",
            spawned: false,
            side: "blue",
            left: 28.60,
            top: 86.85
        }


    ];

    this.jungleMonstersOrignal = [
        {
            monster: "baron",
            left: (723/2000)*100,
            top: (451/1423)*100,
            src: "./pictures/baron.png",
            spawned: false
        },
        {
            monster: "dragon",
            left: (1231/2000)*100,
            top: (958/1423)*100,
            src: "./pictures/dragon.png",
            spawned: false
        },
        {
            monster: "bgromp",
            left: 22.3,
            top:42.5,
            src: "./pictures/gromp.png",
            spawned: false
        },
        {
            monster: "bbluebuff",
            left: 30.1,
            top: 45.32,
            src: "./pictures/bluebuff.png",
            spawned: false
        },
        {
            monster: "bwolves",
            left: 30.4,
            top: 54.67,
            src: "./pictures/wolves.png",
            spawned: false
        },
        {
            monster: "braptors",
            left: 46.6,
            top: 61.49,
            src: "./pictures/raptors.png",
            spawned: false
        },
        {
            monster: "bredbuff",
            left: 51.2,
            top: (992/1423)*100,
            src: "./pictures/redbuff.png",
            spawned: false
        },
        {
            monster: "bkrugs",
            left: (1103/2000)*100,
            top: (1114/1423)*100,
            src: "./pictures/krugs.png",
            spawned: false
        },
        {
            monster: "rgromp",
            left: (1510/2000)*100,
            top: (790/1423)*100,
            src: "./pictures/gromp.png",
            spawned: false
        },
        {
            monster: "rbluebuff",
            left: (1335/2000)*100,
            top: (727/1423)*100,
            src: "./pictures/bluebuff.png",
            spawned: false
        },
        {
            monster: "rwolves",
            left: (1335/2000)*100,
            top: (619/1423)*100,
            src: "./pictures/wolves.png",
            spawned: false
        },
        {
            monster: "rraptors",
            left: (1008/2000)*100,
            top: (518/1423)*100,
            src: "./pictures/raptors.png",
            spawned: false
        },
        {
            monster: "rredbuff",
            left: (932/2000)*100,
            top: (403/1423)*100,
            src: "./pictures/redbuff.png",
            spawned: false
        },
        {
            monster: "rkrugs",
            left: (861/2000)*100,
            top: (302/1423)*100,
            src: "./pictures/krugs.png",
            spawned: false
        },
        {
            monster: "tscuttle",
            left: (672/2000)*100,
            top: (521/1423)*100,
            src: "./pictures/scuttle.png",
            spawned: false
        },
        {
            monster: "bscuttle",
            left: (1271/2000)*100,
            top: (871/1423)*100,
            src: "./pictures/scuttle.png",
            spawned: false
        }         
        
    ]

    this.userEdit = true;
    this.spawnedMonsters = [];
    this.spawnedStructures = [];
    this.scale = 0;
    this.champions = [];
    this.markers = [];
    this.slides = [];
    this.quiz = [];
}

    RiftVisualizer.prototype = {

        rvCreateInterface: function (scale) {
    
            setScale(scale,this);
            if (this.type === "quiz") {
                //createQuizButtons(this);
                createMap(this, scale);
            }
            else if (this.type === "static") {
                createMap(this, scale);
            }
            else if (this.type === "createState") {
                createCreateStateButtons(this);
                createMap(this, scale);
            }

        
        },
        //returns all spawned champions
        rvGetSpawnedChampions: function(){
            return this.champions;
        },
        //returns all spawned structures
        rvGetSpawnedStructures: function(){
            return this.spawnedStructures;
        },
        //returns all spawned monsters
        rvGetSpawnedMonsters: function(){
            return this.spawnedMonsters;
        },
        //returns all spawned labels
        rvGetSpawnedMarkers: function(){
            return this.markers;
        },
        //returns all spawned objects
        rvGetGameState: function(){
            return ({champions: this.champions, monsters: this.spawnedMonsters, structures: this.spawnedStructures, markers: this.markers})
        },
        //returns an object with information about the spawned champion
        rvSpawnChampion: function(name,team,x,y, movable){
            
            if(x<0 || x>2000 || y<0 || y>1423){
                return "error wrong positions";
            }
            if(team != "red" && team != "blue"){
                return "error wrong team input";
            }

            let newx =(x/2000)*100;
            let newy = (y/1423)*100;

            return insertChampion(this,{name: name,team: team, x:newx + "%" , y:newy + "%" }, movable);
        },
        //delete a spawned champion, user has to pass in the champion object that was returned from rvSpawnChampion or from the champion array
        rvDeleteOneChampion: function(championObject){
            deleteChampion(this,championObject.championElement);
        },
        //delete all champions
        rvDeleteAllChampions: function(){
            while(this.champions.length > 0){
                deleteChampion(this,this.champions[0].championElement);
            }
        },
        //move a champion to anew location
        rvMoveChampion: function(championObject,x,y){
            if(x<0 || x>2000 || y<0 || y>1423){
                return "error invalid position"
            }
            $(this.parent).children("#mapWrapper").children(championObject.id).animate({left: (x/2000)*100 + "%", top: (y/1423)*100 + "%" });
            championObject.x = (x/2000)*(this.scale * 2000);
            championObject.y = (y/1423)*(this.scale * 1423);
        },
        //spawn structures given a string array of structures 
        rvSpawnStructure: function(structures){
            spawnStructures(structures, this);
        },
        //delete structures given a string array of structures to be deleted;
        rvDeleteStructure: function(structures){
            
            for(let i=0;i<structures.length;i++){
                this.spawnedStructures.find((elem)=>{
                    if(elem.structure.id === structures[i]){
                        deleteStructure(elem.structure,this);
                    }
                })
            }
        },
        //delete all structures that are spawned
        rvDeleteAllStructures: function(){
            while(this.spawnedStructures.length>0){
                deleteStructure(this.spawnedStructures[0].structure,this);
            }
        },
        rvAddMarker: function(label,color,x,y, movable){
            if(x<0 || x>2000 || y<0 || y>1423){
                return "invalid position";
            }

            let newLeft = (x/2000)*this.scale*2000;
            let newTop = (y/1423)*this.scale*1423; 

            return insertMarker(this,{prompt: label, top: newTop, left: newLeft, color: color}, movable);
        },
        //animate marker motion
        rvMoveMarker: function(markerObject, x, y){
            $(this.parent).children("#mapWrapper").children(markerObject.id).animate({left: (x/2000)*100 + "%", top: (y/1423)*100 + "%" });
            markerObject.left = (x/2000)*(this.scale * 2000);
            markerObject.right = (y/1423)*(this.scale * 1423);       
        },
        //change the marker text
        rvChangeMarkerText: function(markerObject, label){
            this.markers.find(elem=>{
                if(elem.markerElement === markerObject.markerElement){
                    elem.text = label;
                    elem.markerElement.children[0].innerHTML=label;
                    return;
                }
            })
        },
        //deletes a particular marker on the map
        rvDeleteMarker: function(markerObject){
            deleteMarker(this,markerObject.markerElement);
        },
        //deletes all markers on the map
        rvDeleteAllMarkers: function(){
            while(this.markers.length>0){
                deleteMarker(this,this.markers[0].markerElement);
            }
        },
        //spawns monster given array of monsters to spawn
        rvSpawnMonsters: function(monsters){
            spawnMonsters(monsters,this);
        },
        //removes all spwaned monsters from the map
        rvDeleteAllMonsters: function(){
            while(this.spawnedMonsters.length>0){
                deleteMonster(this.spawnedMonsters[0].monsterElement,this)
            }
        },
        //delete monster given array of monsters to be deleted
        rvDeleteMonster: function(monsters){

            for(let i=0;i<monsters.length;i++){
                this.spawnedMonsters.find((elem)=>{
                    if(elem.name === monsters[i]){
                        deleteMonster(elem.monsterElement,this);
                    }
                })
            }        
        },
        //takes a champion element and assigns a correct zone for it
        rvSetQuizZone: function(championObject,x1,y1,x2,y2){
            
            if(x1>2000 || x2 > 2000 || x1<0 || x2 < 0 || y1>1423 || y2>1423 | y1<0 || y2<0){
                return "invalid position";
            }
            
            const x1_bounding = x1* this.scale;
            const y1_bounding = y1 * this.scale;
            const x2_bounding = x2*this.scale;
            const y2_bounding = y2*this.scale;
            
            let quizElem = {championObject: championObject,point1: {x: x1_bounding, y: y1_bounding},point2: {x: x2_bounding, y: y2_bounding}};
            //if already in the array, update the zone
            for(let i=0;i<this.quiz.length;i++){
                if(this.quiz[i].championObject===championObject){
                    this.quiz[i] = quizElem;
                    return;
                }
            }

            //else not found, add in this new quiz ans
            quizElem = {championObject: championObject,point1: {x: x1_bounding, y: y1_bounding},point2: {x: x2_bounding, y: y2_bounding}};
            this.quiz.push(quizElem);

        },
        //evaluates if all the quiz objects are in the right place
        //if objects are not in right place, returns an array of misplaced objects
        //else returns true if everything is in right place
        rvEvaluateQuiz: function(){

            let wrongPosition = [];
            for(let i=0;i<this.quiz.length;i++){
                
                const elem = this.quiz[i];
                
                const champX = elem.championObject.x;
                const champY = elem.championObject.y;
                
                const point1X = elem.point1.x;
                const point1Y = elem.point1.y;

                const point2X = elem.point2.x;
                const point2Y = elem.point2.y;
                //calcualte bounding box
                if(!(champX >= Math.min(point1X,point2X) && champX <= Math.max(point1X,point2X) && champY >= Math.min(point1Y,point2Y) && champY <= Math.max(point1Y,point2Y))){
                    wrongPosition.push(elem);
                }

            }

            if(wrongPosition.length===0){
                return true;
            }
            else{
                return wrongPosition;
            }

        },
        //allows user to delete things (dev can pass in true or false)
        rvUserDeletePermission: function(permission){
            this.userEdit = permission;
        },
        //highlights a map object
        rvHighlight: function(mapObject,color){

            //if its a champion 
            if(mapObject.championElement){
                mapObject.championElement.children[0].style.border = "4px outset " + color;
                mapObject.championElement.children[1].style.color = color;
                return;
            }
            // if its a marker
            else if(mapObject.markerElement){
                mapObject.markerElement.style.border = "2px groove " + color;
                return;
            }
            //its a monster
            else if(mapObject.monsterElement){
                
                mapObject.monsterElement.style.border = "2px groove " + color;
                return;
            }
            //its a turret
            else if(mapObject.structure){
                mapObject.structure.style.border = "2px groove " + color;
                return;
            }

            
        },
        rvRemoveHighLight: function(mapObject){
            
            if(mapObject.championElement){
                mapObject.championElement.children[0].style.border = "";
                mapObject.championElement.children[1].style.color = "white";
                return;
            }
            // if its a marker
            else if(mapObject.markerElement){
                mapObject.markerElement.style.border = "";
                return;
            }
            //its a monster
            else if(mapObject.monsterElement){
                
                mapObject.monsterElement.style.border = "";
                return;
            }
            //its a turret
            else if(mapObject.structure){
                mapObject.structure.style.border = "";
                return;
            }

        },
        //get a JSON parsable text of a game state that can be replicated
        rvGetGameStateJSON: function(){

            let championArray = [];
            for(let i=0;i<this.champions.length;i++){
                const elem = this.champions[i];
                let name = elem.name;
                let x = (elem.championElement.offsetLeft)/this.scale;
                let y = (elem.championElement.offsetTop)/this.scale;
                let team = elem.team;
                let movable = elem.movable;
                championArray.push({name: name,team: team, x: x, y: y, movable: movable});
            }

            let markerArray = [];
            for(let i =0;i<this.markers.length;i++){
                const elem=this.markers[i];
                let text = elem.text;
                let x = elem.markerElement.offsetLeft/this.scale;
                let y = elem.markerElement.offsetTop/this.scale;

                let color = elem.markerElement.children[0].style.color;
                let movable = elem.movable;
                markerArray.push({text: text, x: x, y:y,color: color, movable: movable});
            }

            let monstersArray = [];

            for(let i=0;i<this.spawnedMonsters.length;i++){
                const elem = this.spawnedMonsters[i];
                monstersArray.push({name: elem.name});
            }

            let structuresArray = [];

            for(let i=0;i<this.spawnedStructures.length;i++){
                const elem = this.spawnedStructures[i];
                structuresArray.push({name:elem.name});
            }

            const jsonObject = {champions: championArray, monsters: monstersArray, structures: structuresArray, markers: markerArray};

            return JSON.stringify(jsonObject);
        },
        //sets the gamestate of a map given a json stringified object, boolean to replace the current state (if true) or add on to it
        rvSetGameStateJSON: function(jsonObject,replace){
            //get object in javascript
            const gameState = JSON.parse(jsonObject);
            
            //delete everything on the map if replace is true
            if(replace===true){
                //delete all champions
                while(this.champions.length>0){
                    deleteChampion(this,this.champions[0].championElement);
                }
                //delete all markers
                while(this.markers.length>0){
                    deleteMarker(this,this.markers[0].markerElement);
                }
                //delete all structures
                while(this.spawnedStructures.length>0){
                    deleteStructure(this.spawnedStructures[0].structure,this);
                }
                //delete all monsters
                while(this.spawnedMonsters.length>0){
                    deleteMonster(this.spawnedMonsters[0].monsterElement,this)
                }
            }

            //insert structures
            const structuresToInsert = gameState.structures;
            let structures = [];
            for(let i=0;i<structuresToInsert.length;i++){
                structures.push(structuresToInsert[i].name);
            }
            spawnStructures(structures,this);

            //spawn monsters
            const monstersToSpawn = gameState.monsters;
            let monsters = [];
            for(let i=0;i<monstersToSpawn.length;i++){
                monsters.push(monstersToSpawn[i].name);
            }
            spawnMonsters(monsters,this);

            //insert markers
            const markersToInsert = gameState.markers;

            for(let i=0;i<markersToInsert.length;i++){
                const elem = markersToInsert[i];
                insertMarker(this,{prompt: elem.text, top: elem.y*this.scale, left: elem.x*this.scale, color: elem.color}, elem.movable);
            }

            //insert the champions
            const championsToInsert = gameState.champions;
            
            for(let i=0;i<championsToInsert.length;i++){
                const elem = championsToInsert[i];
                insertChampion(this,{name: elem.name, team: elem.team, x: (elem.x/2000)*100 +"%", y: (elem.y/1423)*100 + "%"}, elem.movable);
            }


        }
    }

    function setScale(scale,inst){
        inst.scale = scale;
    }

    function createMap(inst, scale) {

        //creating map
        inst.scale = scale;
        const mapImg = document.createElement("img");
        mapImg.src = "./pictures/blankmap.png";
        mapImg.style.width = scale * 2000 + "px";
        mapImg.style.height = scale * 1423 + "px";
        mapImg.id = "map";

        //creating a wrapper div
        const wrapperDiv = document.createElement("div");
        wrapperDiv.id = "mapWrapper";
        wrapperDiv.style.position = "relative";
        wrapperDiv.style.width = scale * 2000 + "px";
        wrapperDiv.style.height = scale * 1423 + "px";

        wrapperDiv.append(mapImg);
        
        const mainMapDiv = $(inst.parent);
        mainMapDiv.append(wrapperDiv);

    }

    function createCreateStateButtons(inst) {

        const buttonDiv = document.createElement("div");
        buttonDiv.id = "createStateButtonDiv";
        buttonDiv.style.maxWidth = inst.scale*2000 + "px";

        //enter champion name form
        const championName = document.createElement("input");
        championName.type = "text";
        championName.placeholder = "enter champion";
        championName.id = "championNameInput";
        championName.style.width = '90px';

        buttonDiv.append(championName);

        //submit button
        const championNameSubmit = document.createElement("input");
        championNameSubmit.type = "submit";
        championNameSubmit.id = "championNameSubmit";
        championNameSubmit.value = "+"
        championNameSubmit.addEventListener("click", function () { insertChampion(inst,undefined,true) });

        buttonDiv.append(championNameSubmit);

        //marker element
        const markerForm = document.createElement("input");
        markerForm.type="text";
        markerForm.placeholder="label";
        markerForm.id = "markerInput";
        markerForm.style.width = '50px';

        buttonDiv.append(markerForm);

        //marker submit button
        const markerSubmit = document.createElement("input");
        markerSubmit.type="submit";
        markerSubmit.id = "markerSubmit";
        markerSubmit.value = "+";
        markerSubmit.addEventListener("click",function(){insertMarker(inst,undefined,true)});

        buttonDiv.append(markerSubmit);

        //spawn structures
        const turretSpawnAll = document.createElement("button");
        turretSpawnAll.id = "spawnTowerButton";
        turretSpawnAll.innerHTML = "Spawn Structures";
        turretSpawnAll.onclick = (function(){spawnAllStructures(inst)});
        turretSpawnAll.style.marginLeft = "10px";
        
        buttonDiv.append(turretSpawnAll);

        //spawn monsters
        const spawnAllMonstersButton = document.createElement("button");
        spawnAllMonstersButton.id = "spawnMonsterButton";
        spawnAllMonstersButton.innerText = "Spawn Monsters"
        spawnAllMonstersButton.onclick = (function(){spawnAllMonsters(inst)});

        buttonDiv.append(spawnAllMonstersButton);
        
        const mainDiv = $(inst.parent);
        mainDiv.append(buttonDiv);

    }

    //function inserts marker on the screen
    function insertMarker(inst, customMarker,movable){
        
        let top,left,color,input,otop,oleft;
        //from library
        if(customMarker===undefined){
            otop = 0.5*(inst.scale*1423);
            top = 0.5*(inst.scale*1423) + "px";
            oleft = 0.5*(inst.scale*2000);
            left = 0.5*(inst.scale*2000) + "px";
            color = "yellow";
            input = $(inst.parent).children("#createStateButtonDiv").children("#markerInput").val();
        }
        //from dev
        else{
            otop = customMarker.top;
            oleft = customMarker.left;
            top = customMarker.top + "px";
            left = customMarker.left  + "px";
            color = customMarker.color;
            input = customMarker.prompt;
        }
        
            //wrapper div
            const markerOuterDiv = document.createElement("div");
            markerOuterDiv.style.position = "absolute";
            markerOuterDiv.style.top = top;
            markerOuterDiv.style.left = left;
    

            markerOuterDiv.id = "marker" + input.replace(/ /g,"") + inst.markers.length; 

            const markerText = document.createElement("div");
            markerText.innerText = input;
            markerText.style.color = color;
            markerText.style.fontSize = "110%";
            markerText.id = "markerText";
            markerText.style.cursor = "move";
            markerText.style.fontSize = "14px"
            const markerCircle = document.createElement("div");
            markerCircle.style = "width: 5px; height: 5px; border-radius: 50%;";
            markerCircle.style.marginLeft = "auto";
            markerCircle.style.marginRight = "auto";
            markerCircle.style.backgroundColor = color;
            markerCircle.id = "markerCircle";


            markerOuterDiv.append(markerText);
            markerOuterDiv.append(markerCircle);

            let markerObject = {
                markerElement: markerOuterDiv,
                text: input,
                left: otop,
                top:  oleft,
                id: "#" + markerOuterDiv.id,
                movable: movable
            }

            inst.markers.push(markerObject);

            const map = $(inst.parent).children("#mapWrapper");
            map.append(markerOuterDiv);
            markerOuterDiv.addEventListener("dblclick",function(){if(inst.userEdit){changeMarkerColour(markerOuterDiv,inst)}});
            if(movable){
                moveMarker(markerOuterDiv,inst);
            }
            return markerObject;

    }

    //helper function that spawns all the jungler creeps
    function spawnAllMonsters(inst){
        
        let monsters = [];
        //create string array of the monsters we want to spawn
        inst.jungleMonstersOrignal.map((elem)=>{
            monsters.push(elem.monster);
        })
        
        spawnMonsters(monsters,inst);
    }

    //funcion spawns the monsters on the map given array of monster names
    function spawnMonsters(monsters,inst){
        //iterate through user input and see if it exits in monsterorignal array, create
        //a monster image at the position given from monsterorignal array
        for(let i=0;i<monsters.length;i++){

            inst.jungleMonstersOrignal.find((elem,index)=>{

                //if valid input and monster hasn't been spawned, spawn it
                if(elem.monster === monsters[i] && elem.spawned === false){
                    
                    elem.spawned = true;
                    //dom creation
                    const monsterElement = document.createElement('img');
                    const width = 0.03125*(inst.scale*2000);
                    monsterElement.style = `width: ${width}px; height: ${width}px; border-radius: 50%;`;
                    monsterElement.src = elem.src;
                    monsterElement.style.position = "absolute";
                    monsterElement.style.top = elem.top + "%";
                    monsterElement.style.left = elem.left + "%";
                    monsterElement.id = elem.monster;
                    monsterElement.addEventListener("dblclick",function(){if(inst.userEdit){deleteMonster(monsterElement,inst)}});
                    monsterElement.style.cursor = "pointer";
                    const mapWrapper = $(inst.parent).children('#mapWrapper')
                    mapWrapper.append(monsterElement);

                    let name = monsters[i];
                    inst.spawnedMonsters.push({monsterElement,index,name});

                }

            })

        }
    }

    function deleteMonster(monsterElement,inst){

        let filteredSpawnedMonsters = inst.spawnedMonsters.filter((elem)=>{
            if(elem.monsterElement !== monsterElement){
                return true;
            }
            else{
                inst.jungleMonstersOrignal[elem.index].spawned=false;
                $(inst.parent).children("#mapWrapper").children("#"+monsterElement.id).remove();
                return false;
            }
        })

        inst.spawnedMonsters=filteredSpawnedMonsters;
    }

    //helper function that spawns all towers when button is clicked
    function spawnAllStructures(inst){
        
        let structures = [];
        //create string array of structures to spawn
        inst.turretsOriginal.map((elem)=>{
            structures.push(elem.turret);
        })

        spawnStructures(structures, inst);


    }
    //function that spawns structures given aarray of struct of the structures that you want to spawn
    function spawnStructures(structures,inst){

        //iterate through user input string and see if it exists in the turret array, iof it
        //does create a tower with the position and save it to the state array 
        for(let i=0;i<structures.length;i++){
            inst.turretsOriginal.find((elem,index)=>{
                //same name and not spawned
                if(elem.turret === structures[i] && elem.spawned === false){

                    elem.spawned=true;
                    
                    const structure = document.createElement('div');
                    const width = 0.01875*(inst.scale*2000);
                    structure.style = `width:${width}px; height: ${width}px`;
                    structure.style.position = "absolute";
                    structure.id = elem.turret;
                    structure.style.cursor = "pointer"
                    //set position
                    structure.style.top = elem.top + "%";
                    structure.style.left = elem.left + "%";
                    structure.style.opacity = "0.7"
                    //colour tower
                    if(elem.side === "blue"){
                        structure.style.backgroundColor = "#7DF9FF";
                    }
                    else{
                        structure.style.backgroundColor = "#E74C3C";
                    }

                    structure.addEventListener("dblclick", function(){if(inst.userEdit){deleteStructure(structure,inst)}})

                    const mapWrapper = $(inst.parent).children('#mapWrapper')
                    mapWrapper.append(structure);

                    inst.spawnedStructures.push({structure: structure,index: index, name: elem.turret});

                }
            })
        }
    }

    function deleteStructure(structure,inst){

        let filteredSpawnedTurrets = inst.spawnedStructures.filter((elem)=>{

            if(elem.structure !== structure){
                return true;
            }
            else{
                inst.turretsOriginal[elem.index].spawned = false;
                $(inst.parent).children("#mapWrapper").children("#"+structure.id).remove();
            }

        })

        inst.spawnedStructures=filteredSpawnedTurrets;
    }

    function insertChampion(inst,champInfo, movable) {


        let input;
        let left;
        let top;
        let color;
        let team;
        //from library
        if(champInfo===undefined){
            input = $(inst.parent).children("#createStateButtonDiv").children("#championNameInput").val();
            left = "50%";
            top = "50%";
            color = "#7DF9FF";
            team = "blue";
        }
        //came from developler
        else{

            input = champInfo.name;
            left = champInfo.x;
            top = champInfo.y;
            if(champInfo.team==="blue"){
                color = "#7DF9FF";
                team = "blue"; 
            }
            else{
                color= "#E74C3C"
                team = "red";
            }
        }    
        
        
        //const input = $(inst.parent).children("#createStateButtonDiv").children("#championNameInput").val();
        const champion = document.createElement('div');
        //champion.style = 'width: 30px; height: 30px; border-radius: 50%; background-color: #7DF9FF; opacity: 0.8;';

        //create the champ circle
        const champCircle = document.createElement("div");
        const width = 0.0375*(inst.scale*2000);
        champCircle.style = `width: ${width}px; height: ${width}px; border-radius: 50%; opacity: 0.8;`;
        champCircle.style.backgroundColor = color;
        champCircle.id = "champCircle";
        champCircle.style.cursor = "move";
        champion.append(champCircle);
        
        //create champ name
        const champName = document.createElement("div");
        champName.innerText = input;
        champName.style.textAlign = "center";
        champName.style.fontWeight = "bold";
        champName.style.color = "white"
        champName.style.fontSize = "12px"
        champion.append(champName);

        champion.style.position = 'absolute';
        champion.style.left = left;
        champion.style.top = top;
        let inputNoSpaces = input.replace(/ /g,"");
        champion.id = "champion" + inputNoSpaces + inst.champions.length;
        champion.addEventListener('dblclick',function(){if(inst.userEdit){changeTeam(champion,inst)};})
        
        const mapWrapper = $(inst.parent).children("#mapWrapper");
        mapWrapper.append(champion);

        let championObject = {
            championElement: champion,
            name: input,
            id: "#"+champion.id,
            x: left,
            y: top,
            team: team,
            movable: movable
        }

        inst.champions.push(championObject);
        if(movable){
            moveChampion(champion, inst);
        }
        return championObject;
    }

    function createSlideShowButtons(inst) {


        const buttonDiv = document.createElement("div");
        const playButton = document.createElement("button");

        playButton.innerHTML = "Play"

        playButton.onclick = () => {
            console.log("play button clicked")
        }

        const nextButton = document.createElement("button");
        nextButton.innerHTML = "Next";

        nextButton.onclick = () => {
            console.log("Next button clicked")
        }

        const prevButton = document.createElement("button");

        prevButton.innerHTML = "Prev";
        prevButton.onclick = () => {
            console.log("Prev button clicked")
        }


        buttonDiv.append(playButton);
        buttonDiv.append(nextButton);
        buttonDiv.append(prevButton);

        const mainMapDiv = $(inst.parent);

        mainMapDiv.append(buttonDiv);

    }

    function changeTeam(champion, inst){


        inst.champions.find((elem,i)=>{
            if(elem.championElement===champion){
                //if blue team, change to red
                if(elem.team ==='blue'){
                    elem.team="red";
                    //elem.championElement.style.backgroundColor = "#E74C3C";
                    $(inst.parent).children("#mapWrapper").children(elem.id).children("#champCircle").css("background-color","#E74C3C");
                }
                else{
                    elem.team="blue";
                    //elem.championElement.style.backgroundColor = "#7DF9FF";
                    $(inst.parent).children("#mapWrapper").children(elem.id).children("#champCircle").css("background-color","#7DF9FF");                    
                }
                return;
            }
        });

    
    }
    //https://www.w3schools.com/howto/howto_js_draggable.asp
    //code edited from this link
    function moveChampion(champion, inst) {

        let x = 0, y = 0, mouseX = 0, mouseY = 0, top=0,left=0;

        //on mouse down call back
        champion.onmousedown = moveMouseDown;


        function moveMouseDown(e) {
            
            e.preventDefault();
            
            mouseX = e.clientX;
            mouseY = e.clientY;
            //mouse up (stop moving) callback
            document.onmouseup = stopMove;
            
            //mouse movement
            document.onmousemove = moveChampPosition;
        }

        function moveChampPosition(e) {
            
            e.preventDefault();
            //cursor position
            x = mouseX - e.clientX;
            y = mouseY - e.clientY;
            mouseX = e.clientX;
            mouseY = e.clientY;
            //champion new position
            top = (champion.offsetTop - y);
            left = (champion.offsetLeft - x);

            //remove if out of box
            if(top<0 || top >(inst.scale)*1423 || left < 0 || left > (inst.scale) *2000){
                
                if(inst.userEdit){
                    deleteChampion(inst,champion);
                }
                else{
                    if(top>(inst.scale)*1423){
                        top=inst.scale*1423;
                    }
                    if(top<0){
                        top=0;
                    }
                    if(left<0){
                        left=0;
                    }
                    if(left>(inst.scale)*2000){
                        left = inst.scale*2000;
                    }                
                }

            }

            
            champion.style.top = top + "px";
            champion.style.left = left + "px";

        }

        function stopMove() {

            //stop moving when mouse is let go
            document.onmouseup = null;
            document.onmousemove = null;

            //update the new position in state
            inst.champions.find((elem,i)=>{
                if(elem.id==="#" + champion.id){
                    inst.champions[i].x = left;
                    inst.champions[i].y = top;
                    return;
                }
            });

        }
    }

    function deleteChampion(inst,champion){

        let filteredChampions = inst.champions.filter((elem)=>{
            if(elem.id !=="#"+champion.id){
                return true;
            }
            else{
                $(inst.parent).children("#mapWrapper").children(elem.id).remove();
                return false;
            }
        })

        inst.champions = filteredChampions;

    }

    //https://www.w3schools.com/howto/howto_js_draggable.asp
    //code edited from this link
    function moveMarker(marker, inst){

        let x = 0, y = 0, mouseX = 0, mouseY = 0, top=0,left=0;

        //on mouse down call back
        marker.onmousedown = moveMouseDown;


        function moveMouseDown(e) {
            
            e.preventDefault();
            
            mouseX = e.clientX;
            mouseY = e.clientY;
            //mouse up (stop moving) callback
            document.onmouseup = stopMove;
            
            //mouse movement
            document.onmousemove = moveChampPosition;
        }

        function moveChampPosition(e) {
            
            e.preventDefault();
            //cursor position
            x = mouseX - e.clientX;
            y = mouseY - e.clientY;
            mouseX = e.clientX;
            mouseY = e.clientY;
            //champion new position
            top = (marker.offsetTop - y);
            left = (marker.offsetLeft - x);

            //remove if out of box
            if(top<0 || top >(inst.scale)*1423 || left < 0 || left > (inst.scale) *2000){
                
                if(inst.userEdit){
                    deleteMarker(inst,marker);  
                }
                else{
                    if(top>(inst.scale)*1423){
                        top=inst.scale*1423;
                    }
                    if(top<0){
                        top=0;
                    }
                    if(left<0){
                        left=0;
                    }
                    if(left>(inst.scale)*2000){
                        left = inst.scale*2000;
                    }
                }
                
            }

            
            marker.style.top = top + "px";
            marker.style.left = left + "px";

        }

        function stopMove() {

            //stop moving when mouse is let go
            document.onmouseup = null;
            document.onmousemove = null;

            //update the new position in state
            inst.markers.find((elem,i)=>{
                if(elem.id === "#" + marker.id){
                    inst.markers[i].left = left;
                    inst.markers[i].top = top;
                }
            })

        }    
    }

    function deleteMarker(inst,marker){
        
        
        let filteredMarkers = inst.markers.filter((elem)=>{
            if(elem.id !=="#"+marker.id){
                return true;
            }
            else{
                $(inst.parent).children("#mapWrapper").children(elem.id).remove();
                return false;
            }
        })

        inst.markers = filteredMarkers;
    }

    //when marker double clicked change the colour of the marker
    function changeMarkerColour(marker,inst){
        
        const markerText = marker.children[0];
        const markerCircle = marker.children[1];

        if(markerText.style.color === "yellow"){
            markerText.style.color = "red";
            markerCircle.style.backgroundColor= "red";
        }
        else if(markerText.style.color === "red"){
            markerText.style.color = "purple";
            markerCircle.style.backgroundColor= "purple";       
        }
        else if(markerText.style.color === "purple"){
            markerText.style.color = "green";
            markerCircle.style.backgroundColor= "green";       
        }
        else if(markerText.style.color === "green"){
            markerText.style.color = "orange";
            markerCircle.style.backgroundColor= "orange";       
        }
        else if(markerText.style.color === "orange"){
            markerText.style.color = "white";
            markerCircle.style.backgroundColor= "white";       
        }   
        else if(markerText.style.color === "white"){
            markerText.style.color = "blue";
            markerCircle.style.backgroundColor= "blue";       
        }
        else if(markerText.style.color === "blue"){
            markerText.style.color = "violet";
            markerCircle.style.backgroundColor= "violet";       
        }
        else if(markerText.style.color === "violet"){
            markerText.style.color = "aqua";
            markerCircle.style.backgroundColor= "aqua";       
        }
        else if(markerText.style.color === "aqua"){
            markerText.style.color = "pink";
            markerCircle.style.backgroundColor= "pink";       
        }
        else if(markerText.style.color === "pink"){
            markerText.style.color = "yellow";
            markerCircle.style.backgroundColor= "yellow";       
        }
        else{
            markerText.style.color = "yellow";
            markerCircle.style.backgroundColor= "yellow";          
        }
    
    }

    global.RiftVisualizer = global.RiftVisualizer || RiftVisualizer;

})(window, window.document, $);
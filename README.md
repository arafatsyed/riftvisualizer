# js-library-syedsh25
Landing Page: https://agile-river-85375.herokuapp.com/

Documentation: https://agile-river-85375.herokuapp.com/documentation.html


Getting Started:
Before you get started and start using this library, there are a few things you should know and need to do before hand.

1) Install jQuery
Firstly, this library uses jQuery for DOM manipulation so you need to include that in your html file. Put this line below in your html file:

<script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

2) Including Rift Visualizer Library

Next, install the Rift Visualizer library from github. Install the riftvisualizer.js file and pictures folder and put them in the same level in your project folder. After installing, in your html file put:

<script defer type="text/javascript" src = "{yourdirectory}/riftvisualizer.js" ></script>

3) Create an html element with an id.

Put an html element with a unique ID in the area that you want your map. An instance of the library will operate inside this element:

<div id="myFirstMap"> </div>

4) Initialize The Library

In your javascript file for your project, initialize the library. The first argument is the id of the html element you want the library to instantiate in, the second is the type of map you want. There are 3 types: create state, static, and quiz. Let's intialize the map in create state (as seen in the examples). :

const myFirstMap = new RiftVisualizer("#myFirstMap","createState");

5) Spawn the map

Now you can spawn a map using the rvCreateInterface function. The input is the scale of the map you want from 0 to 1. The largest map is 2000x1423 so you can scale down from that. Let's create a map with a scale of 0.4 (800x570).

myFirstMap.rvCreateInterface(0.4);

6) Lets add some objects to the map!

You can add as many champions and labels as you want. You can also spawn any of the structures in the game as well as all the jungle monsters.

Note: the positions of the objects you are placing are with respect to the 2000x1423 map even if you have a scaled version. You can use online image coordinate web apps to get specific coordinates or create a map in create mode from the UI and use rvGetGameStateJSON and rvSetGameStateJSON to avoid this (as seen in examples).

//adding champions
myFirstMap.rvSpawnChampion("Jayce","blue",572,162,true);
myFirstMap.rvSpawnChampion("Vi","blue",342,220,true);

//structures
let structures = ["bn1","bn2","btt3","btt2","btt1","bmt3","bmt2","bbt3","bbt2","rn1","rn2","rti","rmi","rbi","rmt3","rmt2","rmt1","rbt3","rbt2","rtt3","rtt2","rtt1","bmi","bti","bbi"]
myFirstMap.rvSpawnStructure(structures);
//monsters
myFirstMap.rvSpawnMonsters(["baron","rbluebuff","rgromp","rwolves","rraptors","bredbuff","bkrugs","braptors","bbluebuff"]);

//add labels
myFirstMap.rvAddMarker("Dragon Dead","#ff3300",1157,917,true);
myFirstMap.rvAddMarker("Blue Team Minions Pushed","aqua",1395,702,true);
myFirstMap.rvAddMarker("ward","yellow",652,287,true);

Your all set! These were the basics. Below is the full list of the API functions. There are a lot more things you can do!


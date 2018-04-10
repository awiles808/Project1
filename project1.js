
TweenMax.to("#asteroid",4, {top :650, left :150, scale:0.5,repeat: -1, rotation:360, ease:Linear.easeNone


});       //Using GreenSock Library To Animate Asteroid Falling

// window load event makes sure image is // loaded before running animation
$(window).on("load", function() {

var tl = new TimelineMax({repeat:-1});
tl.to("#background", 30, {
    backgroundPosition: "-2247px 0px",
    autoRound:true,
    ease: Linear.easeNone
});

});
var falconX = {                                //Declaring FalconX Postion Which Is Mirroring The Screen Position Of "falconX" In CSS.
    top : 600,                                 //600px From Top Of Screen
    left : 550                                 //550px From Left Of Screen
};
var enemy =   {                                //Declaring FalconX Postion Which Is Mirroring The Screen Position Of "falconX" In CSS.
    top : 50,                                 //600px From Top Of Screen
    left : 550                                 //550px From Left Of Screen
};
var missilesArea = [];                            //Creating An Array Of Missiles
var enemyMissilesArea =[];

document.onkeydown = function(e) {         //Telling Document To Listen For A Key To Be Preesed Down.
    console.log(e.keyCode);


    if (e.keyCode === 37) {                //Listenting For Left Arrow Key.
         console.log("left");
        falconX.left = falconX.left - 20;         //Move 20 Pexels Back.
        movefalconX();                            //Calling Function Of Move FalconX 20px.
    }

      if (e.keyCode === 39 ) {                 //Listening For Right Arrow Key.
        console.log("right");
        falconX.left = falconX.left + 20;         //Move 20 Pexels.
        movefalconX();                            //Calling Function Move FalconX 20px.
    }

       if (e.keyCode === 38) {                //Listenting For Left Arrow Key.
         console.log("up");
        falconX.top = falconX.top - 20;         //Move 20 Pexels Back.
        movefalconX();                            //Calling Function Of Move FalconX 20px.
    }

      if (e.keyCode === 40 ) {                 //Listening For Right Arrow Key.
        console.log("down");
        falconX.top = falconX.top + 20;         //Move 20 Pexels.
        movefalconX();                            //Calling Function Move falconX 20px.
    }

       if (e.keyCode === 191) {                //Listen For / To Be Pushed.
        console.log('FiRE');
        missilesArea.push({                           //Grab Misseiles & "Push Postion Of falconX + 15px"
            left: falconX.left + 15,              //Put New "Cordiantes In Place"-Where The Flacon X is + 15px
            top: falconX.top                      //Same Postition

    });
        createMissiles();                         //Calling Create Missles Function
document.onkeydown = move;
    }

TweenMax.to(".missile",20,{top: - 400});     //Calling Library To Listen For Any Spaebar Key Press




function movefalconX() {                                                   //Creating A Function To Move falconX
    document.getElementById('falconX').style.left = falconX.left + "px";     // Grabbing The Element By Its Id And Style That Is Delcared Above,
    //Declaring It To falconX & Adding Pixels
    document.getElementById('falconX').style.top = falconX.top + "px";

}

function createMissiles() {                                                       //Creating A Function Called Create Missles


    document.getElementById('missilesArea').innerHTML +=
    `<div class='missile' style='left:${missilesArea[missilesArea.length-1].left}px; top:${missilesArea[missilesArea.length-1].top}px;'></div>`;

            //Grabbing "Inner HTML Space" In The Id of Missiles.
            //Creating a Div Tag And Placeing The Style{Top & Left} Of Missile Into The Array Of Missiles
 }

//Enemy

    if (e.keyCode === 65) {                //Listenting For Left Arrow Key.
         console.log("Enemy left");
        enemy.left = enemy.left - 20;         //Move 20 Pexels Back.
        moveEnemy();                            //Calling Function Of Move enemy 20px.
    }


      if (e.keyCode === 68 ) {                 //Listening For Right Arrow Key.
        console.log("Enemy right");
        enemy.left = enemy.left + 20;         //Move 20 Pexels.
        moveEnemy();                            //Calling Function Move enemy 20px.
    }

 if (e.keyCode === 87) {                //Listenting For Left Arrow Key.
         console.log("Enemy up");
        enemy.top = enemy.top - 20;         //Move 20 Pexels Back.
        moveEnemy();                            //Calling Function Of Move enemy 20px.
    }

      if (e.keyCode === 83 ) {                 //Listening For Right Arrow Key.
        console.log("enemy down");
        enemy.top = enemy.top + 20;         //Move 20 Pexels.
        moveEnemy();                            //Calling Function Move enemy 20px.
    }

       if (e.keyCode === 70) {                //Listen For Letter F To Be Pushed.
        console.log('FiRE');
        enemyMissilesArea.push({                           //Grab Misseiles & "Push Postion Of enemy + 15px"
            left: enemy.left + 30,              //Put New "Cordiantes In Place"-Where The Flacon X is + 15px
            top: enemy.top   + 100                   //Same Postition

    });
        createEnemyMissiles();                         //Calling Create Missles Function

    }

TweenMax.to(".enemyMissile",10,{top: 800
});     //Calling Library To Listen For Any CAPS Press




function moveEnemy() {                                                   //Creating A Function To Move enemy
    document.getElementById('enemy').style.left = enemy.left + "px";     // Grabbing The Element By Its Id And Style That Is Delcared Above,
    //Declaring It To enemy & Adding Pixels
    document.getElementById('enemy').style.top = enemy.top + "px";

}

function createEnemyMissiles() {                                                       //Creating A Function Called Create Missles


    document.getElementById('enemyMissilesArea').innerHTML +=
    `<div class='enemyMissile' style='left:${enemyMissilesArea[enemyMissilesArea.length-1].left}px; top:${enemyMissilesArea[enemyMissilesArea.length-1].top}px;'></div>`;

            //Grabbing "Inner HTML Space" In The Id of Missiles.
            //Creating a Div Tag And Placeing The Style{Top & Left} Of Missile Into The Array Of Missiles
 }

};



// }






























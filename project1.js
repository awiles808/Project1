



var falconX = {                                //Mirroring The Screen Position Of "falconX" To Reflect The The Position
    top : 600,
    left : 550
};
var missile = [];

document.onkeydown = function(e) {         //Telling Document To Listen For A Key To Be Preesed Down.

    if (e.keyCode === 37) {                //Listenting For Left Arrow Key
         console.log("left");
        falconX.left = falconX.left - 20;         //Move 10 Pexels Back.
        movefalconX();
    }

     else if (e.keyCode === 39 ) {
        console.log("right");
        falconX.left = falconX.left + 20;         //Move 10 Pexels.
        movefalconX();
    }

      else if (e.keyCode === 32) {
        console.log('FiRE');
        missile.push({
            left: falconX.left + 15,
            top: falconX.top
        });
        console.log(missile);
    }


};


function movefalconX () {                                                //Creating A Function To Move FalconX
    document.getElementById('falconX').style.left = falconX.left + "px";     // Grabbing The Element By Its Id And Moving The Style Of Falcon X & Adding Pixels
    // document.getElementById('falconX').style.right = falconX.right + "px";
}





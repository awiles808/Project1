



var falconX = {                                //Mirroring The Screen Position Of "falconX" To Reflect The The Position
    top : 700,                              //**Currently Not Working...Confused On Scope..**???////
    left: 500

};

document.onkeydown = function(e) {         //Telling Document To Listen For A Key To Be Preesed Down.

    if (e.keyCode === 37) {                //Listenting For Left Arrow Key
         console.log("left")
        falconX.left = falconX.left - 10;         //Move 10 Pexels Back.
        movefalconX()

    }

     if (e.keyCode === 39 ) {
        console.log("right")
        falconX.left = falconX.left + 10;         //Move 10 Pexels Back.
        movefalconX()
    }

if (e.keyCode === 38 ) {
        console.log("up")
        falconX.left = falconX.left - 10;         //Move 10 Pexels Back.
        movefalconX()
    }

 if (e.keyCode === 40 ) {
        console.log("down")
        falconX.left = falconX.left + 10;         //Move 10 Pexels Back.
        movefalconX()
    }
};


function movefalconX () {                                                //Creating A Function To Move FalconX
    document.getElementById('falconX').style.left = falconX.left + "px";     // Grabbing The Element By Its Id And Moving The Style Of Falcon X & Adding Pixels
    // document.getElementById('falconX').style.right = falconX.right + "px";
}





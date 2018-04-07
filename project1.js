



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

    else if (e.keyCode === 39 ) {
        console.log("right")
        falconX.right = falconX.right + 10;         //Move 10 Pexels Back.
        movefalconX()
    }




};


function movefalconX () {
    document.getElementById('falconX').style = falconX.left + "px";
}













//  alert("Ready For Take Off!?");

// const hero = document.getElementById('hero');
// let margValue = 500;


// document.addEventListener('keydown',(event) => {

// console.log("Button is pushed")
// });



// function move(e) {

//   if(e.keyCode == 39){
//         margValue += 20;
//         hero.style.left = margValue + ("px");

//         }

// };



// document.onkeydown = move;








































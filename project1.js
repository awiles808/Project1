 alert("Are you ready to rumble!");

const hero = document.getElementById('hero');
let margValue = 0;


document.addEventListener('keydown',(event) => {

console.log("Button is pushed")
});



function move(e) {

  if(e.keyCode == 39){
        margValue += 20;
        hero.style.left = margValue + ("px");

        }
};



document.onkeydown = move;








































//  $(function(){                   //Using jQuery to get the DOM Ready.
// let margValue = 0;

// var hero = $(document.getElementsByTagName('hero'));        //jS&jQuery linked. Declaring  Variable
//     console.log('hero');                                      //Testing That The Variable is Defined .


// document.addEventListener('keydown',(event) => {
// //console.log(e.keycode)
// console.log("Button is pushed")

//  });

// function move(e) {

//   if(e.keyCode == 39){
//         margValue += 70;
//         hero.style.left = margValue + ("px");
//         if(margValue >= 1000){
//             alert("Player 1 Is The Winner Winner Chicken Dinner!!");
//         }
// }


// };

// });

//  document.onkeydown = move;
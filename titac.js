//  empty = (document.innerText = "");
let turn = "X";
let exit = false;
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let song = new Audio("song.mpeg");
let nt = document.querySelector(".divs").innerText;
// winnning function starts from here
let changeturn = () => {
  return turn === "X" ? "0" : "X";
};

const winner = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  //     wins.forEach(e=>{

  //         // if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== ""))

  //         if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
  //         {
  //             document.querySelector('.info').innerText= `${boxtexts[e[0]].innerText} + Won`

  //             exit = true;
  //             console.log(" umair won");
  //             document.getElementsByClassName("info").innerText= `${boxtexts[e[0].innerText]} +  won`;
  //             exit=true;
  //         }

  //     })

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = ` congrats ${
        boxtext[e[0]].innerText
      }  Won`;
      exit = true;

      document.getElementById("pic").style.display = "block";
      gameover.play();
      exit = true;
      setTimeout(() => {
        document.getElementById("ending").style.display = "block";
        document.getElementById("ngif").style.display = "block";
      }, 2000);

      document.getElementById("re").addEventListener("click", () => {
        // window.location.reload(true);

        setTimeout(() => {
          document.querySelector(".divs").style = " true ";
        }, 2000);
        document.getElementById("loadeer").style.display = " block ";

        setTimeout(() => {
          document.getElementById("loadeer").style.display = " none ";
          window.location.reload(true);
        }, 2000);
      });
      // setTimeout(()=>{

      //   document.getElementById("ending").style.display= ' none ';
      //   window.location.reload(true);

      //      },2000)

      // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
      // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      // document.querySelector(".line").style.width = "20vw";
    }

    

    // function checkWins(win) {

    //   return
    // })
  });
};

let boxes = document.getElementsByClassName("divs");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText == "") {
      boxtext.innerText = turn;

      turn = changeturn();
      audioTurn.play();
      if (!exit) {
        document.getElementsByClassName("info")[0].innerText =
          " Turn for " + turn;
      }

      winner();
    }
  });
});

// let newloader=()=>{
//   document.getElementById("loadeer").style.display= 'block';
// }

var lod = document.getElementById("btn");
var a = lod.addEventListener("click", () => {
  setTimeout(() => {
    document.querySelector(".divs").style = " true ";
  }, 2000);
  document.getElementById("loadeer").style.display = " block ";

  setTimeout(() => {
    document.getElementById("loadeer").style.display = " none ";
    window.location.reload(true);
  }, 2000);
});

document.getElementById("h").style.margin = " 0 ";
if( wins.find().innerText!=""){
  gameover.play();
}
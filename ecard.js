const openBtn = document.getElementById("openBtn");
const futureBtn = document.getElementById("futureBtn");
const restartBtn = document.getElementById("restart");

const front = document.getElementById("front");
const inside = document.getElementById("inside");

const overlay = document.getElementById("overlay");
const countdown = document.getElementById("countdown");

const futureBox = document.getElementById("futureBox");
const finalScene = document.getElementById("finalScene");

const typing = document.getElementById("typing");

let opened = false;

openBtn.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    front.style.display = "none";

    inside.style.display = "flex";

    setTimeout(startGlitch, 3500);

});

function startGlitch(){

    overlay.style.display = "flex";

    let time = 5;

    countdown.innerHTML = time;

    const timer = setInterval(()=>{

        time--;

        countdown.innerHTML = time;

        if(time <= 0){

            clearInterval(timer);

            overlay.style.display = "none";

            showFuture();

        }

    },1000);

}

function showFuture(){

    futureBox.style.display="flex";

}

futureBtn.addEventListener("click",()=>{

    futureBox.style.display="none";

    finalScene.style.display="flex";

    typeWriter();

    createConfetti();

});

const text =

`Hello World and Hello Ma'am Roan!!

Thank you so much for your patience, kindness, and dedication po. 

We appreciate all the time and effort you put into teaching us, guiding us, and helping us do our best. 

You make learning enjoyable and fun, even when the lessons are challenging.

Kahit minsan masungit ka po, alam po naming gusto n’yo lang kaming matuto at maging responsible. 

Minsan kailangan din po talaga namin ng konting "sermon" para magising at makinig hehe. 

Thank you for putting up with our kulit, our many questions, and the times we forget our assignments.

We’re lucky to have you as our teacher. 

Sana po laging masaya ang araw ninyo, at maraming blessings. We appreciate everything you do for us, 

and we’ll always remember the lessons you’ve taught us.`;


let i = 0;

function typeWriter(){

    typing.innerHTML="";

    i = 0;

    const speed = 50;

    function write(){

        if(i < text.length){

            typing.innerHTML += text.charAt(i);

            i++;

            setTimeout(write,speed);

        }

    }

    write();

}

function createConfetti(){

    for(let i=0;i<180;i++){

        const confetti=document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=
        (Math.random()*3+2)+"s";

        confetti.style.opacity=Math.random();

        confetti.style.background=
        randomColor();

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}

function randomColor(){

    const colors=[

    "#ff4d6d",
    "#ffd60a",
    "#00f5d4",
    "#4cc9f0",
    "#b5179e",
    "#ffffff"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}

restartBtn.addEventListener("click",()=>{

    location.reload();

});
//Get UI
const minnum = document.querySelector(".minnumber"),
      maxnum = document.querySelector('.maxnumber'),
      getinput = document.querySelector('#guessnumber'),
      getbtn = document.querySelector("#btn"),
      getmessage1 = document.querySelector('.message1'),
      getmessage2 = document.querySelector('.message2'),
      getgamecnt = document.getElementById('game-container'),
      getmicbtn = document.getElementById('mic-btn'),
      getvoccnt = document.getElementById('voice-container');



let min = 10,
    max = 100,
    gameleft = 3,
    winningnumber = 10;

    minnum.textContent = min;
    maxnum.textContent = max;

function randomnum(min,max){
    let getrdm = Math.random() * (max-min)+1;
    return getrdm;
}

// console.log(winningnumber)
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let getrec = new window.SpeechRecognition;
// console.log(getrec)

getmicbtn.addEventListener('click',function(){
//    For Chrome Support 
// Start Recognition ,start() come frome recognition 
    getrec.start();
    getrec.addEventListener('result',(e)=>talking(e));
})

// object ta khu lone pyan kaw chin loh 

function talking(ele){
    console.log(ele);
    const micresult = ele.results[0][0].transcript;
    console.log(micresult);
    micmessage(micresult);
}

function micmessage(msg){
    getvoccnt.innerHTML = ` 
    <span class="voicemessage"> Did you say!! ${msg}</span>
    
    `
}

function getnumber(msg){
    const getnum = +msg;
    console.log(typeof getnum);

    getinput.value =getnum;
}

function setmessage1(msg,color){
    getmessage1.textContent = msg;
    getmessage1.style.color = color;
}

function setmessage2(msg,color){
    getmessage2.textContent = msg;
    getmessage2.style.color = color;
}

function gameover(won,msg){
    let color;

    won === true? color = "green" : color = "red";
    getinput.disabled = true;

    getinput.style.borderColor = color;
    setmessage1(msg,color);
    getbtn.value = "Play Again";
    getbtn.classList.add('playagain');
}

getbtn.addEventListener('click',function(){
    let guess = +getinput.value;
    // console.log(typeof guess)

    if(guess < min || guess > max || isNaN(guess)){
        setmessage2(`Please enter a number between ${min} to ${max}`,"red");
    }

    if(guess === winningnumber){
        // Game Over Won
        gameover(true,`${winningnumber} is correct!! You win`);
        
    }else{
        gameleft--;
        if(gameleft === 0){
            // Game Over Lose
            gameover(false,`Game Over , You Lost , The correct Number is ${winningnumber}`);
        }else{
            //Continue Game
            getinput.style.borderColor = "red";
            getinput.value = "";
            setmessage1(`${guess} is not correct , ${gameleft} guess left`,'blue');
        }
    }
});

getgamecnt.addEventListener('mousedown',function(e){
    console.log(e.target);
    if(e.target.classList.contains('playagain')){
        window.location.reload();
    }
});

// 17RC 
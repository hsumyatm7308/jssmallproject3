// get ui 
const minnum = document.querySelector('.minnumber'),
maxnum = document.querySelector('.maxnumber');

const getinput = document.querySelector('#guessnumber');
const getbtn = document.querySelector('#btn');

const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');

let min = 1,
max = 10,
gameleft = 3,
winningum = 5;

minnum.textContent = min;
maxnum.textContent = max;

function randomnum(min,max){
    let getrdm = Math.floor(Math.random()*(max-min)+1)
    return getrdm;
}

function setmessage1(msg,color){
    message1.textContent = msg;
    message1.style.color = color;
}

function setmessage2(msg,color){
    message2.textContent = msg;
    message2.style.color = color;
}

function gameover(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    getinput.disabled = true;
    getinput.style.borderColor = color;

    setmessage1(msg,color);

    getbtn.vlaue ='Play Again';
}

getbtn.addEventListener('click',function(){
    let guess = +getinput.vlaue;

    console.log(guess);
    if(guess < min || guess > max || isNaN(guess)){
        setmessage2(`Please enter a number between ${max} to ${min}`,'red');
    }

    if(guess === winningum){
        // Game Over WON 
        gameover(true,`${winningum} is correct.You Win`)
    }else{
        gameleft --;
        if(gameleft === 0){
            //   Game Over Lose
        }else{
              //Continue Gmae
        }
    }
})

// 9VI 
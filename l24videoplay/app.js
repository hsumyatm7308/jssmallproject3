// Get Ui 

const getvideoscreen = document.getElementById('videoscreen');
const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop'); 

const progress = document.getElementById('progress');
const getdisplaytime = document.getElementById('displaytime')
const getfullscreen = document.getElementById('fullscreen');

const getcontainer = document.querySelector('.container')
const getopenfullscreen = document.querySelector('.openfullscreen');
const getclsfullscreen = document.querySelector('.closefullscreen');


const videos = ['1111','glaxy'];

let curridx = 0 ;

loadvideo(videos[curridx]);

function loadvideo(vdo){
    getvideoscreen.src = `${vdo}.mp4`;
};

function playvdo(){

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    // play() method came from video api 

    getvideoscreen.play();
}

function pausevdo(){

    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    // pause() method came from video api 

    getvideoscreen.pause();
}

function playpausevdo(){

    // paused keyword came from video api
    if(getvideoscreen.paused){
    //   getvideoscreen.play();
      playvdo();
    }else{
    //   getvideoscreen.pause();
      pausevdo();
    }
}

function stopvideo(){
    getvideoscreen.currentTime = 0;
    // getvideoscreen.pause(); 
    pausevdo();
}


function nextvdo(){
    curridx++;
    
    if(curridx > videos.length-1){
        curridx = 0;
    }

    // console.log(curridx);

    loadvideo(videos[curridx]);
    playvdo();
}

function previousvdo(){
    curridx -= 1;

    if(curridx < 0){
        curridx = videos.length-1;
    }

    // console.log(curridx);

    loadvideo(videos[curridx]);
    playvdo();

}


function updateprogress(e){


// console.log(e.target); 
// console.log(e.srcElement);
// console.log(this);

// Method 2 
// const currenttime = e.target.currentTime; 
// const duration = e.target.duration;
// console.log(currenttime,duration)


// Method 3 
// const {currentTime} = e.target;
// const {duration} = e.target;
// console.log(currentTime,duration)


// method 4 
// const{currentTime,duration} = e.target;
// console.log(currentTime,duration)


// method 5 
const[ct,duration] = [e.target.currentTime,e.srcElement.duration];
// console.log(ct,duration)




// Method 1 
// currentTime came from video api 
//   console.log(getvideoscreen.currentTime)
//   console.log(getvideoscreen.duration)

//   console.log(getvideoscreen.currentTime / getvideoscreen.duration) * 100;

  if(getvideoscreen.currentTime === 0){
   progress.value = 0;
  }else{
    // method 1 
    // progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100;  ;

    // method 2 
    // progress.value = (currenttime / duration) * 100;  ;
   
    // method 3 / method 4
    // progress.value = (currentTime / duration) * 100;  ;

    // method 5 
    progress.value = (ct / duration) * 100;  ;



  }

  
  let getmins = Math.floor(getvideoscreen.currentTime / 60);
 
//   if(getmins < 10){
//     // getmins = '0' + getmins;
//     getmins = '0' + String(getmins);
//   }

  let getsecs = Math.floor(getvideoscreen.currentTime % 60);

//   if(getsecs < 10){
//     // getsecs = '0' + getsecs;
//     getsecs = '0' + String(getsecs);
//   }
  
//   getdisplaytime.innerText =` ${getmins}:${getsecs}`




// Method 2 
// Note: partStart( ယူမယ့်နေရာအရေအတွက်,startvalue) must be string data typw
const minutevalue = getmins.toString().padStart(2,'0');
const secondvalue = getsecs.toString().padStart(2,'0');
  
// console.log(minutevalue,secondvalue)
// console.log(typeof minutevalue,typeof secondvalue)

  getdisplaytime.innerText =` ${minutevalue}:${secondvalue}`


}


// const getdoce = document.documentElement;


// getvideoscreen is original control box 
function openfullscreen(){
    if(getcontainer.requestFullscreen){
        getcontainer.requestFullscreen(); //standard w3c 
    }else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen(); //chrome/safari
    }else if(getcontainer.msRequestFullscreen){
        getcontainer.msRequestFullscreen() //microsoft pro / id / edge
    }

    getopenfullscreen.style.display = 'none';
    getclsfullscreen.style.display = 'inline-block';
}


function closefullscreen(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen()
    }

    getopenfullscreen.style.display = 'inline-block';
    getclsfullscreen.style.display = 'none';
}

function setprogress(){
    // console.log('hey');
    getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;
}


playbtn.addEventListener('click',playpausevdo)
nextbtn.addEventListener('click',nextvdo)
prevbtn.addEventListener('click',previousvdo)
stopbtn.addEventListener('click',stopvideo)

getvideoscreen.addEventListener('timeupdate',updateprogress)
progress.addEventListener('click',setprogress);

getopenfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen)
// 1 toe towr yin condition sit pay ya mal 


// 20VD 

// 21VD 
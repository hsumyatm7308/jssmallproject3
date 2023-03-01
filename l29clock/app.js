// Get UI 
const hourel = document.querySelector('.hour');
const minuteel = document.querySelector('.minute');
const secondel = document.querySelector('.second');

// function clock(){

//     var now = new Date();
//   // console.log(now)

// //   3600s in 1hr 
//                         //    h m s ms / 1000 
//     var gettime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() * 1 + now.getMilliseconds() /1000;
// //    console.log(gettime)

// //    change time into degree 
// var hours = gettime / 60 /12 * 6;
// var minutes = gettime /60 * 6;
// var seconds = gettime * 6;

// // console.log(hours,minutes.seconds)

// hourel.style.transform = `rotate(${hours}deg)`;
// minuteel.style.transform = `rotate(${minutes}deg)`;
// secondel.style.transform = `rotate(${seconds}deg)`;
// }

// clock()

// setInterval(clock,1000);

// setInterval(clock,50); 






function setclock(){
   const now = new Date();
  //  console.log(now);
   const hours = now.getHours();
   const getcvhour = hours%12;
  //  console.log(hours)
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();

   //Method 2
   setrotation(hourel,hours/12);
   setrotation(minuteel,minutes/60);
   setrotation(secondel,seconds/60);

   hourel.style.transform = `rotate(${scale(hours,0,12,0,360)}deg);`
   minuteel.style.transform = `rotate(${scale(minutes,0,60,0,360)}deg);`
   secondel.style.transform = `rotate(${scale(seconds,0,60,0,360)}deg);`

}




function setrotation(handitem,rotation){
  // console.log(handitem,rotation)
  handitem.style.setProperty('--myrotation',rotation*360);
}


const scale = function(number,inmin,inmax,outmin,outmax){
   return  (number - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}

setclock();
setInterval(setclock,1000);



                        
// function scale(curnumber,inmin,inmax,outmin,outmax){
//     return( curnumber - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
// }


// 1VA 
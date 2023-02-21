// Get UI
var getcurmonth = document.getElementById('curmonth');
var getcuryear = document.getElementById('curyear');
var getcaldays = document.getElementById('caldays');

var getyaerbtn = document.querySelector('.year-btn');

var getuimonth = document.getElementById('months');
var getuiyear = document.getElementById('years');



// Init         
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Now","Dec"];
var startyear = 2020;
var endyear = 2030;

var month,year;
window.addEventListener('load',function (){

    var svday = new Date();
    month = svday.getMonth();
    year = svday.getUTCFullYear();
    // console.log(svday); // Mon Feb 20 2023 07:24:15 GMT+0630 (Myanmar Time)
    // console.log(month);// 1
    // console.log(year);// 2023

    getcurmonth.textContent = months[month];
    getcuryear.innerText = year;

    initmonths();
    inityears();
    initdays();

});

function initmonths(){

    getuimonth.innerHTML = '';

    for(var x = 0; x < months.length; x++){
        // <div className="dropdown-item">Feb</div>

        var newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');

        // console.log(x);

        newdiv.onclick = (
            function (){
                console.log('hay');

                return function (){

                    initdays();
                }

            }
        )();

        getuimonth.appendChild(newdiv);


    };

}

function inityears(){

    getuiyear.innerText = '';

    for( var x = startyear; x <= endyear; x++ ){
        // console.log(x);
        // <div className="dropdown-item">2001</div>

        var newdiv = document.createElement('div');
        newdiv.innerText = x;
        newdiv.className = "dropdown-item";

        getuiyear.appendChild(newdiv);


    };

}

function initdays(){
    getcaldays.innerHTML = '';


    var tmpdays = new Date(year,month,0);
    // console.log(tmpdays);//Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    var getalldays = alldays(year,month);
    // console.log(tmpendday);
    var getweekday = tmpdays.getDay();
    // console.log(getweekday);// 2

    //<div id="" class="day">1</div>

    // get curry space for previous days
    for(var i = 0; i <= getweekday; i++){
        console.log(i);
        var newdiv = document.createElement('div');
        newdiv.className = 'day blank';
        console.log(newdiv)

        getcaldays.appendChild(newdiv)
    }


    for(var x = 0; x < getalldays; x++){

        var addday = x +1;

        var newdiv = document.createElement('div');
        newdiv.textContent = addday;
        newdiv.classList.add('day');

        // console.log(newdiv);

        getcaldays.appendChild(newdiv);

    };

}

function alldays(year,month){
    // console.log(month,year);

    // console.log(new Date());
    console.log(new Date(2023,1,10));  //Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
    console.log(new Date(2023,1,0)); //Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time) 
    console.log(new Date(2023,0,0)); //Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time) 
    console.log(new Date(2023,5,0)); //Wed May 31 2022 00:00:00 GMT+0630 (Myanmar Time) 
    console.log(new Date(2023,1,30)); //Sat March 2 2022 00:00:00 GMT+0630 (Myanmar Time) 


    var curalldays = new Date(year,month+1,0);
       console.log(curalldays)
    curalldays = curalldays.getDate();

    console.log(curalldays)

    return curalldays;
};

getyaerbtn.addEventListener('click',function (){
    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
    }else{
        this.lastElementChild.classList.add('show');
    }
});


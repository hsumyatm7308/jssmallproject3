// Get UI
const balance = document.getElementById('balance');
const moneydeb = document.getElementById('money-deb');
const moneycrd = document.getElementById('money-crd');

const getform = document.getElementById('form')
const gettranstatuses = document.querySelectorAll('.form-check-input');
const getamount = document.getElementById('amount');
const getdate = document.getElementById('date');
const getremark = document.getElementById('remark');

const openbtn = document.getElementById('open-btn');
const gethisbox = document.querySelector('.history-box');
const getlistgroup = document.getElementById('list-group');



const dummydatas = [
	{id:1,transtauts:'+',remark:'Petty Cash',amount:1000,date:'2023-01-20'},
	{id:2,transtauts:'-',remark:'Pen',amount:-20,date:'2023-01-21'},
	{id:3,transtauts:'+',remark:'Other Income',amount:300,date:'2023-01-25'},
	{id:4,transtauts:'-',remark:'Book',amount:-10,date:'2023-01-25'},
	{id:5,transtauts:'+',remark:'Water',amount:-150,date:'2023-01-25'},
	{id:6,transtauts:'-',remark:'Teamix',amount:1000,date:'2023-01-25'}
];


const getlsdatas = JSON.parse(localStorage.getItem('transaction'));
let gethistories = localStorage.getItem('transaction') !== null ? getlsdatas : [];
// console.log(dummydatas);


// Initial App 
function init(){
	getlistgroup.innerHTML = '';

	// dummydatas.forEach(function(dummydata){
	// 	// console.log(dummydata);
	// 	addtoui(dummydata);
	// });

    // Method 2 
    // dummydatas.forEach(dummydata => addtoui(dummydata));

    // Method 3 
    // dummydatas.forEach(addtoui)

    gethistories.forEach(addtoui)
}

init();

// Create li to ul
function addtoui(transaction){
	// console.log(transaction);
	// console.log(transaction.amount, typeof transaction.amount);

	const newli = document.createElement('li');

	newli.innerHTML = `${transaction.remark} <span>${transaction.transtauts}${Math.abs(transaction.amount)}</span><span>${transaction.date}</span><button type="button" class="delete-btn">&times;</button>`;

	newli.className = 'list-group-item';
    newli.classList.add(transaction.transtauts === "+" ? 'inc' : 'dec')
	// console.log(newli);

	getlistgroup.appendChild(newli);
}




var sign = "-";

gettranstatuses.forEach(function(gettranstatuse){
	gettranstatuse.addEventListener('change',function(){
	// console.log(this.value);

		if(this.value === "debit"){
			sign = "+";
		}else if(this.value === "credit"){
			sign = "-";
		}
	});
});



function newtransaction(e){
	// console.log('hay');
	// console.log(sign);

    if(isNaN(getamount.value) || getamount.value.trim() === '' || getdate.value.trim() === '' || getremark.value.trim() === ''){
    alert('ohhh!! some data is somethig wrong')
    }else{
        const transaction = {
            id:1000,
            transtatu
            :sign,
            amount:sign === "-" ? Number(-getamount.value) : Number(getamount.value),
            date:getdate.value,
            remark:getremark.value
        };

        // console.log(transaction);
        gethistories.push(transaction);
        addtoui(transaction);
    }

	e.preventDefault();
}


openbtn.addEventListener('click',function(){
	gethisbox.classList.toggle('show');
});

getform.addEventListener('submit',newtransaction);


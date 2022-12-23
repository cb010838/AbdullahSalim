
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');  
const email2 = document.getElementById('email2');
const duration = document.getElementById("duration");
var fname = document.getElementById("fName");
const btnAdd = document.getElementById("addToOrder");
const btnDelete = document.getElementById("delete-btn");
const txtOutput = document.getElementById("output");


form.addEventListener('submit', key => {
	key.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const fnameValue = fname.value.trim();
	const emailValue = email.value.trim();
	const mobileValue = mobile.value.trim(); 
	const email2Value = email2.value.trim();
	
	if(fnameValue === '') {
		setErrorFor(fname, 'Username cannot be blank');
	} else {
		setSuccessFor(fname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(mobileValue === '') {
		setErrorFor(mobile, 'Password cannot be blank');
	} else {
		setSuccessFor(mobile);
	}
	
	if(email2Value === '') {
		setErrorFor(email2, 'Confirm e-mail cannot be blank');
	} else if(emailValue !== email2Value) {
		setErrorFor(email2, 'Email does not match');
	} else{
		setSuccessFor(email2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'textArea error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'textArea success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




let child;let fadult;
let adult;let fchild;
let infant;
let adultPass;
let childPass;
let FadultPass;
let FchildPass;
let cost;
let halfLocal;let fullLocal;
let halfFor;let fullFor;
let Totalcost;
var first = fname.value;

window.addEventListener("load",init);
function init(){
    child = 0;fchild=0;
    adult = 0;fadult=0;
    infant = 0;
    adultPass = 1200;
    childPass = 700;
    FadultPass = 5500;
    FchildPass = 2700;
    cost = 0;
    halfLocal = 350;
    halfFor = 450;
    fullLocal = 600;
    fullFor = 800;
    Totalcost = 0;
}
init();

/////adult count function///////
const adultAdd = document.getElementById("adult-add");
const adplus = document.getElementById("ad+");
adultAdd.addEventListener("click",() =>{ 
    adult++; 
    adplus.innerHTML = `${adult}`; 
});
const adultRem = document.getElementById("adult-rem");
adultRem.addEventListener("click",()=>{
    if(adult>0){
        adult--;
        adplus.innerHTML = `${adult}`;
    }
});
/////child count function////////
const childAdd = document.getElementById("child-add");
const cdplus = document.getElementById("cd+");
childAdd.addEventListener("click",() =>{ 
    child++; 
    cdplus.innerText = `${child}`; 
});
const childRem = document.getElementById("child-rem");
childRem.addEventListener("click",()=>{
    if(child>0){
        child--;
        cdplus.innerText = `${child}`;
    }
});
/////foreighn adult count function///////
const fadultAdd = document.getElementById("Fadult-add");
const fadplus = document.getElementById("fad+");
fadultAdd.addEventListener("click",() =>{ 
    fadult++; 
    fadplus.innerHTML = `${fadult}`; 
});
const fadultRem = document.getElementById("Fadult-rem");
fadultRem.addEventListener("click",()=>{
    if(fadult>0){
        fadult--;
        fadplus.innerHTML = `${fadult}`;
    }
});
/////foreighn child count function////////
const fchildAdd = document.getElementById("Fchild-add");
const fcdplus = document.getElementById("fcd+");
fchildAdd.addEventListener("click",() =>{ 
    fchild++; 
    fcdplus.innerText = `${fchild}`; 
});
const fchildRem = document.getElementById("Fchild-rem");
fchildRem.addEventListener("click",()=>{
    if(fchild>0){
        fchild--;
        fcdplus.innerText = `${fchild}`;
    }
});
/////infant count function////////
const infantAdd = document.getElementById("infant-add");
const iplus = document.getElementById("i+");
infantAdd.addEventListener("click",() =>{ 
    infant++; 
    iplus.innerText = `${infant}`; 
});
const infantRem = document.getElementById("infant-rem");
infantRem.addEventListener("click",()=>{
    if(infant>0){
        infant--;
        iplus.innerText = `${infant}`;
    }
});

///      order detail table creation ////
var myTableDiv = document.getElementById("myDynamicTable");
var table = document.createElement('TABLE');
table.border = '1';
var tableBody = document.createElement('TBODY');
const thead = ["Name","Local","Foreign","Infant","Cost"];
table.appendChild(tableBody);
var tr = document.createElement('TR');
      tableBody.appendChild(tr); 
      for (var j = 0; j < 5; j++) {
        var td = document.createElement('TD');
        
        td.appendChild(document.createTextNode(thead[j]));
        tr.appendChild(td);
      }

///   add to order button   ////
btnAdd.addEventListener("click",btnclick);
function btnclick(){
    if(duration.value=="quater"){//cost calculation
        cost = adult*adultPass+child*childPass+fadult*FadultPass+fchild*FchildPass;
      }
      else if(duration.value=="half"){
        cost = (adult*adultPass+adult*halfLocal+child*childPass+child*halfLocal)+(fadult*FadultPass+fadult*halfFor+fchild*FchildPass+fchild*halfFor);
      }
      else{
        cost = (adult*adultPass+adult*fullFor+child*childPass+child*fullFor)+(fadult*FadultPass+fadult*fullFor+fchild*FchildPass+fchild*fullFor);
      }
      Totalcost = Totalcost+cost;

      //add order detail table data
    const trow = [fname.value,"Adult "+adult+" Child "+child, "Adult "+fadult+" Child "+fchild,infant,cost,];
    var tr = document.createElement('TR');
      tableBody.appendChild(tr); 
      for (var j = 0; j < 5; j++) {
        var td = document.createElement('TD');
        
        td.appendChild(document.createTextNode(trow[j]));
        tr.appendChild(td);
      }
      myTableDiv.appendChild(table);
      console.log(Totalcost);
}









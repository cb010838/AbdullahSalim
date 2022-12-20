
var fname = document.getElementById("fName");
const mobile= document.getElementById("mobile");
const email = document.getElementById("email");
const email2 = document.getElementsById("email2");
const duration = document.getElementById("duration");
const btnAdd = document.getElementById("addToOrder");
const btnDelete = document.getElementById("delete-btn");
const txtOutput= document.getElementById("output");

let child;let fadult;//variable declaration
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
/*var myTableDiv = document.getElementById("myDynamicTable");
var table = document.createElement('TABLE');
table.border = '1';
var tableBody = document.createElement('TBODY');
const thead = ["Name","Local","Foreighn","Infant","Cost"];
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
        cost = (adult*adultPass+adult*fullL+child*childPass+child*fullFor)+(fadult*FadultPass+fadult*fullFor+fchild*FchildPass+fchild*fullFor);
      }
      Totalcost = Totalcost+cost;

      //add order detail table data
    const trow = [fname.value,"Adult "+adult+" Child "+child, "Adult "+fadult+" Child "+fchild,infant,cost];
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


























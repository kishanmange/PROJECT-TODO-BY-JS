
let card1 = document.getElementById("box1");
let body = document.querySelector("body");
let card = document.createElement("div");

card.innerHTML = ` <div class="card1" id="box1">
<span class="c1">Add New List</span>
<input type="text" class="inp"  id="inputtext"/> <span  id="99">
<button id="b98" onclick= 'addbranch()'>Add</button> <button id="b97" onclick="cloceme()">Close</button> </span>
</div> `;

function callme() {
  body.appendChild(card);
  card.style.display = "block";
}
function cloceme() {
  card.style.display = "none";
  let c1= document.getElementById("popup2")
  c1.style.display = "none";
}

let data = [];
let cardId;


function addbranch() {
  let inputtext = document.getElementById("inputtext").value;
  let item = {
    id: new Date().getTime(),
    title: inputtext,
content : [],
  };

  console.log(inputtext);
  if (inputtext) {
   
    data.push(item);
    arraydata();
    console.log(item);
    console.log(data);
  } else {
    // let branchcard = document.querySelector("#branchcard")
    // branchcard.style.display= 'block'
    alert(" Please Add Something Task");
  }
  document.getElementById("inputtext").value = "";
  cloceme();
}

function arraydata() {
  const cardcontainer = document.querySelector("#card-container");
  let child = "";
  for (let i = 0; i<data.length; i++) {
    console.log("data[i]:", data[i]);
    console.log(data[i].title);
    child += `<div class="branchcard" id ='card_${data[i].id}'> <h2 class="heading">${data[i].title}
    </h2>
     <hr> 
     <ul id = "content-list-${data[i].id}">
     
     </ul>

    <div class ="end2btn"> 
    <button onclick="DeleteCard(${data[i].id})">delete</button> 
    <button onclick="showAddContentPopup(${data[i].id})">Add</button></div></div>`;
  }
  
  cardcontainer.innerHTML = child;
}



function DeleteCard(id){
  const cardcontainer = document.getElementById("card-container");
const cdel2 = `card_${id}`;
const card =document.getElementById(cdel2);
console.log(card);
card.parentNode.removeChild(card);
data = data.filter(item => item.id != id);
console.log(id);



}

function showAddContentPopup(id){
  console.log(id);
 const popup2 = document.getElementById("popup2")
  popup2.style.display = "flex";
  cardId = id
  console.log(cardId);
}
// function AddContentToCard(){
  
// // const cardId = `card_${id}`;
// let contentListId = `content-list-${cardId}`;
// const  UL= document.getElementById(contentListId);

// console.log(UL);
// let inputtext2 = document.getElementById("inputtext2").value;


// console.log(inputtext2);

// // if (inputtext2) {
// //   document.getElementById("inputtext2").value = "";

// //   const linode = document.createElement ("li");
// //   linode.innerHTML = inputtext2;
// //  UL.appendChild(linode);
// //   cloceme();

// // } else {
// //   alert(" Please Add Something content");
// // }

// }
function AddContentToCard() {
  const contentListId = `content-list-${cardId}`;
  console.log(contentListId);
  const Ul = document.getElementById(contentListId);
  const contentText = document.getElementById('inputtext2').value;
  console.log(contentText);
  if (!contentText) {
      alert("Please add task name");
  } else {         
    document.getElementById('inputtext2').value = "";
    const liNode = document.createElement("li");

    liNode.innerHTML = contentText;
    Ul.appendChild(liNode);

    cloceme()
    // liNode.class
}
}

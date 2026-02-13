let bagobject;
firstload();
function firstload(){
  bagobject1();
  cardsummary();
}
function bagobject1(){
//console.log(bagitem)
bagobject=bagitem.map(itemid=> {
  for (let i = 0; i<cardItems1.length; i++){
    if(itemid==cardItems1[i].id){
      return cardItems1[i]
    }
  }
  for (let i = 0; i<cardItems2.length; i++){
    if(itemid==cardItems2[i].id){
      return cardItems2[i]
    }
  }
})
}
function cardsummary(){
  let cardSummary=document.querySelector('.adddiv');
  let html='';
  bagobject.forEach(bagI=> {
    html +=getdata(bagI);
  })
  cardSummary.innerHTML=html;
}

function removeItem(itemId){
  bagitem=bagitem.filter(itemID=> itemID !=itemId);
  localStorage.setItem('bagitem',JSON.stringify(bagitem));

  bagobject1();
  cardsummary();
  showicon();
  if(bagitem.length==0){
  let noitem=document.getElementById('noitem');
  noitem.innerText='No Items Added here !';
  }
}
if(bagitem.length==0){
  let noitem=document.getElementById('noitem');
  noitem.innerText='No Items Added here !';

}

function getdata(item){
  return `<div class="cardSummary">
     <div class="cardimg">
     <span class="span" onclick="removeItem(${item.id})">&times;</span>
     <img id="appleimg" src="../${item.image}">
     </div>
        <div class="addcard">
         <p>${item.item_name}</p>
         <span id="sp">(${item.item_per}% OFF)  </span><strike>₹ ${item.strike_price}</strike> <p id="rupee">₹ ${item.orig_price}</p>
         <p id="paras">${item.delivery_time}</p>
         <p>${item.item_quality}</p>
         <h3 id="fd">FREE Delivery</h3>
         <button class="btn">Order Place</button>
    </div>
  </div>`;
  
}


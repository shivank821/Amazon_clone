const cardItems1=[
 {
    id: '01',
    image:'images/app.jpg',
    item_name:'Dell Window 11pro',
    item_price:'₹49,999',
    item_quality:'Super fast best quality..',
    item_delivery:'FREE Delivery',
    delivery_time:'14 days under return time',
    item_per:'33',
    strike_price:'79,999',
    orig_price:'53,599',
  },
  
  {
    id: '02',
    image:'images/lap.jpg',
    item_name:'HP Window 11',
    item_price:'₹29,999',
    item_quality:'Best design and quality..',
    item_delivery:'FREE Delivery',
    delivery_time: '10 days under return time',
   item_per: '35',
   strike_price: '46,152',
   orig_price: '29,999',
  },
  
  {
   id: '03',
   image: 'images/laptop.jpg',
   item_name: 'Lenovo ThinkPad 10',
   item_price: '₹44,999',
   item_quality: 'Super fast..',
   item_delivery: 'FREE Delivery',
   delivery_time: '7 days under return time',
  item_per: '40',
  strike_price: '74,999',
  orig_price: '44,999',
  },
  
  {
  id: '04',
  image: 'images/laptop.png',
  item_name: 'Hp i5 8th generation',
  item_price: '₹39,999',
  item_quality: 'Super fast quality..',
  item_delivery: 'FREE Delivery',
  delivery_time: '5 days under return time',
  item_per: '25',
  strike_price: '53,332',
  orig_price: '39,999',
  }
  
]
const cardItems2=[
   {
   id: '05',
   image: 'images/oneplusnord.jpg',
   item_name: 'OnePlus Nord C2 5G',
   item_price: '₹45,999',
   item_quality: 'Design by OnePlus',
   item_delivery: 'FREE Delivery',
   delivery_time: '14 Feb 2026 at Sunday ',
  item_per: '20',
  strike_price: '57,499',
  orig_price: '45,999',
 },
 
 {
   id: '06',
   image: 'images/realme.jpg',
   item_name: 'Realme 10 pro 5G',
   item_price: '₹14,999',
   item_quality: 'Design by Realme',
   item_delivery: 'FREE Delivery',
   delivery_time: '21 Feb 2026 at Tuesday',
  item_per: '54',
  strike_price: '32,599',
  orig_price: '14,999',
 },
 
 {
   id: '07',
   image: 'images/ultra.jpg',
   item_name: 'Samsung S24 Ultra',
   item_price: '₹1,29,999',
   item_quality: 'Camera best quality..',
   item_delivery: 'FREE Delivery',
   delivery_time: '5 Feb 2026 at Sunday ',
  item_per: '45',
  strike_price: '2,36,499',
  orig_price: '1,29,999',
 },
 
 {
   id: '08',
   image: 'images/apple.jpg',
   item_name: 'iPhone 15',
   item_price: '₹59,999',
   item_quality: 'Design by Apple',
   item_delivery: 'FREE Delivery',
   delivery_time: 'Return before Sunday ',
  item_per: '33',
  strike_price: '89,499',
  orig_price: '59,999',
 }
];

let upbox=document.querySelector(".upbox");
//let hidepass1=document.querySelector('#hidepass1');
function showIcon1(){
  let passInp=document.querySelector('#input2');
  let len=passInp.value.length;
  //console.log(len)
  if(len==0){
    hidepass1.style.display="none";
  }
  else if(len>0){
    hidepass1.style.display="block";
  }
}
showIcon1()
function showPassword1(){
  let passInp=document.querySelector('#input2');
  if(passInp.type=='password'){
  passInp.type='text'
  hidepass1.src="images/showicon.png"
  }
  else if(passInp.type=='text'){
    passInp.type='password'
    hidepass1.src="images/hideicon.png"
  }
}


function loadgrids(){
let grid1=document.querySelector('#laptops .grid');
if(!grid1){
  return;
}
let cardHtml1=''
cardItems1.forEach(item => {
  cardHtml1 +=`
        <div class="box">
        <img id="laptop" src=${item.image}>
        <div class="a">
        <p>${item.item_name}</p>
        <h4>${item.item_price}</h4>
        <p>${item.item_quality}</p>
        <h4>${item.item_delivery}</h4>
        <button id="cardbtn" onclick="addPdt(${item.id})">Add to Card</button>
        </div>
      </div>`;
}); 

grid1.innerHTML=cardHtml1;

let grid2=document.querySelector('#mobiles .grid');
let cardHtml2=''
cardItems2.forEach(item => {
  cardHtml2 +=`
        <div class="box">
        <img id="mobile1" src=${item.image}>
        <div class="a">
        <p>${item.item_name}</p>
        <h4>${item.item_price}</h4>
        <p>${item.item_quality}</p>
        <h4>${item.item_delivery}</h4>
        <button id="cardbtn" onclick="addPdt(${item.id})">Add to Card</button>
        </div>
      </div>`;

});
grid2.innerHTML=cardHtml2;
}
let isLogin=false;
// get element 
let userName=document.querySelector('#user-name');
let outlog=document.querySelector('#logout');
let imgLog=document.querySelector('#imglogin');


const datas=JSON.parse(localStorage.getItem("login-detail")) || [];
if(localStorage.getItem("login-detail")==null){ 
  console.log('bad')
}
else{
//console.log(data[0].first_name)
//console.log(data.phone_num)
if (!localStorage.getItem("userlogin")) {
  outlog.innerHTML="Log in"
  console.log("User logged out");
}
 if(userName.innerHTML!=null){
  userName.innerHTML = `${datas[datas.length - 1].first_name} ›`;
   isLogin=true;
   
  localStorage.setItem("userlogin",JSON.stringify(isLogin)); 
  }

//console.log(imgLog)
imgLog.addEventListener("click",()=>{
  outlog.style.display="block";
  //loginagain()
  setTimeout(function(){
  outlog.style.display="none";
  },4000)
  })
}


function logout(){
  if(isLogin){
  userName.innerHTML=null;
  //let outlog2=document.querySelector('#logout');
  isLogin=false;
  outlog.innerHTML="Log in";
  outlog.style.display="block";
  localStorage.removeItem("userlogin");
  localStorage.setItem("userlogin",JSON.stringify(isLogin)); 
  outlog.addEventListener("click",()=>{
    loginagain();
  setTimeout(function(){
  outlog.style.display="none";
  },4000)
   })
  
}
}
function loginagain(){
  upbox.classList.add('showbox');
  document.body.classList.add("no-scroll");
  document.querySelector('.overlay').style.display="block";
//}
span.addEventListener('click',()=> {
document.body.classList.remove("no-scroll");
document.querySelector('.overlay').style.display="none";
  upbox.classList.remove('showbox');
  input1.classList.remove('inputnew');
  input2.classList.remove('inputnew');
  input1.style.background='#fff';
  input2.style.background='#fff';
  para1.innerHTML=''
  para2.innerHTML=''
  input1.value=''
  input2.value=''
})
}
//let upbox=document.querySelector(".upbox");
function loginbtn(){
  if(localStorage.getItem("login-detail")==null){
  upbox.classList.add('showbox');
  document.body.classList.add("no-scroll");
  document.querySelector('.overlay').style.display="block";
//}
span.addEventListener('click',()=> {
document.body.classList.remove("no-scroll");
document.querySelector('.overlay').style.display="none";
  upbox.classList.remove('showbox');
  input1.classList.remove('inputnew');
  input2.classList.remove('inputnew');
  input1.style.background='#fff';
  input2.style.background='#fff';
  para1.innerHTML=''
  para2.innerHTML=''
  input1.value=''
  input2.value=''
})
}else{
  return
  }
}
const login =()=>{
  let input1=document.querySelector('#input1');
  let lenth1=input1.value.length;
  let input2=document.querySelector('#input2');
  let lenth2=input2.value.length;
  let para1=document.querySelector('#para1');
  let para2=document.querySelector('#para2');
  showIcon1()
if(localStorage.getItem("login-detail")==null){
  if(lenth1 == 0){
  para1.innerHTML = 'Phone number is required';
  input1.classList.add('inputnew');
    input1.style.background='#FEDCDC';
    input1.type="number"
  }
  else if(lenth1<=9 || lenth1>10){
    input1.classList.add('inputnew');
    input1.style.background='#FEDCDC';
    para1.innerHTML='Please enter valid number';
  }
  else if(input1.value!=data.phone_num){
    para1.innerHTML ='Account not found this number';
    input1.classList.add('inputnew');
    input1.style.background='#FEDCDC'; 
  }
  if(lenth2==0){
  para2.innerHTML = 'Password is required';
  input2.classList.add('inputnew');
  input2.style.background='#FEDCDC';  
  }
  else if(lenth2<=7 || input2.value!=data[0].password || input1.value!=data.phone_num){
    input2.classList.add('inputnew');
    input2.style.background='#FEDCDC';
    para2.innerHTML='Incorrect password';
  }
}else{
  //After first function call it check 
  if(input1.value==datas[0].phone_num){
    para1.innerHTML=''
    input1.classList.remove('inputnew')
    input1.style.background='#fff';
  }
  //Fist function call
   if (lenth1 == 0){
  para1.innerHTML = 'Phone number is required';
  input1.classList.add('inputnew');
    input1.style.background='#FEDCDC';
    input1.type="number"
  }
  else if(lenth1<=9 || lenth1>10){
    input1.classList.add('inputnew');
    input1.style.background='#FEDCDC';
    para1.innerHTML='Please enter valid number';
  }
  else if(input1.value!=datas[0].phone_num){
    para1.innerHTML ='Account not found this number';
    input1.classList.add('inputnew');
    input1.style.background='#FEDCDC';
    }
  if(input2.value==datas[0].password){
    input2.classList.remove('inputnew');
    input2.style.background='#fff';
    para2.innerHTML='';
  }
  if(lenth2==0){
    para2.innerHTML = 'Password is required';
  input2.classList.add('inputnew');
    input2.style.background='#FEDCDC';
  }
  else if(lenth2<=7 || input2.value!=datas[0].password || input1.value!=datas.phone_num){
    input2.classList.add('inputnew');
    input2.style.background='#FEDCDC';
    para2.innerHTML='Incorrect password';
  }
}  
 
  if(input1.value==datas[0].phone_num && input2.value==datas[0].password){
     isLogin=true;
    if(isLogin){
    document.querySelector('#user-name').innerHTML=`${datas[0].first_name} ›`;
    document.querySelector('#logout').innerHTML="LogOut"
      input1.value=''
      input2.value=''
    }
    upbox.classList.remove('showbox');
    document.querySelector('.waiting-box').style.display="block";
    setTimeout(function(){
    document.querySelector('.waiting-box').style.display="none";
    document.querySelector('.overlay').style.display="none";
    document.body.classList.remove("no-scroll");
    },2000)
    
  }
  
}
let bagitem;
function loaddata(){
let bagstring=localStorage.getItem('bagitem');
bagitem=bagstring?JSON.parse(bagstring): [];
  loadgrids();
}
loaddata();
function addPdt(itemid){
  bagitem.push(itemid);
  localStorage.setItem('bagitem',JSON.stringify(bagitem));
  
  showicon();
  
}
const cardBtn = document.querySelectorAll("#cardbtn");
cardBtn.forEach(button => {
  button.addEventListener("click", function (){
    this.disabled = true;
  })
})


function showicon(){
let showitem=document.querySelector('#add-podt');
  if(bagitem.length>0){
  showitem.style.visibility="visible"  
  showitem.innerText=bagitem.length;
  }else if(bagitem.length==0){
    showitem.style.visibility="hidden";
    showitem.innerHTML=bagitem.length;
  }

}
showicon()
//menu slidebar
function openMenu() {
  document.getElementById("mobileMenu").style.transform = "translateX(0)";
  document.body.classList.add("no-scroll");
  document.querySelector('.overlay').style.display="block";
}

function closeMenu() {
  document.getElementById("mobileMenu").style.transform = "translateX(-100%)";
  document.body.classList.remove("no-scroll");
  document.querySelector('.overlay').style.display="none";
}


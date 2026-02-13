let main=document.querySelector('.main');
let btn=document.querySelector('.btn');
let inpval=document.querySelector('#inp4');
function showIcon(){
  let len=inpval.value.length;
  //console.log(len)
  if(len==0){
    hidepass.style.display="none";
  }
  if(len>0){
    hidepass.style.display="block";
  }
}
//showIcon()
function showPassword(){
  if(inpval.type=='password'){
  inpval.type='text'
  hidepass.src="../images/showicon.png"
  }
  else if(inpval.type=='text'){
    inpval.type='password'
    hidepass.src="../images/hideicon.png"
  }
}


let data=[]
function createAcc(){ 
  let input1=document.querySelector("#inp1");
  let lenFirst=input1.value.length;
  let input2=document.querySelector("#inp2");
  let lenLast=input2.value.length;
  let input3=document.querySelector("#inp3");
  let lenth1=input3.value.length;
  let input4=document.querySelector("#inp4");
  let lenth2=input4.value.length;
  let para1=document.querySelector("#para1");
  let para2=document.querySelector("#para2");
  let para3 = document.querySelector("#para3");
  let para4 = document.querySelector("#para4");
showIcon()
let data = JSON.parse(localStorage.getItem("login-detail")) || [];
//console.log(data.length)
if(lenFirst==0 || lenLast==0 || lenth1==0 || lenth2==0){
  console.log('no data add')
}
else {
const login_data = {
  first_name: input1.value,
  last_name: input2.value,
  phone_num: input3.value,
  password: input4.value
};
//console.log(data.first_name)
data.push(login_data);
//console.log(data[data.length-1].first_name)

localStorage.setItem("login-detail", JSON.stringify(data));
}
//console.log(datas.first_name)
  //For phone number 
  //After first function call then check 
  if(para3.innerHTML=='Please enter valid number'){
    para3.innerHTML=''
    input3.classList.remove('newinput')
    input3.style.background='#fff';
  }
  if(para3.innerHTML='Phone number is required' && lenth1==10){
    para3.innerHTML=''
    input3.classList.remove('newinput')
    input3.style.background='#fff';
  }
  //after first and last name check 
  if(para1.innerHTML='Please enter your First Name'){
    input1.classList.remove('newinput');
    input1.style.background='#fff';
    para1.innerHTML='';  
  }
  if(para2.innerHTML='Please enter your Last Name'){
    input2.classList.remove('newinput');
    input2.style.background='#fff';
    para2.innerHTML='';  
  }
  //for first and last name 
  if(lenFirst==0){
    para1.innerHTML='Please enter your First Name';
    input1.classList.add('newinput');
  }
  if(lenLast==0){
    para2.innerHTML='Please enter your Last Name';
    input2.classList.add('newinput');
  }
  //Fist function call
   if (lenth1 == 0){
  para3.innerHTML = 'Phone number is required';
  input3.classList.add('newinput');
  //input3.type="number"
  }
  else if(lenth1<=9 || lenth1>10){
    input3.classList.add('newinput');
    
    para3.innerHTML='Please enter valid number';
  }else{
    //console.log('ok')
  }
  //for password 
  if(para4.innerHTML=='Password is required with at least 8 digit or alphabet' && lenth2>=8){
    input4.classList.remove('newinput');
    input4.style.background='#fff';
    para4.innerHTML='';
  }
  
  if(lenth2<=7){
    input4.classList.add('newinput');
    para4.innerHTML='Password is required with at least 8 digit or alphabet';
  }
  //for account create 
  if(lenFirst>0 && lenLast>0 && lenth1==10 && lenth2>=8){
  document.querySelector('.overlay').style.display="block";
    document.querySelector('.waiting-box').style.display="block";
    setTimeout(function(){
    document.querySelector('.waiting-box').style.display="none";
    document.querySelector('.overlay').style.display="none";
    document.querySelector('.main').style.display="none"
    document.querySelector('.home-page').style.display="block"
    },2000)
  }
}
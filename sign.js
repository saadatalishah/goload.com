function local(){


var user=document.getElementById('n.inp').value;
var email=document.getElementById('p.inp').value;
var pass=document.getElementById('e.inp').value;
var repass=document.getElementById('re.inp').value;
console.log(user,email,pass,repass);
user={
  usename:user,
  useremail:email,
  password:pass
}
var item=localStorage.getItem(email);
if(pass!=repass)
{
  alert('Password doesnot match retype password');
}
if(pass===repass && item==null)
{
  localStorage.setItem('userdata',JSON.stringify(user));
  console.log(localStorage);
  window.location.replace('login.html')
}
else if(item!=null)
{
  alert('this email is already present');
}
console.log(localStorage.getItem(email));
}
function login()
{
  
var user=document.getElementById('n.inp').value;
var email=document.getElementById('p.inp').value;
var pass=document.getElementById('e.inp').value;

var loginitem=localStorage.getItem('userdata');
console.log(JSON.parse(loginitem));
var user=JSON.parse(loginitem);
console.log(user.password);
if(user.password!=pass)
{
  alert('Password or email is not correct');
}
else if(user.password==pass)
{
  window.open("drivers.html");
}
  
}







// var div1=document.getElementById('mini-suzuki');
// var div2=document.getElementById('mini-truck');
// console.log(div1,div2);

// var count=0;
// function first()
// {
// count++;
//   div2.style.display='none';
  
//   var div=document.createElement('div');
//   var h1=document.createElement('h1');
//   var p=document.createElement('p');
  
//   var h1_text=document.createTextNode('k0i bhe div');
//   var p_text=document.createTextNode('koi sa bhi');

//   h1.appendChild(h1_text);
//   p.appendChild(p_text);
//   div.appendChild(h1);
//   div.appendChild(p);
//   if(count%2!=0)
// {div1.appendChild(div);}
//   div1.style.display='block';
//   console.log(div1);
// }
// function second()
// {
// div1.style.display='none';
// count++;
// var div=document.createElement('div');
// var h1=document.createElement('h1');
// var p=document.createElement('p');

// var h1_text=document.createTextNode('ki bhe div');
// var p_text=document.createTextNode('kuch bhi');
// h1.appendChild(h1_text);
// p.appendChild(p_text);
// div.appendChild(h1);
// div.appendChild(p);
// if(count%2!=0){
// div2.appendChild(div);

// }
// div2.style.display='block';
// console.log(div2);
// }
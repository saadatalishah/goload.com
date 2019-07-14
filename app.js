var database=firebase.database().ref("/");
var dbchild='mini truck';
var counter=0;//counter for the booking function

// var users=database.child('user').push(drivers).key;
console.log(localStorage.getItem('userdata'));
// var userdata=localStorage.getItem('userdata');
// var user=database.child('user').push(userdata);



//all the elements to be used in booking function for generating order ticket
var order_user=document.getElementById('o.username');
var order_driver=document.getElementById('o.driver');
var order_address=document.getElementById('o.address');
var order_phone=document.getElementById('o.phone');
var order_item=document.getElementById('o.items');
var Order_id=document.getElementById('order_id');

//drivers.html kai div ki id
var form=document.getElementById("user-form");
var order_ticket=document.getElementById("display-order");
form.style.display='none';
order_ticket.style.display='none';
var activelink=document.getElementById('active1');
var activelink2=document.getElementById('active2');
var x=0;
var i;
var keys=[];
function myfunc(){
  var name=' KAMRAN ALI';
  var number=' 0313108904';
  var licence_plate=' KLL-310';
    var drivers={
      name:name,
      input1:number,
      input2:licence_plate,
      previous_exp:' New on this platform',
      category:'mini truck'

    };
    keys=database.child('mini truck').push(drivers).key;
  }

var db=database.child('mini truck').on('child_added',function(snapshot){
  var value=snapshot.val();
  console.log(value);

var div=document.createElement('div');
 var div2=document.createElement('div');
 var img_div=document.createElement('div');
 var h2=document.createElement('h2');
 var hr=document.createElement('hr');
 var div_name=document.createElement('p');
 var div_contact=document.createElement('p');
 var div_reg=document.createElement('p');
 var experience=document.createElement('p');
 var img=document.createElement('img');
 if(value.category=='truck')
{
  img.src="truckload2.png"

}
if(value.category=='mini truck')
{
 img.src="truckload.jpg";
}


 var input=document.createElement('input');


  var para1=document.createElement('p');
  var para2=document.createElement('p');
  var para3=document.createElement('p');
  var para4=document.createElement('p');
  var plateno_para=document.createElement('p');
  var btn=document.createElement('button');
  var br1=document.createElement('br');
  var br2=document.createElement('br');
  var br3=document.createElement('br');
  var btn_br=document.createElement('br');



var name_txt=document.createTextNode('NAME: ');
var contact_txt=document.createTextNode('CONTACT: ');
var car_no=document.createTextNode('CAR_NO: ');
var exp_txt=document.createTextNode('EXPERIENCE:');
var heading_text=document.createTextNode("DRIVER ID: "+value.id);
var button_name=document.createTextNode('BOOK GO');

  var text=document.createTextNode(" "+value.name);
  var text1=document.createTextNode(" "+value.input1);
  var text2=document.createTextNode( " "+value.input2);
  var text3=document.createTextNode(" "+value.previous_exp);

  document.body.appendChild(div);
  var maindiv=document.getElementsByTagName('div');
  console.log(maindiv);


  //image div append
  div.appendChild(h2);
  div.appendChild(img_div);
  img_div.appendChild(img);

  div.appendChild(div2);
  para1.appendChild(text);
  para2.appendChild(text1);
  para3.appendChild(text2);
  para4.appendChild(text3);
  btn.appendChild(button_name);


  //all the appendig of text for drivers div are here
  div_name.appendChild(name_txt);
  div_contact.appendChild(contact_txt);
  div_reg.appendChild(car_no);
  experience.appendChild(exp_txt);
  h2.appendChild(heading_text);
  
  // div2.appendChild(h5)
  div2.appendChild(div_name);
  div2.appendChild(para1);
  div2.appendChild(br1);
  div2.appendChild(div_contact);
  div2.appendChild(para2);
  div2.appendChild(br2)
  div2.appendChild(div_reg);
  div2.appendChild(para3);
  div2.appendChild(br3);
  div2.appendChild(experience);
  div2.appendChild(para4);
  div2.appendChild(btn_br);
  div2.appendChild(btn);

var div_array=[];
for(var i=0; i<20;i++)
{
  div_array=maindiv;
  console.log(div_array);
}




//ALL ELEMENTS ARE CREATED HERE
  var btndiv2=document.createElement('button');
  var pricetag=document.createElement('h3');
  var book_div=document.createElement("div");
   div.className='main-div';
  div2.className='booking-div';
  //h2.className='snapshot';
  //input.className='input';
  para1.className='para1';
  para2.className='para1';
  para3.className='para1';
  para4.className='para1';
  btndiv2.className='div2-btn';
  pricetag.className='pricetag';
  img_div.className='image_div';
  btn.className='first_btn';
  h2.className='driver_info';
  img.className='image';
  btn.onclick=function go(){
    // div.style.display='none';
    var book_form=document.getElementById('nav-bar');
    book_form.style.display='none';
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
    console.log(snapshot.val().input2);
      var show_category=document.getElementById('category');
      var show_regplate=document.getElementById('driver');
      show_category.value=snapshot.val().category;
      show_regplate.value=snapshot.val().input2;
    for(var i=0; i<div_array.length;i++)
    {
      var hidediv;
      hidediv=div_array[i];
      console.log(hidediv)
      hidediv.style.display='none';
    }
    form.style.display='block';
    //var bodytag=document.getElementsByTagName('body');
    document.body.style.background="url('movers4.jpg')";
    

  }
})
function highlight1(){
  activelink2.className='mini truck';
  activelink.className='active-truck';  
  console.log(activelink,activelink2);
  document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;

}

function highlight2(){
  console.log(activelink,activelink2);  
  activelink2.className='active-truck';
  //activelink.className='mini-truck';
  console.log(activelink,activelink2);
  window.scrollTo(0,500);
 
}

function booking(){
 
  var user=document.getElementById('username').value;
  var driver=document.getElementById('driver').value;
  var address=document.getElementById('address').value;
  var phone=document.getElementById('phone').value;
  var item=document.getElementById('items').value;
  var cat=document.getElementById('category').value;
  var distance=document.getElementById('distance').value;
  var date=document.getElementById('date').value;
  console.log(driver);
var cal_price;
  if(cat=='mini truck')
  {
     cal_price=(100*distance*2)+(100*item);
     console.log(cal_price);

  }
  if(cat=='truck')
  {
     cal_price=(300*distance*2)+(100*item);
  }

var db=database.child('mini truck').on('child_added',function(snapshot){
var book_value=snapshot.val();
console.log(book_value.input2,driver);
 if(book_value.input2==driver)
{
    console.log('match karaha hai!');
    var driverkey=snapshot.key;
    //console.log(driverkey);
   var db2=database.child('orders').on('child_added',function(snapshot2){
    // console.log(snapshot2.val().bok_date+"kitni bar chale ga");
    var old_order_date=snapshot2.val().bok_date;
     var old_order_id=snapshot2.val().driverid;
     var oldorder_key=snapshot2.key;
     var orders={
      name:user,
      drivers_name:driver,
      user_address:address,
      user_phone:phone,
      category:cat,
      items:item,
      user_distance:distance,
      bok_date:date,
      price:cal_price,
      driverid:driverkey
}
// if(old_order_id==driverkey && old_order_date!=date)
// {
//   counter++;
// }
    // console.log(old_order_id);
    //  if(old_order_date==date && old_order_id==driverkey)
    //  {
    //    counter++;
    //   //  console.log(date);
    //    alert('sorry! This driver is booked on this date');
    //    order_ticket.style.display='none'
    //    form.style.display='block';
    //  }
     if(counter==0)
     {
       counter++;
       //console.log(counter);
      orderkeys=database.child('orders').push(orders).key;
      order_user.innerHTML=user;
      order_driver.innerHTML=driver;
      order_address.innerHTML=address;
      order_item.innerHTML=item;
      Order_id.innerHTML=orderkeys;
      order_phone.innerHTML=cal_price;
      form.style.display='none';  
      order_ticket.style.display='block';
     }
    //  if(old_order_id==driverkey && old_order_date!=date)
    //  {
    //    counter++;
    //  }
    //  if(date==old_order_date)
    //  {
    //    console.log(old_order_date);
    //    alert('Sorry! Driver is already booked on this date:'+" " +date);
    //  }


})
}

})

}










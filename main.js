//console.log('Hello World!');
function TimeDay(){
  var dateTime = new Date();
  var hrs = dateTime.getHours()
  var min = dateTime.getMinutes()
  var sec = dateTime.getSeconds()
  var session = document.getElementById("session");
  
  
  document.getElementById("hours").innerHTML=hrs;
  document.getElementById("minutes").innerText=min;
  document.getElementById("seconds").innerHTML=sec;
  if(hrs >= 12){
    session.innerHTML="PM";
    
  } else{
    session.innerHTML="AM";
  }
  
  if(hrs > 24){
    hrs = hrs - 24;
  }
  // to set greetings
if(hrs >= 0 && hrs < 12) {
  document.getElementById("greet").innerHTML="Good Morning Uncle Blessing";
} 

else if(hrs == 12){
  document.getElementById("greet").innerHTML="Its Noon Uncle Blessing";
}
else if(hrs >= 12 && hrs <= 17){
  setTimeout(()=>{
    document.getElementById("greet").innerHTML="Good Afternoon Uncle Blessing";
  },5000)
  
}
else { 
  setTimeout(()=>{
    document.getElementById("greet").innerHTML = "Good Evening Uncle Blessing"
    
    
  },5000)
  }
  
}
setInterval(TimeDay,10);
/*

else if (hr >= 12 && hr <= 17) {
  document.write("Good Afternoon!");
} */
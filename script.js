const cursor =document.querySelector(".cursor");
var tiemout ;
 
//cursor movement
document.addEventListener("mousemove", (e)=>{
  let x =e.pageX;
  let y =e.pageY;
  cursor.style.top= y+'px';
  cursor.style.left= x+'px';

  cursor.style.display= 'block';

  //stop animation
  function  mousStop(){
  cursor.style.display= 'none';
  }

// hide animation
clearTimeout(timeout);
timeout = setTimeout(mousStopped, 1000);
});

//out]

document.addEventListener("mouseout",() =>{
  cursor.style.display= 'none';

})


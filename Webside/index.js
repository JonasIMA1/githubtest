const hourEl = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm")

function updateClock()
{
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm ="AM";

  if(h > 12)
  {
    ampm ="PM";
  }
  

  //if(h < 10)
  //{
   // h = "0" + h;
  //}

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
/*
  if(s < 10)
  {
    s = "" + s;
  }
  if(s < 10)
*/

//if (m < 10)
//{
  // m= "0" + m;
//}
  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000)
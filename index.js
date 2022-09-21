const time = document.getElementById ('time');

function showTime () {
  let today = new Date (),
      hour = today.getHours(),
      min = today.getMinutes();
  // set Am or Pm might remove later
  const AmPm = hour >= 12 ? 'PM' : 'AM';
  
  //output time
  time.innerHTML =`${hour}<span>:</span>${addZero(min)}`;
  
  setTimeout(showTime, 1000);
}

function addZero(n) {
return (parseInt (n, 10) < 10 ? '0' : '') + n;
}

showTime();

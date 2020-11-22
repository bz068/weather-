



 
fetch('https://api.weatherapi.com/v1/current.json?key=c3314bef8e5a42c792c72531202011&q=London').then(res => res.json()).then(data => {
    document.getElementById('location').innerHTML = data.location.region;
    document.getElementById('deg').innerHTML = data.current.temp_c + 'o'.sup();
    document.getElementById('msg').innerHTML = data.current.condition.text;
    


});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


// document.getElementById('location').innerHTML = 'res';

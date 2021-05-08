let time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    sobriquet = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime(){
  let today = new Date (),
  // let today = new Date (2021, 05, 08, 8, 30, 40),
      hour = today.getHours(),
      minute = today.getMinutes(),
      second = today.getSeconds();

  let amPm = hour >= 12 ? 'PM' : 'AM';
  time.innerHTML = `${addZeros(hour)}:${addZeros(minute)}:${addZeros(second)} ${amPm}`;

  // update time every second
  setTimeout(showTime, 1000);
}

function addZeros(n) {
  return (parseInt(n) < 10 ? '0' : '') + n;
}

function setBgGreeting() {
  let today = new Date (),
  // let today = new Date (2021, 05, 08, 8, 30, 40),
  hour = today.getHours();

  let body = document.body;
  // morning - 4:00:00am - 11:59:59am
  if (hour >= 4 && hour < 12) {
    greeting.innerHTML = "Good Morning" ;
    body.className = "morning";
  }
  // afternoon - 12:00:00pm - 7:59:59pm
  else if (hour >= 12 && hour < 20) {
    greeting.innerHTML = "Good Afternoon" ;
    body.className = "afternoon";
  }
  // evening - 8:00:00pm - 3:59:59am
  else {
    greeting.innerHTML = "Good Evening" ;
    body.className = "evening";
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    sobriquet.textContent = '[Enter Name]'
  } else {
    sobriquet.textContent = localStorage.getItem('name')
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setEditableText(e){
  if (e.type === 'keypress') {
    if (e.keyCode == 113 || e.key == 'Enter') {
      localStorage.setItem(`${e.target.id}`, e.target.innerText);
      if (e.target.innerText === '') {
        e.target.textContent = `[Enter ${e.target.id}]`;
      }
      e.target.blur();
    }
  } else {
    localStorage.setItem(`${e.target.id}`, e.target.innerText);
  }
}

sobriquet.addEventListener('keypress', setEditableText);
sobriquet.addEventListener('blur', setEditableText);

focus.addEventListener('keypress', setEditableText);
focus.addEventListener('blur', setEditableText);

showTime();
setBgGreeting();
getName();
getFocus();

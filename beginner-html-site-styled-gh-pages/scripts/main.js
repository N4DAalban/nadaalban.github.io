
//كود تغيير الصوره باستخدام الدوم


let cat1 =document.querySelector('img');
 cat1.onclick=function(){
let catsrc=cat1.getAttribute('src');
if (catsrc==='images/firefox-icon.png') {
 cat1.setAttribute('src','images/c1.png')
} else {
 cat1.setAttribute('src','images/firefox-icon.png')
}
 }

// كود خاص بالترحيب
 let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

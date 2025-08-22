let booster = document.querySelector('.booster');
let firstbar = document.querySelector('#first-bar');
let secondbar = document.querySelector('#second-bar');
firstbar.addEventListener('click', function() {
  booster.classList.add('show');
});
secondbar.addEventListener('click', function() {
    booster.classList.remove('show');
});
//Open =====Section===========================Dashboard//
function dashboard(){
const open = document.querySelector('.open');
const navies = document.querySelector('.navigators');
open.classList.add('active');
navies.style.display = "none";
document.querySelector('.booster').classList.remove('show');
};
function leftarrow() {
  
  document.querySelector('.open').classList.remove('active');
  document.querySelector('.navigators').style.display = "block";
}
//===================================================================//
//========list====================section======================//
function linktosupport() {
  const support = document.querySelector('.support');
  support.classList.add('active');
};
function returndashboard() {
  const support = document.querySelector('.support');
  support.classList.remove('active');
}
//===============================================================//
//=========LOGIN================INTERFACE========//
function logindashboard() {
  const login = document.querySelector('.login');
 login.classList.add('active');
}
function revise() {
 document.querySelector('.login').classList.remove('active');
}
const menuBtn = document.querySelector('.menuBtn')
const menuItems = document.querySelector('.menuItems')
let menuState = true;
menuBtn.addEventListener('click', () => {
  if (menuState) {
     menuBtn.src = "images/icon-close.svg";
     menuItems.style.display = 'flex'
     menuState = false;
  } else {
     menuBtn.src = "images/icon-hamburger.svg";
     menuItems.style.display = 'none'
     menuState = true
  }

})

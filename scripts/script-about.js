// -------- mobile menu navigation STARTS --------
const navMenu = document.querySelector('.nav2');
const menuIcon = document.querySelector('.menu');
const cancleIcon = document.querySelector('.cancle');
const menuLinks = document.querySelectorAll('.mlink');

menuIcon.addEventListener('click', () => {
  navMenu.setAttribute('item-visibility', 'true');
});

cancleIcon.addEventListener('click', () => {
  navMenu.setAttribute('item-visibility', 'false');
});

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    navMenu.setAttribute('item-visibility', 'false');
  });
}
// -------- mobile menu navigation ENDS --------
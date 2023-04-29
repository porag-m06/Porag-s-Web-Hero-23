import mentors from './data.js';

const mtrGrid = document.querySelector('.mentor');

for (let i = 0; i < mentors.length; i += 1) {
  const mtrDiv = document.createElement('div');
  mtrDiv.innerHTML = `<a href="${mentors[i].detailsLink}">
            <img src=${mentors[i].imgSrc} alt="">
            <div class="mtr-detail">
                <h3>${mentors[i].name}</h3>
                <h5> ${mentors[i].designation}</h5>
                <div class="line"></div>
                <p>${mentors[i].summary}</p>
            </div>
        </a>`;

  mtrGrid.append(mtrDiv);
}

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
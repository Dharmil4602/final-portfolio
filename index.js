const openMenuBtn = document.querySelector(`#open-menu-btn`);
const closeMenuBtn = document.querySelector(`#close-menu-btn`);
const menu = document.querySelector(`.nav-menu`);

openMenuBtn.addEventListener(`click`, ()=> {
    menu.style.display = `block`;
    closeMenuBtn.style.display = `block`;
    openMenuBtn.style.display = `none`;
})

closeMenuBtn.addEventListener(`click`, ()=> {
    menu.style.display = `none`;
    closeMenuBtn.style.display = `none`;
    openMenuBtn.style.display = `block`;
})
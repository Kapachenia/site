export const burger = (burger, menu) => {
  burger.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.burger')) {
      if(!burger.classList.contains('burger--active')) {
        burger.classList.add('burger--active');
        menu.classList.add('nav__burger--active');
      } else {
        burger.classList.remove('burger--active');
        menu.classList.remove('nav__burger--active');
      }
    }
  });
}
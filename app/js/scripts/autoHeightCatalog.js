export const autoHeightCatalog = () => {
  const texts = document.querySelectorAll('.catalog__item-text');
  let arr = [];

  texts.forEach(text => {
    arr.push(text.clientHeight);
  })
  const maxHeight = Math.max(...arr);
  texts.forEach(text => {
    text.style.height = `${maxHeight}px`;
  })
}
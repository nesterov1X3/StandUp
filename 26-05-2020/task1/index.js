const el1 = document.querySelector('li')
const el2 = document.querySelectorAll('li')
// console.log(el1);
// console.log(el2);

const elements = Array.from(el2).map(el =>el.textContent)
// console.log(elements);
// console.log(elOne);
const elOne = document.createElement('li')
const listEl = document.querySelector('.list')
elOne.textContent = 1;
listEl.prepend(elOne)


const elTwo = document.createElement('li')
elTwo.textContent = 8;
elTwo.setAttribute('data-number', 9)
listEl.append(elTwo)



const elThree = document.createElement('li')
const listEl1 = document.querySelector('.special')
elThree.textContent = 4;
listEl1.before(elThree)


const elFourh = document.createElement('li')
// const listEl1 = document.querySelector('.special')
elFourh.textContent = 6;
listEl1.after(elFourh)

// console.log(itemElem.textContent);

// itemElem.onclick = function(){
//     console.log('b'); 
// }

const itemElem1 = document.querySelector('.list-item');
function sayHi(){
    console.log(event.target.textContent);
    // console.log(itemElem1.textContent);
}
itemElem1.addEventListener('click', sayHi)

//2=====================

const itemElem2 = document.querySelector('.list-item:nth-child(2)');

itemElem2.addEventListener('click', sayHi)

//3=====================

const itemElem3 = document.querySelector('.list-item:nth-child(3)');

itemElem3.addEventListener('click', sayHi)
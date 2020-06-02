const listElem = document.querySelector('.list')
    // const itemElems = document.querySelectorAll('.list-item');
    // console.log(itemElems);
    function sayHi(event) {
      if(event.target.classList.contains('list-item')){
      console.log(event.target.textContent);
      }
    }
    // itemElems.forEach((listItemElem) => {
    //   listItemElem.addEventListener('click', sayHi)
    // });

    // function onListClick(){
    //   console.log('list');
    // }
    listElem.addEventListener('click', sayHi)
    // window.addEventListener('click', (e) => {
    //   e.stopPropagation()
    //   console.log('window');
    // }, true);
    // document.addEventListener('click', () => {
    //   console.log('document');
    // });
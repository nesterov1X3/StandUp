const listElem = document.querySelector('.list')
   
    function sayHi(event) {
       
      if(event.target.classList.contains('list-item')){
      console.log(event.target.textContent);
      }
    
    }

    listElem.addEventListener('click', sayHi)
    // itemElems.forEach((listItemElem) => {
    //   listItemElem.addEventListener('click', sayHi)
    // });

    // function onListClick(){
    //   console.log('list');
    // }
    


    // window.addEventListener('click', (e) => {
    //   console.log('window');
    // });

    // document.addEventListener('click', () => {

    //   console.log('document');
    // });
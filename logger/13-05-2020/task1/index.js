//input: none
//output: obj
//1. create algo
//2. create proto
//3. testing
//1. producting solution

function createLogger(){
  let logs = [];
  function addMessage(type, text){
    logs.push({
      message:text,
      dateTime: new Date(),
      type: type
    });
  }
  //inpiut: string
  //output: none
  function warn(text){
    addMessage('warn', text);
  }
  //inpiut: string
  //output: none
  function error(text){
    addMessage('error', text);
  }
  //inpiut: string
  //output: none
  function log(text){
    addMessage('log', text);
  }

    //inpiut: string
    //output: arr
    function getRecords(text){

     let field = text ? logs.filter(el => el.type === text) : logs;
     return field.sort((a, b) => b.dateTime - a.dateTime);
    }

    


  return {
        warn,
        error,
        log,
        getRecords
  } 
}
let logger1 = createLogger();
logger1.warn('dsdsds')
logger1.warn('433443')
logger1.warn('fdgrwe')
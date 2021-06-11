
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */ 

var arrList=[
  "help",
  "exit",
  "list"
];
function onDataReceived(text) {
  
 if(text==="list\n"){
   displayList();
 }
  else if (text=== 'exit\n' || text==='quit\n') {
    quit();
  }
  else if(text.slice(0,5)=== 'hello'){
    
    hello(text);
  }
  else if(text==='help\n'){
    
    help();
  }
 else if(text.split(' ')[0]==='add' ) {
   addValue(text.substring(4).trim());
 }
 else if(text ==='remove\n'){
   removeValue(0);
 }
 else if(text.split(' ')[0]==='remove' && text.split(' ')[1].trim() !==""){
   
   removeValue(parseInt(text.split(' ')[1].trim())-1);
 }
 else if(text.split(' ')[0]==='edit\n' ){
   editValue(text.substring(4).trim());
 }

  else{
    unknownCommand(text);
  }

}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(h){
  const value= h.replace('hello',' ');
  
  if(value.trim().length ==0){
        console.log('hello!');
        
  }
  else{
    console.log('hello '+value.trim()+'!');
  }
  
  
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * Lists all the possible commands
 *
 * @returns {void}
 */

function help(){
  
  console.log('type the following commands\n hello\n or hello with any state  \n or quit\n or add\n or remove');
};
function addValue(text){
  if(text===''){
    console.log('error command add should take a task like "add x" ')
  }
  else{
    arrList.push(text);
  }
 };
 function removeValue(id){
  
  
      if(id===0){
        
        arrList.pop();
      }
     else if(id>=arrList.length){
       console.log('task number does not exisit');
     }
     
      else{arrList.splice(id,1)}
 }
function displayList(){
  for(let i=0; i < arrList.length ;i++){
        console.log(i+1 +' - [ ] '+ arrList[i]);
  }
}
function editValue(text){
  // console.log(text);
  // console.log(text.length);
  // console.log(parseInt(text));
  // console.log(arrList.length);
  // if(text===''){
  //   console.log('error command edit should take a task number and new text')
  // }
  // else if (text.includes('edit')===false && text !==''){
  //   console.log('edited last value of list');
  //   arrList.pop();
  //   arrList.push(text)
  // }
  
  
}


// The following line starts the application
startApp("christaphor harmandarian")

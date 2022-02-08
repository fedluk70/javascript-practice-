//let a =1, b='1';
//let result = (a !==b ) ? 'not equal' : 'equal' ;
// console.log(result);
/*let a = [4,5,7,8]
for ( b = 0; b < a.length; b++) {
    const c = array[b];
    console.log(c)
    
}
console.log(c)

/*let a= 'first'
function ScoopTest(){
    console.log(a);
    let b= 'second';

     if (a != '') {
         console.log();
         console.log('it is inside : b')
     } 
    }
    ScoopTest();*/
    

    //for( i= 0; i < 10 ; i = ++1) {
        //console.log(i);
    //}
    /*let user = {
        name: 'Jesse',
        contact: {
          email: 'codestackr@gmail.com'
        }
      }*/
    // counting 
            /* for(i=0; i<10; i++){
                console.count()
                }
                count();/

     /* console.log(user)
      console.log({user})*/
    //variations of  logs 
            /* console.log('Console Log')
            console.info('Console Info')
            console.debug('Console Debug')
            console.warn('Console Warn')
            console.error('Console Error')*/
     /* let isItWorking = false
      console.assert(isItWorking, "this is the reason why");*/
 //Groups 
      
                    /* console.log('I am not in a group')

                    console.group()
                    console.log('I am in a group')
                    console.log('I am also in a group')
                    console.groupEnd()
                    
                    console.log('I am not in a group')*/
     // Stack Trace 
                /*function one() {
                    two()
                }
                function two() {
                    three()
                }
                function three() {
                    console.trace()
                }
                one()*/
//Tables 
/*let devices = [
    {
      name: 'iPhone',
      brand: 'Apple'
    },
    {
      name: 'Galaxy',
      brand: 'Samsung'
    }
  ]
  console.table(devices);*/
 //Style 
 /*console.log("%c This is yellow text on a blue background.", "color:yellow; background-color:blue") */
 //const mix = [true, 'hi', null, 100, undefined];

 //mix.reverse();
 /*function numberChecker(){
    // The variable "number" is storing the prompt input as a string.
     const number = prompt("Enter a number to determine if it is odd or even")
     
     // Changes string into an integer for checking on line 9
     const parsedNumber = parseInt(number)
  
     // Checks to see if the modulo is equal to zero
     if(parsedNumber % 2 === 0){
       alert(`${parsedNumber} is even`)
     }
    // Checks to see if the modulo is greater than 0
     else if(parsedNumber % 2 > 0){
       alert(`${parsedNumber} is odd`)
    }
    else{
      // This alert will run if the modulo is NOT equal to 0 or if the modulo is not greater than 0
      alert("please enter a valid number")
    }
  }*/
  function passWord(){
      const passWord = prompt("type your password")
      
      if (passWord == "numbers" + "letters" ){
alert("success")
      }
      else if("passWord" === "numbers"){
      alert("try again")
  }
}

function writeCards(namesArray, eventName) {
    let messages = []; 
    
    for (let i = 0; i < namesArray.length; i++) {
      messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
     
}
    return messages;
  }
  
  
  let names = ["Guadalupe", "Ollie", "Aki"];
  let event = 'birthday';

  let cards = writeCards(names, event);
console.log(cards);

function countDown(startingNumber) {
    let currentNumber = startingNumber;
    
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  
  countDown(10);

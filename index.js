const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    const allMessages = []
    let i = 0; 
    while (i < cards.length) {
      console.log(`thank you ${cards[i]}, for the wonderful surprise gift!`);
      allMessages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
      i++; 
    }
    console.log(allMessages)
    return allMessages;
  }
  writeCards(cards);

const down = 10

function countDown(down){
    for (let number = down ; number > -1; number--) {
        console.log(number);
      } 
      return down;
    }
    countDown(down);
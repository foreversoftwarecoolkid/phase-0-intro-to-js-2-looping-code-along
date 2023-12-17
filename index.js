const writeCards = (names, event) => {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
   };
   
   const countDown = (num) => {
    for (let i = num; i >= 0; i--) {
       console.log(i);
    }
   };
   
   module.exports = { writeCards, countDown };

 //Welcome page
 const message = 'Hello! Welcome to Sandy Collections'
  console.log(message);
  const readlineSync = require('readline-sync');
  console.log("What can we call you?");
  let talk = readlineSync.question("What do you want to buy?");
  console.log( `hi ${talk}`);
  
  const readlineSync = require('readline');
  const rl = readline.createInterface({input: process.stdin, output: process.stdout})
  const start = 'Enter 1 to get the list of collections.'
  console.log(start);

  const servobj = {products: [{ item: "suit", price: $500 }, { item: "dress", price: $250 }, { item: "shirt", price: $150 }, 
    { item: "shoes", price: $250 }]
  }
rl.question(message, (userInput) => {
  if (userInput == 1) {
    listProducts()
  } else {
    console.log(`Please enter 1 to get started.`)
  }
})
  

function listProducts(){
  let products = servobj.products
  for (let i = 0; i < products.length; i++){
  console.log(`${i + 1}, ${products[i].item} (#${products[i].price})`)
  }
}
console.log("Thank You");
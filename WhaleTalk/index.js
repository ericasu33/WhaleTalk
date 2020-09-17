const getUserInput = () => {
  let input = prompt("Please input a sentence (letters only): ");
  input = input.toLowerCase(); // convert input to lower case
  
  var regex = /[0-9]/;  //console.log(/[0-9]/.test(input))
  if (regex.test(input)) {
      console.log("Please input letters only.");
      return getUserInput(); //calls the function again
  } else {
    return input;
  }
}

const convertInput = (input) => {
  const vowels = ["a", "e", "i", "o", "u"]
  let resultArray = [];

  for (let i = 0; i < input.length; i++) {
    //console.log(input[i]);
    for (let j = 0; j < vowels.length; j++) {
      //console.log("j is " + j);
      if(input[i] === vowels[j]){
        resultArray.push(vowels[j]);
        // console.log("the letter is an vowel, adds to array: " + resultArray);
        // console.log(resultArray);
      }
    }

  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
    // console.log("the letter is an e or u, adds itself to the array: " + resultArray);
    // console.log(resultArray);
   }
  }
  return resultArray;
}

const playGame = () => {
  const userInput = getUserInput();
  const convertedInput = convertInput(userInput);
  const whaleTalk = convertedInput.join("").toUpperCase() //the whale talk

  console.log(`\nThe inputted sentence is: ${userInput}\n`);
  console.log(`Your sentence in whale talk: ${whaleTalk}`);
}

playGame();

/* original

let input = "Hi, Human".toLowerCase();
const vowels = ["a", "e", "i", "o", "u"]

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(input[i]);
  for (let j = 0; j < vowels.length; j++) {
    //console.log("j is " + j);
    if(input[i] === vowels[j]){
      resultArray.push(vowels[j]);
      console.log("the letter is an vowel, adds to array: " + resultArray);
      console.log(resultArray);
    }
  }

  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
    console.log("the letter is an e or u, adds itself to the array: " + resultArray);
    console.log(resultArray);
  }
}

console.log(resultArray.join("").toUpperCase()); //the whale talk

*/
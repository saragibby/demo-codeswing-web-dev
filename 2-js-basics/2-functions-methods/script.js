/**
 * Function that logs a message to console
 */
function displayGreeting(name, salutation = 'Hello') {
  console.log(`${salutation}, ${name}`);
}

/**
 * Call the function with your name, uncomment
 * and watch the output window below
 * */
// displayGreeting("Sara")



/** 
 * Function that returns a value
 */
function createGreetingMessage(name) {
  const message = `Hi there ${name}!`;
  return message;
}

/**
 * Call the function with your name and set to a variable
 */
const greetingMessage = createGreetingMessage('Jane');

/**
 * Uncomment the line below and see your message
 * pop up at the bottom right of the window
 */
// alert(greetingMessage)
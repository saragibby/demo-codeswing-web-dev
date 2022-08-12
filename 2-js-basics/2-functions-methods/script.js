// Function that logs text to console
function displayGreeting(name) {
    const message = `Hello, ${name}!`;
    console.log(message);
}

displayGreeting('Learning about JS Functions');

// Function returns a value 
function createGreetingMessage(name) {
    const message = `Hello, ${name}`;
    return message;
}

const greetingMessage = createGreetingMessage('You Super Awesome Person You');

alert(greetingMessage);

/**
 * ASSIGNMENT
 * 
 * Create different functions, both functions that return something 
 * and functions that don't return anything.
 * 
 * Adding something to test
 */

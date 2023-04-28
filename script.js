// Get the output element by ID
const outputElement = document.getElementById("output");

// Define a function that returns a promise
function sayHello() {
  return new Promise((resolve, reject) => {
    // Use setTimeout to simulate an async operation that takes 1 second
    setTimeout(() => {
      resolve("Hello, world!"); // Resolve the promise with the string "Hello, world!"
    }, 1000);
  });
}

// Call the sayHello function and update the output element with the result
sayHello().then((result) => {
  outputElement.innerText = result;
}).catch((error) => {
  console.error(error);
});

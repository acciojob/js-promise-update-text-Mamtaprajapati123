function updateText() {
  // Get the output element by ID
  const outputEl = document.getElementById('output');

  // Create a promise that resolves with "Hello, world!" after 1 second
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });

  // Update the text of the output element after the promise resolves
  myPromise.then((result) => {
    outputEl.textContent = result;
  });
}

// Add an event listener to the button to trigger the updateText function
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', updateText);

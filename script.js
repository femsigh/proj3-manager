// Task 1: Verification Log
console.log("Status Manager Started");
// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";
/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");
/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems() {
  const listItems = document.querySelectorAll('#item-list li');
  listItems.forEach(function(item) {
    item.style.color = "blue";
  });
}
highlightListItems();
/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// task 8, function defined outside of toggleStatus to keep it separate and reusable, and called within toggleStatus when making visible.
function createTimestamp() {
  const timestampSpan = document.createElement("span");
  timestampSpan.innerHTML = `Timestamp: ${new Date().toLocaleTimeString()}<br>`;
  statusOutput.appendChild(timestampSpan);
}
// here to handle the click event on the toggleButton [6, 7].
function toggleStatus(e) {
  // Task 6: Prevent default behavior of anchor tag
  e.preventDefault();

  // Check if status-output is visible (does NOT have hidden class)
  const isVisible = !statusOutput.classList.contains("hidden");
  
  // Task 5: Toggle the hidden class
  statusOutput.classList.toggle("hidden");
  
  // Task 7: Change background color based on visibility
  if (isVisible) {
    // If becoming hidden, reset background color
    mainTitle.style.backgroundColor = "";
 } else {
    // If becoming visible, set background color to yellow
    mainTitle.style.backgroundColor = "yellow";
    createTimestamp();
  }
}
// Add event listener to toggle button for click event
toggleButton.addEventListener("click", toggleStatus);


/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
function startFlashing() {
  // Only start a new interval if one isn't already running
  if (intervalId === null) {
    // Use setInterval to toggle hidden class on control-panel every 500ms
    intervalId = setInterval(function() {
      controlPanel.classList.toggle("hidden");
    }, 100);
  }
}

function stopFlashing() {
  // Clear the interval if it exists
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    
    // Ensure the control panel is visible when stopping (optional cleanup)
    controlPanel.classList.remove("hidden");
  }
}

// Bind startFlashing to single click on timer button
timerButton.addEventListener("click", startFlashing);

// Bind stopFlashing to double click on timer button
timerButton.addEventListener("dblclick", stopFlashing);
// JavaScript-code for validation
function validateForm() {
  // Your validation code here
}

// Add event listeners for input fields
document.getElementById("Naam").addEventListener("input", function () {
  if (this.value.trim() !== "") {
    this.style.backgroundColor = "white";
  } else {
    this.style.backgroundColor = "yellow";
  }
});

// Add event listeners for other input fields
// ...

// Add any other JavaScript functions you need

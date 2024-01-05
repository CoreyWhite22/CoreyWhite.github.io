function navigateToProjectsPage() {
  // Use window.location to navigate to the desired HTML file
  window.location.href = "Projects.html";
}

function navigateToHomePage() {
  // Use window.location to navigate to the desired HTML file
  window.location.href = "index.html";
}

  // Find the button by its ID
  var emailButton = document.getElementById('emailButton');

  // Attach a click event listener to the button
  emailButton.addEventListener('click', function() {
      // Open the default email client with a new email
      window.location.href = 'mailto:Co.white.twentytwo@gmail.com';
  });
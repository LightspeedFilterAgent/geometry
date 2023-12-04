function loadIframeContent() {
    // Display the iframe and back button
    document.getElementById('contentFrame').style.display = 'block';
    document.getElementById('backButton').style.display = 'block';

    // Load new content into the iframe
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Cl0@k3r</title>

      <div id="home"></div>
  <div id="search"></div>
  <div id="settings"></div>
    <div id="footer"></div>
  <div id="password"></div>
</head>
<style>
/* Basic Reset */
body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Main content styling */
main {
  padding: 20px;
  text-align: center;
}

/* Modal styles */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Styling for form and button */
form {
  margin-top: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  margin: 10px 0;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
h1 {
  text-align: center;
  color: #333;
  font-size: 2.5em;
}

</style>
<body>
  <main>
              <h1>Cl0@k3r</h1> <!-- Title added here -->
    <div id="search">
      <form>
        <label>Search:</label>
        <input id="searchInput" type="text" placeholder="Type here to search...">
      </form>
    </div>

    <!-- Popup Modal -->
    <div id="infoModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closePopup()">&times;</span>
            <h1>Cl0@k3r</h1> <!-- Title added here -->
    <p> A simple static ultraviolet proxy by insert text here</p>
    <p> Credit of course to Titanium Network, but also to Whos-Evan for making a not-difficult-to-understand proxy for me to fork!<p>
    <p>dont bully me..</p>
        <h2>Changelog</h2>
        <p>November 27th, finally started work!</p>
        <h2>Features</h2>
        <p>- AB cloak</p>
        <p>- Hidden proxy! You cannot access without the special extension (which you know, ofcourse)</p>
      </div>
    </div>
  </main>
    <script src="./js/uv/uv.bundle.js"></script>
  <script src="./js/uv/uv.config.js"></script>
  <script src="./js/register-uv.js"></script>
  <script src="./js/index.js"></script>
    <link rel="manifest" href="./assets/manifest.json">

  <script>
    function showPopup() {
      document.getElementById("infoModal").style.display = "block";
    }

    function closePopup() {
      document.getElementById("infoModal").style.display = "none";
    }
    showPopup();
    // Check if the script is running in an iframe
if (window.self === window.top) {
  // Not in an iframe, close the window
  window.close();
} else {
  // In an iframe, you can perform other actions if needed
  console.log('Running inside an iframe');
}
  </script>
</body>
</html>
    `;
}

function hideIframeContent() {
    // Hide the iframe and back button
    document.getElementById('contentFrame').style.display = 'none';
    document.getElementById('backButton').style.display = 'none';

    // Clear the iframe content if needed
    let iframe = document.getElementById('contentFrame');
    iframe.srcdoc = '';
}
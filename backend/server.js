const express = require("express");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 2004;    // when we will create the env file then we will use the env port number


// Purpose: This line of code tells Express to serve static files (like images, CSS files, JavaScript files) from the frontend folder.
// express.static(): This is a middleware function provided by Express that serves static assets, such as HTML files, CSS, JavaScript, and images.
// path.join(__dirname, '../frontend'):
// __dirname: Refers to the current directory where your backend server code is running.
// '../frontend': This is a relative path pointing to the frontend folder (which is one level up from the backend folder).
// path.join() ensures that the correct path is built in a platform-independent way (it works on Windows, Linux, etc.).
// In summary: This line serves any static files (like index.html, styles.css, images/, etc.) from the frontend directory when requested by the client.

// Serve static files from frontend
app.use(express.static(path.join(__dirname , '../frontend')));





// Purpose: This line defines a route ('/') to serve the main index.html file from the frontend/html/ folder when the user visits the root of your website (e.g., http://localhost:3000/).
// app.get(): This defines a GET route that handles requests to the root path '/'. The first argument '/' is the URL path, and the second argument is the callback function that gets executed when this route is hit
// res.sendFile(): This sends a file (in this case, an HTML file) as the response to the request.
// path.join(__dirname, '../frontend/html/index.html'):
// __dirname: The directory where the server-side code is located.
// '../frontend/html/index.html': The relative path to your index.html file located in the frontend/html/ folder.
// path.join(): Ensures that the path to index.html is constructed correctly across different operating systems.
// In summary: When the user accesses the root URL ('/'), Express responds by sending the index.html file located in the frontend/html/ folder.

// Serve index.html
app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname , '../frontend/html-files/index.html'));
})


// Redirect to Amazon
app.get("/amazon.in", (req, res) => {
    res.redirect("https://www.amazon.in");
});


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})
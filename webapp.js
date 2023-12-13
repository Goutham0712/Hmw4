// Require express
const express = require('express');
const app = express();

// If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;

// If it runs locally, assign the static port 8002
if (port == null || port == "") {
  port = 8002
}

// Define routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/bio', (req, res) => {
    res.send('Bio Page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

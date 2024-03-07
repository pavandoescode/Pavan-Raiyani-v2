const express = require("express");
const path = require("path");

const app = express();

// Set up view engine and static files directory
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Define routes
const routes = [
    { path: "/", view: "index" },
    { path: "/contact", view: "contact" },
    { path: "/AI-Image-Generator", view: "AI-Image-Generator" },
    { path: "/Chat-App_-Socket-IO", view: "Chat-App_-Socket-IO" },
    { path: "/URLShortenerAPI", view: "URLShortenerAPI" },
    { path: "/Note-Master", view: "Note-Master" },
    { path: "/Sticky-Notes", view: "Sticky-Notes" },
    { path: "/Live-ISS-Tracker", view: "Live-ISS-Tracker" },
    { path: "/Weather-API", view: "Weather-API" }
];

// Register routes
routes.forEach(route => {
    app.get(route.path, (req, res) => {
        res.render(route.view);
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

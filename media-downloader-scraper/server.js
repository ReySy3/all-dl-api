const express = require('express');
const scrapeMediaDownloader = require('./scraper');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route to get the scraped data
app.get('/api/media-downloader', async (req, res) => {
    const data = await scrapeMediaDownloader();
    if (data) {
        res.json(data);
    } else {
        res.status(500).json({ error: 'Failed to scrape data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

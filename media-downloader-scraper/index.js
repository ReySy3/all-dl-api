const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Scrape media URLs from a user-provided URL
app.get('/media-urls', async (req, res) => {
    try {
        const { url } = req.query;

        // Validate the URL
        if (!url) {
            return res.status(400).json({ success: false, error: 'URL parameter is required.' });
        }

        // Fetch the HTML of the user-provided URL
        const response = await axios.get(url);
        const html = response.data;

        // Load the HTML into Cheerio
        const $ = cheerio.load(html);

        // Extract media URLs
        const mediaUrls = [];
        $('img, video, source').each((_, el) => {
            const src = $(el).attr('src');
            if (src) {
                mediaUrls.push(src);
            }
        });

        // Return the extracted media URLs
        res.json({ success: true, mediaUrls });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Error fetching or processing the URL.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

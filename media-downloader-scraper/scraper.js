const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape the media downloader page
async function scrapeMediaDownloader() {
    try {
        const response = await axios.get('https://publer.io/tools/media-downloader');
        const html = response.data;
        const $ = cheerio.load(html);

        // Extracting the title
        const title = $('h1').text();

        // Extracting the description (adjust the selector as needed)
        const description = $('.description').text();

        // Extracting available tools (adjust the selector as needed)
        const tools = [];
        $('h3').each((index, element) => {
            tools.push($(element).text());
        });

        return {
            title,
            description,
            tools
        };
    } catch (error) {
        console.error('Error fetching the webpage:', error);
        return null;
    }
}

// Export the function for use in an API
module.exports = scrapeMediaDownloader;

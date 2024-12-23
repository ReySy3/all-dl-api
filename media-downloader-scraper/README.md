# Media URL Scraper API

This API extracts media URLs (images, videos, etc.) from a user-provided webpage URL. Built with Node.js, Express, Axios, and Cheerio.

## Features
- Extracts media URLs (`<img>`, `<video>`, `<source>` tags).
- User provides the target webpage URL via query parameters.
- Returns media URLs in JSON format.

## Endpoints

### `GET /media-urls`
**Query Parameters**:
- `url` (required): The webpage URL to scrape.

**Response**:
```json
{
  "success": true,
  "mediaUrls": [
    "https://example.com/image1.jpg",
    "https://example.com/video1.mp4"
  ]
}

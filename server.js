const https = require('https');
const agent = new https.Agent({ rejectUnauthorized: false }); // Allow expired certs

// Inside axios.get(...)
const response = await axios.get(targetUrl, {
  httpsAgent: agent,  // Use custom agent
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) CriOS/138.0.0.0 Mobile/15E148 Safari/604.1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Connection': 'keep-alive',
    'Referer': 'https://www.google.com/',
    'Upgrade-Insecure-Requests': '1'
  },
  timeout: 10000
});

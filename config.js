const CONFIG = {
    // Dynamic API URL detection:
    // If running locally on a separate port (e.g. Live Server), point to the Express backend (localhost:3000).
    // Otherwise (on Vercel or when served directly by Express), use the current host's origin.
    API_URL: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port !== '3000'
        ? 'http://localhost:3000'
        : window.location.origin
};

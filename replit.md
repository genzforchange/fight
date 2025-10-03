# FIGHT Toolkit - Gen-Z for Change

## Overview
The FIGHT (Fund, Invoke, Get out the vote, Hold accountable, Tap into movements) Toolkit is a comprehensive web resource created by Gen-Z for Change to combat oppressive U.S. immigration policies and support immigrant communities.

The site features:
- **English version**: Main landing page with all FIGHT resources
- **Spanish version (PODER)**: Localized content at `/es/index.html`
- **Hotel Action page**: Tools to contact hotels housing ICE agents (`/h.html`)
- **Tap-In page**: Resources to connect with partner organizations (`/t.html`)

## Project Structure
This is a static HTML/CSS/JavaScript website with the following structure:

```
.
├── index.html          # Main English landing page
├── h.html              # Hotel action page
├── t.html              # Tap into movements page
├── style.css           # Main stylesheet
├── h.css               # Hotel action page styles
├── t.css               # Tap-in page styles
├── script.js           # Main JavaScript functionality
├── server.py           # Python HTTP server with cache control
├── es/                 # Spanish version directory
│   ├── index.html      # Spanish landing page (PODER)
│   └── [other files]   # Spanish versions of pages
└── replit.md          # This documentation file
```

## Technology Stack
- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **Server**: Python 3.11 with built-in HTTP server
- **Fonts**: Google Fonts (Anton SC, Lexend)
- **Analytics**: Google Analytics (gtag.js)
- **External Services**: 
  - Twitter share widget
  - Airtable embeds
  - ActBlue donation platform
  - Google Drive resources

## Development
The site runs on a simple Python HTTP server configured to:
- Serve on `0.0.0.0:5000` for Replit compatibility
- Disable caching with proper headers for development
- Serve all static files from the root directory

### Running Locally
The server starts automatically via the configured workflow:
```bash
python3 server.py
```

The site will be available at `http://0.0.0.0:5000/`

## Deployment
Configured for Replit Autoscale deployment:
- **Type**: Autoscale (stateless static site)
- **Run command**: `python3 server.py`
- **Port**: 5000

## Recent Changes
- **2025-10-03**: Initial Replit import and setup
  - Installed Python 3.11
  - Created server.py with cache control headers
  - Configured workflow for port 5000
  - Set up deployment configuration
  - Added documentation and .gitignore

## External Links & Resources
The site links to various external resources:
- ActBlue donation pages
- Google Drive resources (Know Your Rights materials)
- iOS Shortcuts for automation
- Android Automate flows
- Airtable databases
- Partner organization websites

## Notes
- All external assets are hosted on Glitch CDN
- Site uses responsive design for mobile/desktop
- Includes bilingual support (English/Spanish)
- Features smooth scrolling navigation
- Interactive letter animations in header

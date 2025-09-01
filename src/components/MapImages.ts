// Static map images for Choi TCM locations
// These are base64 encoded placeholder images for demonstration
// In production, you would replace these with actual Google Maps static images

export const zurichMapImage = 'data:image/svg+xml;base64,' + btoa(`
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#E8F4FD"/>
  <rect x="0" y="0" width="400" height="50" fill="#4285F4"/>
  <text x="200" y="30" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">Choi TCM Zürich</text>
  
  <!-- Street grid -->
  <g stroke="#ccc" stroke-width="1">
    <line x1="50" y1="50" x2="50" y2="300"/>
    <line x1="150" y1="50" x2="150" y2="300"/>
    <line x1="250" y1="50" x2="250" y2="300"/>
    <line x1="350" y1="50" x2="350" y2="300"/>
    <line x1="0" y1="100" x2="400" y2="100"/>
    <line x1="0" y1="150" x2="400" y2="150"/>
    <line x1="0" y1="200" x2="400" y2="200"/>
    <line x1="0" y1="250" x2="400" y2="250"/>
  </g>
  
  <!-- Location marker -->
  <circle cx="200" cy="175" r="12" fill="#EA4335"/>
  <circle cx="200" cy="175" r="4" fill="white"/>
  
  <!-- Address text -->
  <rect x="120" y="195" width="160" height="40" fill="white" stroke="#ccc" rx="5"/>
  <text x="200" y="210" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Kreuzstrasse 60</text>
  <text x="200" y="225" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">8032 Zürich</text>
</svg>
`);

export const luzernMapImage = 'data:image/svg+xml;base64,' + btoa(`
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#E8F8E8"/>
  <rect x="0" y="0" width="400" height="50" fill="#34A853"/>
  <text x="200" y="30" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">Choi TCM Luzern</text>
  
  <!-- Lake representation -->
  <ellipse cx="100" cy="200" rx="80" ry="60" fill="#87CEEB" opacity="0.6"/>
  
  <!-- Street grid -->
  <g stroke="#ccc" stroke-width="1">
    <line x1="200" y1="50" x2="200" y2="300"/>
    <line x1="300" y1="50" x2="300" y2="300"/>
    <line x1="350" y1="50" x2="350" y2="300"/>
    <line x1="200" y1="100" x2="400" y2="100"/>
    <line x1="200" y1="150" x2="400" y2="150"/>
    <line x1="200" y1="200" x2="400" y2="200"/>
    <line x1="200" y1="250" x2="400" y2="250"/>
  </g>
  
  <!-- Location marker -->
  <circle cx="275" cy="175" r="12" fill="#EA4335"/>
  <circle cx="275" cy="175" r="4" fill="white"/>
  
  <!-- Address text -->
  <rect x="195" y="195" width="160" height="40" fill="white" stroke="#ccc" rx="5"/>
  <text x="275" y="210" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Im Wygart 3</text>
  <text x="275" y="225" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">6205 Eich</text>
</svg>
`);

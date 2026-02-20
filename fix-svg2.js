const fs = require('fs');

const svgContent = `<svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Hauptpinselstrich mit variierender Breite -->
  <path d="M0 55 Q 80 25, 200 50 T 400 45 T 600 52 T 800 40 T 1000 48 T 1200 42" 
        fill="none" stroke="#2d5a4a" stroke-width="22" stroke-linecap="round"/>
  
  <!-- Zweiter Strich für Dicke -->
  <path d="M10 50 Q 90 22, 210 47 T 410 42 T 610 49 T 810 37 T 1010 45 T 1210 39" 
        fill="none" stroke="#1a3d32" stroke-width="12" stroke-linecap="round" opacity="0.6"/>
  
  <!-- Obere Abstreifer - feine Linien -->
  <path d="M60 25 L 75 5 M 250 20 L 265 2 M 450 18 L 465 0 M 650 22 L 665 4 M 850 15 L 865 1 M 1050 20 L 1065 3" 
        stroke="#2d5a4a" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
  
  <!-- Untere Abstreifer -->
  <path d="M120 80 L 135 98 M 320 82 L 335 100 M 520 78 L 535 96 M 720 85 L 735 99 M 920 75 L 935 95 M 1120 80 L 1135 98" 
        stroke="#2d5a4a" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
  
  <!-- Große Spritzer oben -->
  <ellipse cx="45" cy="12" rx="6" ry="4" fill="#2d5a4a" opacity="0.6"/>
  <ellipse cx="180" cy="8" rx="5" ry="3.5" fill="#2d5a4a" opacity="0.5"/>
  <ellipse cx="380" cy="5" rx="7" ry="4" fill="#2d5a4a" opacity="0.55"/>
  <ellipse cx="580" cy="10" rx="5" ry="3" fill="#2d5a4a" opacity="0.5"/>
  <ellipse cx="780" cy="6" rx="6" ry="4" fill="#2d5a4a" opacity="0.6"/>
  <ellipse cx="980" cy="12" rx="5" ry="3.5" fill="#2d5a4a" opacity="0.5"/>
  <ellipse cx="1150" cy="8" rx="6" ry="4" fill="#2d5a4a" opacity="0.55"/>
  
  <!-- Spritzer unten -->
  <ellipse cx="150" cy="88" rx="5" ry="3" fill="#2d5a4a" opacity="0.5"/>
  <ellipse cx="400" cy="92" rx="6" ry="4" fill="#2d5a4a" opacity="0.45"/>
  <ellipse cx="600" cy="90" rx="5" ry="3.5" fill="#2d5a4a" opacity="0.5"/>
  <ellipse cx="850" cy="94" rx="6" ry="4" fill="#2d5a4a" opacity="0.4"/>
  <ellipse cx="1100" cy="88" rx="5" ry="3" fill="#2d5a4a" opacity="0.5"/>
  
  <!-- Kleine Punkte entlang des Strichs -->
  <circle cx="100" cy="35" r="2" fill="#1a3d32" opacity="0.7"/>
  <circle cx="300" cy="30" r="1.5" fill="#1a3d32" opacity="0.6"/>
  <circle cx="500" cy="38" r="2.2" fill="#1a3d32" opacity="0.65"/>
  <circle cx="700" cy="28" r="1.8" fill="#1a3d32" opacity="0.6"/>
  <circle cx="900" cy="35" r="2" fill="#1a3d32" opacity="0.7"/>
  <circle cx="1080" cy="32" r="1.5" fill="#1a3d32" opacity="0.6"/>
  
  <!-- Tintenansammlung am Ende -->
  <ellipse cx="1185" cy="42" rx="20" ry="12" fill="#0f2e24" opacity="0.7"/>
  <ellipse cx="1195" cy="45" rx="12" ry="8" fill="#0f2e24" opacity="0.5"/>
  
  <!-- Zusätzliche Textur-Punkte -->
  <circle cx="220" cy="58" r="1" fill="#2d5a4a" opacity="0.4"/>
  <circle cx="480" cy="62" r="1.2" fill="#2d5a4a" opacity="0.35"/>
  <circle cx="750" cy="55" r="0.8" fill="#2d5a4a" opacity="0.5"/>
  <circle cx="1020" cy="60" r="1" fill="#2d5a4a" opacity="0.4"/>
</svg>`;

fs.writeFileSync('public/assets/brush.svg', svgContent);
console.log('Realistisches SVG erstellt!');

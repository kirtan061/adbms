# ArtNet - Advanced Art Network

A modern, interactive art gallery website created by Max Adavns.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Gallery**: Dynamic gallery with category filtering
- **Animated Canvas**: Beautiful particle animation in the hero section
- **Smooth Navigation**: Smooth scrolling and mobile-friendly menu
- **Contact Form**: Interactive contact form with validation
- **Modern UI**: Clean, modern design with gradient accents and smooth animations

## Technologies Used

- HTML5
- CSS3 (Modern features including Grid, Flexbox, CSS Variables)
- Vanilla JavaScript (ES6+)
- Canvas API for animations

## Getting Started

### Option 1: Direct File Opening
Simply open `index.html` in your web browser.

### Option 2: Using a Local Server

1. Install http-server globally (if not already installed):
```bash
npm install -g http-server
```

2. Run the development server:
```bash
npm start
```

The website will open automatically at `http://localhost:8080`

### Option 3: Using Live Server

```bash
npm run dev
```

## Project Structure

```
artnet/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
├── package.json        # Project configuration
└── README.md          # This file
```

## Sections

1. **Home/Hero**: Eye-catching hero section with animated canvas background
2. **Gallery**: Interactive art gallery with category filtering
3. **Artists**: Featured artists with profile cards
4. **About**: Information about ArtNet with animated statistics
5. **Contact**: Contact form for inquiries

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2d3561;
    --secondary-color: #c05c7e;
    --accent-color: #f3826f;
    /* ... */
}
```

### Gallery Items
Modify the `galleryData` array in `script.js` to add/edit artworks.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

**Max Adavns**

## License

MIT License - feel free to use this project for your own purposes.
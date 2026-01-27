# ARTNET - Max Adavns Portfolio Website

A modern, responsive art portfolio website showcasing the work of artist Max Adavns.

## Features

- **Responsive Design**: Beautiful layouts that work on all devices
- **Interactive Gallery**: Browse artworks by category with modal details
- **About Section**: Learn about the artist's journey and philosophy
- **Contact Form**: Get in touch for commissions and inquiries
- **Modern UI**: Built with React and Tailwind CSS for a sleek, professional look

## Technology Stack

- **React**: Component-based UI framework
- **Tailwind CSS**: Utility-first CSS framework for modern styling
- **PostCSS**: CSS processing with autoprefixer
- **Google Fonts**: Inter and Playfair Display for elegant typography

## Getting Started

### Installation

```bash
cd artnet-max-adavns
npm install
```

### Development

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build

Create a production build:

```bash
npm run build
```

The build folder will contain optimized static files ready for deployment.

### Deployment

Deploy the `build` folder to any static hosting service:

```bash
npm install -g serve
serve -s build
```

## Project Structure

```
artnet-max-adavns/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.js    # Main navigation bar
│   │   ├── Hero.js          # Landing page hero section
│   │   ├── Gallery.js       # Artwork gallery with filtering
│   │   ├── About.js         # Artist biography and info
│   │   ├── Contact.js       # Contact form and details
│   │   └── Footer.js        # Site footer
│   ├── App.js               # Main application component
│   ├── index.css            # Global styles with Tailwind
│   └── index.js             # Application entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a1a1a',
  secondary: '#f5f5f5',
  accent: '#d4af37',
}
```

### Artworks

Add or modify artworks in `src/components/Gallery.js` by editing the `artworks` array.

### Content

Update artist information in `src/components/About.js` and contact details in `src/components/Contact.js`.

## License

© 2026 Max Adavns. All rights reserved.

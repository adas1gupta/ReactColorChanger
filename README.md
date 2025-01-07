# React Color Changer

A dynamic color manipulation tool built with React that allows users to adjust RGB values through sliders and a color picker.

## Features

- Real-time color preview in a display box
- RGB value adjustment using individual sliders
- Color picker for direct color selection
- Synchronized updates between sliders and color picker
- Interactive color display box showing the current selection

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 18.18.0 or higher)
- npm (version 8.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/adas1gupta/ReactColorChanger.git
cd reactcolorchanger
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will launch the Vite development server, typically at `http://localhost:5173`.

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - Main component handling state and color logic
- `src/RGBSlider.jsx` - Component for individual RGB value sliders
- `src/ColorPicker.jsx` - Color picker input component
- `src/DisplayBox.jsx` - Visual display of the selected color
- `index.html` - Entry point HTML file
- `vite.config.js` - Vite configuration file

## Components

### App
The main component that manages the application state and coordinates between child components.

### RGBSlider
A reusable component for adjusting individual RGB values with range inputs (0-255).

### ColorPicker
Provides a color picker interface that converts hex values to RGB.

### DisplayBox
Displays the current color selection in a visual box format.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.

## Future Improvements

- Add HSL/HSV color mode support
- Implement color history
- Add color palette generation
- Include accessibility features for color blindness
- Add copy functionality for RGB/Hex values
- Implement color scheme suggestions
- Add touch screen optimization for sliders
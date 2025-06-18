# Vue Filters

[Live Preview](https://v43rus.github.io/vue-filters/)

This project is an interactive image filter app built with Vue 3 and Vite. It allows users to upload an image and apply various Instagram-like filters using WebAssembly-powered image processing.

## Features

- **Image Upload:** Drag and drop or select an image from your device.
- **Filter Effects:** Apply filters such as Oceanic, Vintage, and Rosetint.
- **Live Preview:** Instantly see the effect of each filter on your image.
- **Download:** Save the filtered image as a JPEG.
- **Responsive Design:** Works well on desktop and mobile browsers.

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/v43rus/vue-filters.git
   cd vue-filters
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

To build the app for production:
```sh
npm run build
```
The build output will be in the `dist/` directory.

## Usage

- **Upload Image:** Drag and drop an image or click to select one.
- **Apply Filter:** Click a filter button to apply or remove a filter.
- **Download:** Click "Download" to save the filtered image.
- **Upload New Image:** Click "Upload New Image" to start over.

## Deployment

This project is automatically deployed to GitHub Pages on every push to the `master` branch.  
You can view the live site here: [https://v43rus.github.io/vue-filters/](https://v43rus.github.io/vue-filters/)

## License

This project is licensed under the MIT License.

---

Made with ❤️ using [Vue 3](https://vuejs.org/)
# ShopSphere

A front-end e-commerce store UI built with vanilla HTML, CSS, and JavaScript. Products are pulled live from the [DummyJSON](https://dummyjson.com/products) API — no backend required.

## Features

- **Home page** — hero banner, feature highlights (shipping, secure payments, returns, support), category shortcuts, and a featured products grid (first 10 products)
- **Shop page** (`view.html`) — full product catalog with:
  - Category filter (Beauty, Fragrances, Furniture, Groceries, All)
  - Sort by price (Low → High / High → Low)
  - Live product count
  - Reset filters button
- Responsive product cards with image, title, description, category, price, and an "Add to Cart" button
- Font Awesome icons, Plus Jakarta Sans typeface

## Tech Stack

- HTML5 / CSS3 (custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (`fetch`, DOM manipulation, event listeners)
- [DummyJSON Products API](https://dummyjson.com/products) for product data
- [Font Awesome](https://fontawesome.com/) via CDN

## Project Structure

```
API store/
├── index.html      # Home page (hero, categories, featured products)
├── view.html        # Full shop page with filters & sorting
├── api.js            # Fetches & renders featured products on the home page
├── products.js      # Fetches, filters, sorts & renders products on the shop page
└── api.css           # Shared styling for both pages
```

## Getting Started

No build tools or dependencies needed — it's static HTML/CSS/JS.

1. Clone the repo:
   ```bash
   git clone https://github.com/ashhadkhan05400-web/Store.git
   ```
2. Open `API store/index.html` in your browser, or serve the folder with a local dev server (e.g. the VS Code Live Server extension) for the best experience.

## Roadmap / Known Issues

- [ ] "Add to Cart" currently only logs the product ID to the console — cart state and a working cart UI are not yet implemented
- [ ] `index.html` nav links to `api.html`, which doesn't exist — should point to `index.html`
- [ ] Price range slider in the shop sidebar is present in markup but not wired up
- [ ] Product search bar is not yet functional

## License

Not specified yet.

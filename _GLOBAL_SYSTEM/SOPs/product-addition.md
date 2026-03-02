# Product Addition SOP: Hub & Spoke Model

This document outlines the standard operating procedure (SOP) for adding a new product to the 67Lab.ai website.

## Approach: Hub and Spoke
To maintain a clean, professional, and scalable website layout, all products are organized using a **Hub and Spoke** model.

1. **The Hub** (`/products`): A high-level directory that showcases a bento-box or grid format cards of all products.
2. **The Spoke** (`/products/[product-slug]`): A dedicated long-form page for the specific product that details features, metrics, screenshots, and CTAs.

## Steps to Add a New Product

### Step 1: Add a Card to the Hub
1. Open `/app/products/page.tsx`.
2. Locate the `products` array configuration (or the grid section).
3. Add a new product object containing:
    - **Name**: e.g., "Recepto-Ria"
    - **Tagline**: e.g., "The Future of First Impressions."
    - **Icon**: An appropriate Lucide-react icon or static `/public` logo image.
    - **Slug**: e.g., `/products/recepto-ria`
    - **External Link**: e.g., `https://recepto.xyz`

### Step 2: Create the Spoke Directory
1. Navigate to `/app/products/` and create a new folder matching the `Slug` used in step 1.
2. Create a `page.tsx` file inside this new folder.

### Step 3: Scaffold the Spoke Page
Use a standard page template that includes:
- `<Navbar />` and `<Footer />` components.
- A **Hero Section** outlining the primary value proposition.
- A **Features Grid** detailing the Key Capabilities.
- Optional: Proof points (metrics, user counts) above the fold.
- **CTAs**: Primary buttons aiming to external apps (e.g. `recepto.xyz`) or booking forms.
- An "Engine Badge": Include text like *"A 67lab.ai Innovation"* to reinforce the parent brand.

### Step 4: Add Visual Assets
Ensure product logos or screenshots are saved in the `/public/products/` directory in WebP, PNG, or SVG formats for optimal load times. 

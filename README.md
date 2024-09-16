# Next.js E-Commerce Project
# Project Overview
This project is a Next.js-based e-commerce application that allows users to browse products, view detailed product information, and navigate through pages of products with pagination controls. It utilizes server-side rendering to fetch and display product data efficiently and provides a user-friendly interface for browsing and managing products.

# User Stories
## Product Listing

Fetch the first 20 products from the API.
Fetch the next 20 products when navigating to a new page.
Fetch only the necessary product data for the current page with pagination.
Handle errors during product data fetching.
Ensure product data is rendered on the server.
Display a list of 20 products on the main products page.
Implement pagination controls (next/previous, page numbers, or infinite scroll).
Display a grid of product cards with images, prices, and categories.

## Product Details

- Fetch and display product details from the API:
- Show product title, description, images (with preview controls), price, category, tags, rating, stock, and availability.
- Display reviews with reviewer name, date, comment, and rating.
- Provide navigation to return to the products grid/list page.

## Technologies Used
Next.js: Framework for building server-rendered React applications.
React: Library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
JSON API: The API endpoint used to fetch product data (https://next-ecommerce-api.vercel.app/products).

## Setup and Installation
- Clone the Repository
- npm run dev
## Features
- Home Page: Displays a welcome message or landing content.
- Products Page: Lists products with pagination controls.
- Product Detail Page: Shows detailed information about a selected product.
## Error Handling
- Friendly error messages are shown if product data fails to load.
- Loading states are displayed while new data is being fetched.
## Code Structure
pages/: Contains the main routes for the application.
index.js: Home page.
products/index.js: Product listing page with pagination.
products/[id].js: Detailed product view page.
components/: Reusable UI components such as Header and ProductCard.
utils/: Utility functions for API fetching.

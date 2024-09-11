// utils/api.js

const API_BASE_URL = 'https://next-ecommerce-api.vercel.app';

/**
 * Fetch products with pagination.
 * @param {number} page - The page number.
 * @param {number} limit - Number of products per page.
 */
export async function fetchProducts(page = 1, limit = 20) {
  const skip = (page - 1) * limit;
  try {
    const response = await fetch(`${API_BASE_URL}/products?skip=${skip}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetch product by ID.
 * @param {string} id - Product ID.
 */
export async function fetchProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

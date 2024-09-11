const API_BASE_URL = 'https://next-ecommerce-api.vercel.app';

/**
 * Fetches products from the API
 * @param {number} page - The page number to fetch
 * @param {number} limit - The number of products per page
 * @returns {Promise<Object>} - The API response containing products and metadata
 */
export async function fetchProducts(page = 1, limit = 20) {
  const skip = (page - 1) * limit;
  try {
    const response = await fetch(`${API_BASE_URL}/products?skip=${skip}&limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    console.log('Fetched products:', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetches a single product by ID
 * @param {string} id - The ID of the product to fetch
 * @returns {Promise<Object>} - The product data
 */
export async function fetchProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    const data = await response.json();
    console.log('Fetched product:', data);
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

/**
 * Fetches all product categories
 * @returns {Promise<string[]>} - Array of category names
 */
export async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data = await response.json();
    console.log('Fetched categories:', data);
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
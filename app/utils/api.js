export async function fetchProducts(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    try {
      const response = await fetch(`https://next-ecommerce-api.vercel.app/products?skip=${skip}&limit=${limit}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      console.log('API Response:', data); // Debugging log
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
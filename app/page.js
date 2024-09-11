import { fetchProducts } from './utils/api';
import Layout from './components/Layout';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = 20;

  try {
    console.log('Fetching products...'); // Debugging log
    const data = await fetchProducts(page, limit);
    console.log('Fetched data:', data); // Debugging log

    const products = data?.products || [];
    const total = data?.total || 0;

    return (
      <Layout>
        <h1 className="text-3xl font-bold mb-8">Welcome to Our E-commerce Store</h1>
        <ProductGrid products={products} />
        {total > 0 && (
          <Pagination currentPage={page} totalProducts={total} limit={limit} />
        )}
      </Layout>
    );
  } catch (error) {
    console.error('Error in Home component:', error); // Error log
    return (
      <Layout>
        <div className="text-center text-red-500">
          <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h2>
          <p>We're having trouble loading the products. Please try again later.</p>
        </div>
      </Layout>
    );
  }
}
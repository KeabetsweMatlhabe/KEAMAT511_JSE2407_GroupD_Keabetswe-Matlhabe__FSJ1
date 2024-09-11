// app/products/page.js

import { fetchProducts } from '../utils/api';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';

export default async function ProductsPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = 20;

  try {
    const data = await fetchProducts(page, limit);
    const products = data?.products || [];
    const total = data?.total || 0;

    return (
      <Layout>
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        <ProductGrid products={products} />
        {total > 0 && (
          <Pagination currentPage={page} totalProducts={total} limit={limit} />
        )}
      </Layout>
    );
  } catch (error) {
    return (
      <Layout>
        <div className="text-center text-red-500">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>Failed to load products. Please try again later.</p>
        </div>
      </Layout>
    );
  }
}

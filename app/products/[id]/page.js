
import { fetchProductById } from '../../utils/api';

export default async function ProductDetailPage({ params }) {
  const { id } = params;
  
  try {
    const product = await fetchProductById(id);

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="grid grid-cols-2 gap-4">
          <img src={product.images[0]} alt={product.title} className="w-full object-cover" />
          <div>
            <p className="text-gray-500">{product.category}</p>
            <p className="font-bold text-2xl mt-2">${product.price}</p>
            <p className="mt-4">{product.description}</p>
            <p className="mt-4 text-sm text-gray-500">In Stock: {product.stock ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}

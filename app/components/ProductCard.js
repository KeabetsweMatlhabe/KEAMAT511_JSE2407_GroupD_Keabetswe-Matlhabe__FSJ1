import Link from 'next/link';

export default function ProductCard({ product }) {
  const stockStatus = product.stock > 0 ? `${product.stock} left in stock` : 'Out of stock';
  const discountPercentage = product.discountPercentage ? `${product.discountPercentage}% OFF` : null;

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
      <div className="relative">
        <img
          src={product.images[0] || '/placeholder-image.jpg'}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {discountPercentage && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            {discountPercentage}
          </span>
        )}
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2 text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-sm text-gray-600 mb-2">Brand: {product.brand}</p>
        <p className="text-sm text-gray-600 mb-2">SKU: {product.sku || 'N/A'}</p>
        <p className="font-bold text-xl text-gray-800 mb-2">${product.price.toFixed(2)}</p>
        {/* <p className="text-sm text-gray-700 mb-2">{product.description}</p> */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Rating: {product.rating.rate}</span>
          <span className="text-sm text-gray-600">({product.rating.count} reviews)</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{stockStatus}</p>
        <div className="flex justify-between">
          <Link href={`/products/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            View Details
          </Link>
          {/* <Link href="/" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
            Back Home
          </Link> */}
        </div>
      </div>
    </div>
  );
}
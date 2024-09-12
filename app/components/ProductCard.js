import Link from 'next/link';

export default function ProductCard({ product }) {
  const stockStatus = product.stock > 0 ? `${product.stock} left in stock` : 'Out of stock';
  const discountPercentage = product.discountPercentage ? `${product.discountPercentage}% OFF` : null;

  return (
    <div className="container mx-auto p-6">
      {/* Back to Home Button */}
      <div className="mb-6">
        <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          Back to Home
        </Link>
      </div>

      {/* Product Details */}
      <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.images[0] || '/placeholder-image.jpg'}
            alt={product.title}
            className="w-full h-72 object-cover"
          />
          {discountPercentage && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {discountPercentage}
            </span>
          )}
        </div>

        {/* Product Information */}
        <div className="p-6">
          <h2 className="font-bold text-2xl mb-2 text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-600 mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Brand:</strong> {product.brand}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>SKU:</strong> {product.sku || 'N/A'}</p>
          <p className="font-bold text-xl text-gray-800 mb-4">${product.price.toFixed(2)}</p>

          {/* Stock Status */}
          <p className={`text-sm mb-4 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>{stockStatus}</p>

          {/* Product Description */}
          {/* <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800">Description</h3>
            <p className="text-gray-700 text-sm">{product.description}</p>
          </div> */}

          {/* Product Rating */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className={`h-5 w-5 ${i < product.rating.rate ? 'fill-current' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.429 8.2 1.179-5.934 5.777 1.4 8.168L12 18.896l-7.334 3.874 1.4-8.168-5.934-5.777 8.2-1.179L12 .587z" />
                </svg>
              ))}
            </span>
            <p className="text-gray-600">{product.rating.rate} out of 5</p>
            <p className="text-gray-600">({product.rating.count} reviews)</p>
          </div>

          {/* Product Reviews */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800">Reviews</h3>
            {product.reviews && product.reviews.length > 0 ? (
              <ul className="space-y-4 mt-2">
                {product.reviews.map((review, index) => (
                  <li key={index} className="border-t pt-2">
                    <p className="text-sm text-gray-800 font-bold">{review.name}</p>
                    <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 .587l3.668 7.429 8.2 1.179-5.934 5.777 1.4 8.168L12 18.896l-7.334 3.874 1.4-8.168-5.934-5.777 8.2-1.179L12 .587z" />
                        </svg>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No reviews available.</p>
            )}
          </div>

          {/* View Details Button */}
          <div className="flex justify-end mt-6">
            <Link href={`/products/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProductDetail({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Back to Home
      </Link>
      
      <div className="mt-6">
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <img src={product.images[0]} alt={product.title} className="w-full h-96 object-cover" />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg font-semibold text-gray-700 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
            <p className="text-sm text-gray-500 mb-4">Tags: {product.tags.join(', ')}</p>
            <p className="text-sm text-gray-500 mb-4">Stock: {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}</p>
            <p className="text-sm text-gray-500 mb-4">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            
            {/* Product Description */}
            <p className="mb-6">{product.description}</p>

            {/* Reviews Section */}
            <div>
              <h2 className="text-lg font-bold mb-2">User Reviews</h2>
              {product.reviews.map((review) => (
                <div key={review.id} className="mb-4 border-t pt-2">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                  <p>{review.comment}</p>
                  <p className="text-sm">Rating: {review.rating}/5</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch product data based on the ID
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/products');
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}

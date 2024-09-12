import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1 relative">
        <img
          src={product.images[0]}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="font-bold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

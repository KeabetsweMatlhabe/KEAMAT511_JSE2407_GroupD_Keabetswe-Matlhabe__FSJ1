import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow lg:flex lg:items-start lg:max-w-6xl xl:max-w-7xl">
      <div className="mx-auto w-2/5 flex-none">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-[90%] h-[90%]"
        />
      </div>
      <div className="mx-auto w-[90%] space-y-2 p-4">
        <h2 className="font-semibold text-2xl md:text-4xl lg:text-4xl mb-2">{product.title}</h2>
        <div className="flex gap-2">
          <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
          </svg>
          <div>{product.rating.rate}</div>
          <div>Reviews: {product.rating.count}</div>
        </div>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          {product.category}
        </span>
        <p className="font-bold text-xl md:text-2xl lg:text-2xl">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

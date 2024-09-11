// app/components/Pagination.js

import Link from 'next/link';

export default function Pagination({ currentPage, totalProducts, limit }) {
  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="flex justify-center space-x-4 mt-8">
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}`} className="px-4 py-2 bg-gray-200 rounded">
          Previous
        </Link>
      )}
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`} className="px-4 py-2 bg-gray-200 rounded">
          Next
        </Link>
      )}
    </div>
  );
}

// app/components/Pagination.js
import Link from 'next/link';

export default function Pagination({ currentPage, totalProducts, limit }) {
  const totalPages = Math.ceil(totalProducts / limit);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-between mt-8">
      {prevPage && (
        <Link href={`/?page=${prevPage}`}>
          <a className="px-4 py-2 bg-gray-300 text-black rounded-md">Previous</a>
        </Link>
      )}
      <span>Page {currentPage} of {totalPages}</span>
      {nextPage && (
        <Link href={`/?page=${nextPage}`}>
          <a className="px-4 py-2 bg-gray-300 text-black rounded-md">Next</a>
        </Link>
      )}
    </div>
  );
}

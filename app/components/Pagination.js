import Link from 'next/link';

export default function Pagination({ currentPage, totalProducts, limit }) {
  const totalPages = Math.ceil(totalProducts / limit);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-between items-center mt-8">
      {prevPage ? (
        <Link href={`/?page=${prevPage}`} className="px-4 py-2 bg-gray-300 text-black rounded-md">
          Previous
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed">
          Previous
        </span>
      )}
      
      <span>Page {currentPage} of {totalPages}</span>
      
      {nextPage ? (
        <Link href={`/?page=${nextPage}`} className="px-4 py-2 bg-gray-300 text-black rounded-md">
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-100 text-gray-400 rounded-md cursor-not-allowed">
          Next
        </span>
      )}
    </div>
  );
}
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Link href="/">
            <a>
              <Image 
                src="/logo.png" 
                alt="Store Logo"
                width={40} 
                height={40}
                className="rounded-full" 
              />
            </a>
          </Link>
          {/* Store Name */}
          <Link href="/">
            <a className="text-3xl font-extrabold tracking-wide hover:text-gray-200 transition-colors duration-200">
              Store
            </a>
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <a className="text-lg font-medium hover:text-gray-200 transition-colors duration-200">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a className="text-lg font-medium hover:text-gray-200 transition-colors duration-200">
                  Products
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

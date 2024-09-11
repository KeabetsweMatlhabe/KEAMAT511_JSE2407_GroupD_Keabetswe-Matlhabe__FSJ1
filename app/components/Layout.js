// app/components/Layout.js

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">My E-commerce Store</h1>
      </header>
      <main className="p-8">{children}</main>
      <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
        <p>&copy; 2024 My E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Links Section */}
        <div className="space-y-4">
          <div className="text-2xl font-bold">Winexchange</div>
          <div className="space-y-2 flex flex-col">
            <a href="/" className="text-gray-600 hover:text-black transition">
              About Us
            </a>
            <a href="/" className="text-gray-600 hover:text-black transition">
              Services
            </a>
            
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="space-y-2 flex flex-col">
            <a
              href="/privacy-policy"
              className="text-gray-600 hover:text-black transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              className="text-gray-600 hover:text-black transition"
            >
              Terms & Conditions
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="bg-black text-white py-2 rounded-md hover:bg-gray-900 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Winexchange. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

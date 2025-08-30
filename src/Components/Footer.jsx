import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Help Section */}
        <div>
          <h4 className="uppercase text-sm font-bold mb-6 border-b border-gray-700 pb-2">
            Help
          </h4>
          <p className="mb-3 text-gray-400">
            A Client Advisor is available at{" "}
            <span className="underline text-white px-1 rounded">
              1000 000 0000
            </span>
            .
          </p>
          <p className="mb-6 text-gray-400">
            You can also{" "}
            <span className="underline px-1 rounded">chat</span> or{" "}
            <span className="underline px-1 rounded">email us</span>.
          </p>
          <ul className="space-y-3 text-gray-400">
            {["FAQ", "Product Care", "Stores"].map((item) => (
              <li key={item} className="px-1 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="uppercase text-sm font-bold mb-6 border-b border-gray-700 pb-2">
            Services
          </h4>
          <ul className="space-y-3 text-gray-400">
            {[
              "Repairs",
              "Personalisation",
              "Art of Gifting",
              "Download our Apps",
            ].map((item) => (
              <li key={item} className="px-1 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h4 className="uppercase text-sm font-bold mb-6 border-b border-gray-700 pb-2">
            About LaVitrine
          </h4>
          <ul className="space-y-3 text-gray-400">
            {[
              "Fashion Shows",
              "Arts & Culture",
              "La Maison",
              "Sustainability",
              "Latest News",
              "Careers",
              "Foundation LaVitrine",
            ].map((item) => (
              <li key={item} className="px-1 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h4 className="uppercase text-sm font-bold mb-6 border-b border-gray-700 pb-2">
            Connect
          </h4>
          <p className="mb-6 text-gray-400">
            <span className="underline px-1 rounded">
              Sign up
            </span>{" "}
            for LaVitrine emails and receive the latest news from the Maison,
            including exclusive online pre-launches and new collections.
          </p>
          <p className="text-gray-400 px-1 rounded">Follow Us</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs select-none">
        &copy; 2025 LaVitrine. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

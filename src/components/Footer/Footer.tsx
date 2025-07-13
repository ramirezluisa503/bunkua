import { useState } from 'react';
import facebook from '../../assets/images/facebook.webp';
import instagram from '../../assets/images/instagram.webp';
import twitter from '../../assets/images/twitter.webp';
import linkedin from '../../assets/images/linkedin.webp';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email subscribed:', email);
      setEmail('');
    }
  };

  return (
    <div className="h-20 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 mt-10 tracking-wide">
          BUNKUA
        </h1>

        <div className="w-full max-w-md">
          <h2 className="text-xl font-medium text-gray-700 mb-8 text-center">
            Subscribe to our newsletter
          </h2>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              {/* <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Input your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <footer className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 sm:mb-0">
            © 2020 BUNKUA.
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <img src={linkedin} className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label="Twitter"
            >
              <img src={twitter} className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label="facebook"
            >
              <img src={facebook} className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              aria-label="instagram"
            >
              <img src={instagram} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

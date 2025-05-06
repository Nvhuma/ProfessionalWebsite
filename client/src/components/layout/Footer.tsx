import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link 
              href="/"
              className="text-xl font-bold text-white"
            >
              <span className="text-primary">NV</span>Portfolio
            </Link>
            <p className="mt-2 text-sm text-gray-300">
              Software Developer based in Johannesburg, South Africa
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/nhlayiseko-vhuma-a20177258/" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com/Nvhuma" aria-label="GitHub" className="text-gray-300 hover:text-white">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:nhlayisekobvuma7@gmail.com" aria-label="Email" className="text-gray-300 hover:text-white">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Nhlayiseko Vhuma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Mountain } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-footer text-snow-white py-12 px-4">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Everest Mountain Bikes" className="h-12 w-auto rounded" />
            <div>
              <p className="font-heading font-bold text-lg">Everest Mountain Bikes</p>
              <p className="text-sm text-snow-white/70">Unlocking the Himalayas Since 2010</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-snow-white/70">
            <Mountain className="w-5 h-5" />
            <span className="text-sm">
              © {currentYear} Everest Mountain Bikes. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

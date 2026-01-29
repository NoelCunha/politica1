import React, { useState } from 'react';
    import { Menu, X, Flag } from 'lucide-react';

    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Biografia', href: '#biografia' },
        { name: 'Trajetória', href: '#trajetoria' },
        { name: 'Bandeiras', href: '#bandeiras' },
        { name: 'Prestação de Contas', href: '#contas' },
        { name: 'Ouvidoria', href: '#ouvidoria' },
      ];

      return (
        <nav className="bg-primary-900 text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-2">
                <Flag className="h-8 w-8 text-secondary-500" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-none">MARCELO CAVALCANTI</span>
                  <span className="text-xs text-gray-300 tracking-wider">DEPUTADO FEDERAL</span>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="hover:bg-primary-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary-700 focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-primary-800">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-700"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      );
    };

    export default Navbar;

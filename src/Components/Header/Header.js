import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      dropdown: [
        { name: 'Puzzle Parking System', path: '/product/puzzle' },
        { name: 'Stack Parking System', path: '/product/stack' },
        { name: 'G+2 Stack Parking System', path: '/product/gplus2' },
        { name: 'Rotary Parking System', path: '/product/rotary' },
        { name: 'Industrial Lifts', path: '/product/industrial' },
        { name: 'Scissor Lift', path: '/product/scissor' }
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Why Us', href: '/why-us' },
    {
      name: 'Contact',
      dropdown: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Business Enquiry', path: '/enquiry' }
      ]
    },
    {
      name: 'Client Insights',
      dropdown: [
        { name: 'FAQs', path: '/faqs' },
        { name: 'Landmark Projects', path: '/landmark-projects' },
        { name: "Do's & Don'ts", path: '/dos-and-donts' },
        { name: 'Videos', path: '/videos' }
      ]
    }
  ];

  const toggleMobileDropdown = (itemName) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileDropdownOpen({});
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-blue-900 company-name">
              Capital Engineers & Consultants
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                {item.dropdown ? (
                  <>
                    <div className="flex items-center text-gray-700 hover:text-blue-600 font-medium cursor-pointer py-2">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                    </div>
                    <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible transform translate-y-2 transition-all duration-200">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileDropdownOpen[item.name] ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdownOpen[item.name] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={closeMobileMenu}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={closeMobileMenu}
                      className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
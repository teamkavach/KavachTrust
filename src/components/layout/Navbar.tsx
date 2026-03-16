import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import IconMenu2 from '@tabler/icons-react/dist/esm/icons/IconMenu2';
import IconX from '@tabler/icons-react/dist/esm/icons/IconX';
import IconHeart from '@tabler/icons-react/dist/esm/icons/IconHeart';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'About', path: '/about' },
  { name: 'Impact', path: '/impact' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const isHomePage = location.pathname === '/';

  const handleNavClick = useCallback((path: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Close menu immediately
    setIsMobileMenuOpen(false);
    
    // Navigate with slight delay to allow animation
    timeoutRef.current = setTimeout(() => {
      navigate(path);
      timeoutRef.current = null;
    }, 150);
  }, [navigate]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
      style={{ width: '100%', maxWidth: '100vw' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg p-0">
                <img 
                  src="/images/Logo_TeamKavach.png" 
                  alt="Team Kavach Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to heart icon if image not found
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('bg-primary');
                      parent.classList.remove('bg-white');
                      parent.innerHTML = '<svg class="w-7 h-7 text-white fill-white" stroke-width="2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
                    }
                  }}
                />
              </div>
              <span className={`text-2xl font-black ${
                isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
              }`}>
                Team<span className="text-primary">Kavach</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : isScrolled || !isHomePage
                    ? 'text-foreground/70 hover:text-primary hover:bg-muted'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button asChild size="lg" className="font-bold px-6 shadow-lg hover:shadow-xl">
              <Link to="/donate">
                <IconHeart className="w-5 h-5 mr-2 fill-current" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              isScrolled || !isHomePage
                ? 'text-foreground hover:bg-muted'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <IconX className="w-7 h-7" strokeWidth={2.5} />
            ) : (
              <IconMenu2 className="w-7 h-7" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMobileMenu}
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute left-0 right-0 top-20 bg-white shadow-2xl border-t z-50"
              style={{ width: '100vw', maxWidth: '100%' }}
            >
              <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`block w-full text-left px-5 py-3.5 rounded-xl text-base font-bold transition-all ${
                      isActive(link.path)
                        ? 'bg-primary text-white'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full font-bold"
                    onClick={() => handleNavClick('/donate')}
                  >
                    <IconHeart className="w-5 h-5 mr-2 fill-current" />
                    Donate Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

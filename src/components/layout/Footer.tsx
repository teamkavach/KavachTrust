import React from 'react';
import { Link } from 'react-router-dom';
import IconBrandInstagram from '@tabler/icons-react/dist/esm/icons/IconBrandInstagram';
import IconBrandLinkedin from '@tabler/icons-react/dist/esm/icons/IconBrandLinkedin';
import IconBrandYoutube from '@tabler/icons-react/dist/esm/icons/IconBrandYoutube';
import IconMail from '@tabler/icons-react/dist/esm/icons/IconMail';
import IconPhone from '@tabler/icons-react/dist/esm/icons/IconPhone';
import IconMapPin from '@tabler/icons-react/dist/esm/icons/IconMapPin';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'About', path: '/about' },
  { name: 'Impact', path: '/impact' },
];

const volunteerLinks: { name: string; path: string }[] = [];

const supportLinks = [
  { name: 'Donate', path: '/donate' },
  { name: 'Contact Us', path: '/contact' },
  // { name: 'Partnership', path: '/contact' },
];

const socialLinks = [
  // { name: 'Facebook', icon: IconBrandFacebook, url: 'https://facebook.com' },
  { name: 'Instagram', icon: IconBrandInstagram, url: 'https://www.instagram.com/teamkavach/' },
  { name: 'LinkedIn', icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/team-kavach-a919b8301/' },
  // { name: 'Twitter', icon: IconBrandTwitter, url: 'https://twitter.com' },
  { name: 'YouTube', icon: IconBrandYoutube, url: 'https://www.youtube.com/@TeamKavach' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl p-0">
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
                      parent.innerHTML = '<svg class="w-9 h-9 text-white fill-white" stroke-width="2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
                    }
                  }}
                />
              </div>
              <span className="text-2xl font-black">
                Team<span className="text-primary">Kavach</span>
              </span>
            </div>
            <p className="text-white/90 mb-8 max-w-md leading-relaxed text-base">
              Sharing Warmth, Nurturing Dreams, Creating a Better Tomorrow.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <IconMail className="w-5 h-5" strokeWidth={2} />
                <a href="mailto:kavachtrust@gmail.com" className="font-medium">
                  kavachtrust@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/90 hover:text-white transition-colors">
                <IconPhone className="w-5 h-5" strokeWidth={2} />
                <a href="tel:+917892474801" className="font-medium">
                  +91 7892474801
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <IconMapPin className="w-5 h-5" strokeWidth={2} />
                <span className="font-medium">921, 3rd Main Rd, D-Block, 2nd Stage, Rajajinagar, Bengaluru, Karnataka 560010</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteer */}
          {volunteerLinks.length > 0 && (
          <div>
            <h3 className="font-black text-lg mb-6 text-white">Volunteer</h3>
            <ul className="space-y-3">
              {volunteerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          )}

          {/* Support */}
          <div>
            <h3 className="font-black text-lg mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
            {/* Terms/Privacy/Disclaimer - Add back when pages are ready
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
              <Link to="/terms" className="hover:text-white transition-colors font-medium">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
            </div>
            */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-white/85">
          <p className="font-medium">
            © {currentYear} TeamKavach. All rights reserved. | Registered Non-Profit Organization
          </p>
          <p className="mt-2 text-white/70">
            Built by volunteers for the community
          </p>
        </div>
      </div>
    </footer>
  );
};

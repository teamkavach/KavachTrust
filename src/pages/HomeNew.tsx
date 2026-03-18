import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';
import IconHeart from '@tabler/icons-react/dist/esm/icons/IconHeart';
import IconUsers from '@tabler/icons-react/dist/esm/icons/IconUsers';
import IconSchool from '@tabler/icons-react/dist/esm/icons/IconSchool';
import IconMedicalCross from '@tabler/icons-react/dist/esm/icons/IconMedicalCross';
import IconHeartHandshake from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake';
import IconArrowRight from '@tabler/icons-react/dist/esm/icons/IconArrowRight';
import IconBrandInstagram from '@tabler/icons-react/dist/esm/icons/IconBrandInstagram';
import IconCircleCheck from '@tabler/icons-react/dist/esm/icons/IconCircleCheck';
import IconFlame from '@tabler/icons-react/dist/esm/icons/IconFlame';
import IconStar from '@tabler/icons-react/dist/esm/icons/IconStar';
import IconSunrise from '@tabler/icons-react/dist/esm/icons/IconSunrise';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ImpactMediaGallery from '@/components/ImpactMediaGallery';

// Animated Section Wrapper - Optimized for mobile
const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Detect if mobile device for lighter animations
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 20 : 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 20 : 60 }}
      transition={{ duration: isMobile ? 0.3 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  useEffect(() => { document.title = 'Team Kavach | Sharing Warmth, Nurturing Dreams'; }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Using scroll progress for future parallax effects
  useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  // Rotating Slogans
  const slogans = [
    { text: 'Sharing Warmth', icon: IconFlame, color: 'from-orange-500 to-red-500' },
    { text: 'Nurturing Dreams', icon: IconStar, color: 'from-purple-600 to-red-900' },
    { text: 'Creating a Better Tomorrow', icon: IconSunrise, color: 'from-yellow-500 to-orange-500' },
  ];
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Load events and Instagram posts from JSON
  const [instagramUrls, setInstagramUrls] = useState<string[]>([]);
  const [instagramVisible, setInstagramVisible] = useState(false);
  const instagramSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch events data
    fetch('/data/events.json')
      .then(res => res.json())
      .then(data => {
        setInstagramUrls(data.instagramPosts || []);
      })
      .catch(err => console.error('Error loading events:', err));
  }, []);

  // Lazy-load Instagram embeds — only mount when section scrolls into view
  useEffect(() => {
    const el = instagramSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInstagramVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Add title attributes to Instagram iframes for accessibility
  useEffect(() => {
    const timer = setTimeout(() => {
      const iframes = document.querySelectorAll('iframe[id^="instagram-embed"]');
      iframes.forEach((iframe, i) => {
        if (!iframe.getAttribute('title')) {
          iframe.setAttribute('title', `Instagram post ${i + 1} from Team Kavach`);
        }
      });
    }, 3000); // Wait for embeds to load
    return () => clearTimeout(timer);
  }, [instagramUrls]);

  const programs = [
    {
      icon: IconSchool,
      title: 'Education',
      description: 'Teaching programs, exam kit distribution, notebook recycling drive, rural school rejuvenation project',
      impact: '3000+ notebooks recycled',
      color: 'bg-blue-500',
      image: '/images/programs/education.webp'
    },
    {
      icon: IconMedicalCross,
      title: 'Healthcare',
      description: 'Blood donation camps supporting thalassemia patients, hygiene kit distribution to BBMP workers, medication support to cancer victims',
      impact: '50,000+ ml blood collected',
      color: 'bg-primary',
      image: '/images/programs/HomepageHealth.webp'
    },
    {
      icon: IconHeartHandshake,
      title: 'Environment',
      description: 'Plog Treks, lake cleaning with bio-enzymes, umbrella distribution for street vendors',
      impact: '800+ kg plastic cleaned',
      color: 'bg-green-500',
      image: '/images/programs/HomePageEnvironment.webp'
    }
  ];

  // Animated Counter Hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    const startAnimation = () => {
      if (hasAnimated) return;
      setHasAnimated(true);
      
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    };
    
    return { count, startAnimation };
  };

  const volunteersCounter = useCounter(180, 2000);
  const blanketsCounter = useCounter(1000, 2500);
  const yearsCounter = useCounter(7, 1500);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Refined Full-Screen Design */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/kavachGroup.webp" 
            alt="Team Kavach volunteers group photo"
            width={1200}
            height={717}
            className="w-full h-full object-cover scale-105"
            loading="eager"
            onError={(e) => {
              e.currentTarget.src = '/images/kavachGroup.jpg';
            }}
          />
          {/* Refined Dark Overlay - Better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          {/* Subtle Color Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col justify-center min-h-screen">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Bangalore's Youth-Led NGO Since 2019
            </span>
          </motion.div>

          {/* Main Headline - Rotating Taglines */}
          <div className="mb-4 sm:mb-6 relative" style={{ height: 'clamp(4.5rem, 17.6vw, 11rem)' }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={`slogan-${currentSlogan}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                style={{ fontSize: 'clamp(2rem, 8vw, 5rem)' }}
                className="absolute inset-0 flex items-center justify-center font-black text-white leading-[1.1] tracking-tight text-center w-full"
              >
                <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                  {slogans[currentSlogan].text}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Slogan Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-2 sm:gap-3 justify-center mb-6 sm:mb-8"
          >
            {slogans.map((slogan, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlogan(idx)}
                className="relative flex items-center justify-center min-w-[24px] min-h-[24px] p-1"
                aria-label={slogan.text}
              >
                <span className={`block rounded-full transition-all duration-500 ${
                  idx === currentSlogan 
                    ? 'w-8 sm:w-12 h-1.5 sm:h-2 bg-white' 
                    : 'w-2 sm:w-2.5 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60'
                }`} />
              </button>
            ))}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)' }}
            className="text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2"
          >
            Join 180+ volunteers transforming lives through education, healthcare, and community action.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16"
          >
            <Button asChild size="lg" className="h-11 sm:h-14 px-6 sm:px-10 text-sm sm:text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all hover:scale-105">
              <Link to="/get-involved">
                Join The Movement
                <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="h-11 sm:h-14 px-6 sm:px-10 text-sm sm:text-lg font-bold border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 transition-all hover:scale-105"
            >
              <Link to="/programs">See Our Work</Link>
            </Button>
          </motion.div>

          {/* Live Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            onViewportEnter={() => {
              volunteersCounter.startAnimation();
              blanketsCounter.startAnimation();
              yearsCounter.startAnimation();
            }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-md sm:max-w-lg md:max-w-xl mx-auto"
          >
            <div className="text-center p-2 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }} className="font-black text-white">
                {volunteersCounter.count}+
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5 sm:mt-1">Volunteers</div>
            </div>
            <div className="text-center p-2 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }} className="font-black text-white">
                {blanketsCounter.count}+
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5 sm:mt-1">Blankets</div>
            </div>
            <div className="text-center p-2 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
              <div style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }} className="font-black text-white">
                {yearsCounter.count}+
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5 sm:mt-1">Years</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Simplified */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-white/70 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* What We Do - Bold Statement with Media Gallery */}
      <Section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImpactMediaGallery />
        </div>
      </Section>

      {/* Programs Grid */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Programs</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Focused initiatives creating measurable impact in education, healthcare, and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border border-border overflow-hidden">
                  <CardContent className="p-0">
                    {/* Program Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img 
                          src={program.image} 
                          alt={program.title}
                          width={400}
                          height={192}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image not found
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className={`hidden w-full h-full ${program.color} flex items-center justify-center`}>
                          <program.icon className="w-20 h-20 text-white opacity-50" strokeWidth={1.5} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                          <program.icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <h3 className="text-lg font-black mb-2">{program.title}</h3>
                        <p className="text-foreground/70 mb-3 leading-relaxed text-sm">
                          {program.description}
                        </p>
                        <div className="flex items-center text-primary font-bold text-sm">
                          <IconCircleCheck className="w-4 h-4 mr-2" strokeWidth={2} />
                          {program.impact}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-bold bg-primary hover:bg-primary/90 text-white">
              <Link to="/programs">
                View All Programs
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Volunteer CTA - Split Section */}
      <Section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-96 md:h-auto bg-primary overflow-hidden">
            {/* Volunteer Photo */}
            <img 
              src="/images/volunteers/team-action.jpg" 
              alt="Team Kavach Volunteers"
              width={600}
              height={384}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-12 bg-primary/80">
              <div className="text-center text-white">
                <IconUsers className="w-24 h-24 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
                <p className="text-2xl font-black text-white">Join Our Community</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 md:p-16 flex items-center">
            <div>
              <h2 className="mb-6 text-white">
                Care Starts With
                <br />
                A Volunteer
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Every volunteer brings unique skills and passion. Together, we create ripples of positive change across Bangalore.
              </p>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link to="/get-involved">
                  Become a Volunteer
                  <IconArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Instagram Gallery - Horizontal Scrolling Carousel */}
      <div ref={instagramSectionRef}>
      <Section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm border-2 border-primary/30 mb-6"
            >
              <IconBrandInstagram className="w-6 h-6 text-primary" />
              <span className="font-black uppercase tracking-wide text-primary">Live from Instagram</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              See Our Impact In Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Real stories. Real people. Real change happening every day.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-semibold lg:hidden">
              ← Swipe to see more posts →
            </p>
            <p className="hidden lg:block text-sm text-gray-500 font-semibold">
              ← Scroll to see more posts →
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative py-4">
          {/* Gradient Overlays for smooth edges - only on desktop */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable Instagram Feed - with visible scrollbar on desktop */}
          <div className="overflow-x-auto px-8 sm:px-10 lg:px-16 pb-6 scrollbar-visible-desktop">
            <div className="flex gap-6 lg:gap-8 pb-4 w-max items-start">
              {instagramUrls.slice(0, 6).map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px' }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white border border-gray-100"
                  style={{ height: 'auto', maxHeight: '680px' }}
                >
                  <div className="w-full h-full">
                    {instagramVisible ? (
                      <InstagramEmbed 
                        url={url} 
                        width="100%"
                        captioned
                        embedPlaceholder={<div className="h-[400px] flex items-center justify-center bg-gray-100"><div className="animate-pulse text-gray-400">Loading...</div></div>}
                      />
                    ) : (
                      <div className="h-[500px] bg-gray-100 flex flex-col items-center justify-center gap-3">
                        <IconBrandInstagram className="w-10 h-10 text-gray-300" />
                        <div className="w-32 h-3 bg-gray-200 rounded animate-pulse" />
                        <div className="w-24 h-3 bg-gray-200 rounded animate-pulse" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 px-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all">
            <a href="https://www.instagram.com/teamkavach/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <IconBrandInstagram className="w-5 h-5" strokeWidth={2} />
              Follow @teamkavach
            </a>
          </Button>
        </div>

        {/* Custom Scrollbar Styles */}
        <style>{`
          /* Hide scrollbar on mobile */
          .scrollbar-visible-desktop::-webkit-scrollbar {
            height: 8px;
            display: none;
          }
          .scrollbar-visible-desktop {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          /* Show styled scrollbar on desktop */
          @media (min-width: 1024px) {
            .scrollbar-visible-desktop::-webkit-scrollbar {
              display: block;
              height: 10px;
            }
            .scrollbar-visible-desktop::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 10px;
            }
            .scrollbar-visible-desktop::-webkit-scrollbar-thumb {
              background: #DB143C;
              border-radius: 10px;
            }
            .scrollbar-visible-desktop::-webkit-scrollbar-thumb:hover {
              background: #b91133;
            }
            .scrollbar-visible-desktop {
              scrollbar-width: thin;
              scrollbar-color: #DB143C #f1f1f1;
            }
          }
        `}</style>
      </Section>
      </div>

      {/* Final CTA */}
      <Section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconHeart className="w-14 h-14 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-white mb-6">
            Are You Ready To Make A Difference?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Every action counts. Every volunteer matters. Every life touched creates a ripple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link to="/get-involved">Start Volunteering</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/donate">Support Our Cause</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

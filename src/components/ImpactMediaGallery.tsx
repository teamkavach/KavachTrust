import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import IconHeart from '@tabler/icons-react/dist/esm/icons/IconHeart';
import IconExternalLink from '@tabler/icons-react/dist/esm/icons/IconExternalLink';
import IconNews from '@tabler/icons-react/dist/esm/icons/IconNews';

// Lazy-loaded Media Component
const LazyMedia: React.FC<{
  type: 'image' | 'video' | 'youtube' | 'press';
  src: string;
  alt: string;
  poster?: string;
  index: number;
  headline?: string;
  publication?: string;
  date?: string;
}> = ({ type, src, alt, poster, index, headline, publication, date }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // For press cards, mark as loaded immediately since there's no media to load
          if (type === 'press') {
            setIsLoaded(true);
          }
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }

    return () => observer.disconnect();
  }, [type]);

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <motion.div
      ref={mediaRef}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="relative group overflow-hidden rounded-xl bg-gray-100 border-2 border-gray-200 aspect-[16/10] shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {!isLoaded && !hasError && type !== 'press' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="text-center text-gray-400 p-4">
            <IconHeart className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p className="text-sm">{alt}</p>
          </div>
        </div>
      )}
      
      {(isVisible || type === 'press') && !hasError && (
        <>
          {type === 'press' ? (
            // Press Article Card
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
                {/* Newspaper Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <IconNews className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Press Coverage
                  </span>
                </div>

                {/* Article Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3 line-clamp-3 group-hover:text-primary transition-colors">
                    {headline || alt}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    {publication && (
                      <p className="font-semibold text-primary">{publication}</p>
                    )}
                    {date && (
                      <p className="text-gray-500">{date}</p>
                    )}
                  </div>
                </div>

                {/* Read Article Button */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-bold text-primary group-hover:text-primary/80 transition-colors">
                    Read Full Article
                  </span>
                  <IconExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
            </a>
          ) : type === 'image' ? (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setHasError(true);
                console.warn(`Failed to load image: ${src}`);
              }}
            />
          ) : type === 'youtube' ? (
            <iframe
              src={getYouTubeEmbedUrl(src) || ''}
              title={alt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setHasError(true);
                console.warn(`Failed to load YouTube video: ${src}`);
              }}
            />
          ) : (
            <video
              src={src}
              poster={poster}
              controls
              preload="metadata"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={() => setIsLoaded(true)}
              onError={() => {
                setHasError(true);
                console.warn(`Failed to load video: ${src}`);
              }}
            />
          )}
          
          {/* Overlay on hover - hide for YouTube videos and press cards */}
          {isLoaded && type !== 'youtube' && type !== 'press' && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
              <p className="text-white text-sm md:text-base font-semibold drop-shadow-lg">{alt}</p>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

interface MediaItem {
  type: 'image' | 'video' | 'youtube' | 'press';
  src: string;
  alt: string;
  poster?: string;
  headline?: string;
  publication?: string;
  date?: string;
}

export default function ImpactMediaGallery() {
  const [impactMedia, setImpactMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    // Fetch impact media data
    fetch('/data/impact-media.json')
      .then(res => res.json())
      .then(data => {
        setImpactMedia(data.impactMedia || []);
      })
      .catch(err => console.error('Error loading impact media:', err));
  }, []);

  return (
    <>
      {/* Header Text */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-white"
        >
          What Happens When We Care
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          Real change happens when communities come together. Through dedicated volunteers, here is how we are transforming lives across Bengaluru.
        </motion.p>
      </div>

      {/* White Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl py-6 md:py-8 lg:py-10 overflow-hidden"
      >
        {/* Scroll Hint */}
        <div className="text-center mb-6 px-6 md:px-8 lg:px-10">
          <p className="text-xs sm:text-sm text-gray-500 font-semibold lg:hidden">
            ← Swipe to see more →
          </p>
          <p className="hidden lg:block text-sm text-gray-500 font-semibold">
            ← Scroll to see more →
          </p>
        </div>

        {/* Horizontal Scrolling Media Gallery */}
        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-4 scrollbar-visible-media px-6 md:px-8 lg:px-10">
            <div className="flex gap-4 md:gap-6 w-max">
              {impactMedia.map((media, index) => (
                <div key={index} className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] max-w-[600px]">
                  <LazyMedia
                    type={media.type}
                    src={media.src}
                    alt={media.alt}
                    poster={media.poster}
                    headline={media.headline}
                    publication={media.publication}
                    date={media.date}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Custom Scrollbar Styles for Media Gallery */}
      <style>{`
        /* Hide scrollbar on mobile */
        .scrollbar-visible-media::-webkit-scrollbar {
          height: 8px;
          display: none;
        }
        .scrollbar-visible-media {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Show styled scrollbar on desktop */
        @media (min-width: 1024px) {
          .scrollbar-visible-media::-webkit-scrollbar {
            display: block;
            height: 10px;
          }
          .scrollbar-visible-media::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 10px;
          }
          .scrollbar-visible-media::-webkit-scrollbar-thumb {
            background: #DB143C;
            border-radius: 10px;
          }
          .scrollbar-visible-media::-webkit-scrollbar-thumb:hover {
            background: #b91133;
          }
          .scrollbar-visible-media {
            scrollbar-width: thin;
            scrollbar-color: #DB143C #f1f5f9;
          }
        }
      `}</style>
    </>
  );
}

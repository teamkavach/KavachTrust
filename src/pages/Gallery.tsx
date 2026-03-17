import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import IconPhotoPlus from '@tabler/icons-react/dist/esm/icons/IconPhotoPlus';
import IconX from '@tabler/icons-react/dist/esm/icons/IconX';
import IconArrowLeft from '@tabler/icons-react/dist/esm/icons/IconArrowLeft';
import IconCalendar from '@tabler/icons-react/dist/esm/icons/IconCalendar';
import IconChevronLeft from '@tabler/icons-react/dist/esm/icons/IconChevronLeft';
import IconChevronRight from '@tabler/icons-react/dist/esm/icons/IconChevronRight';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface Event {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  date: string;
  photoCount: number;
  photos?: Photo[]; // Optional, loaded dynamically
}

interface GalleryData {
  events: Event[];
}

// Lazy Image Component
const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}> = ({ src, alt, className, onError }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative w-full h-full">
      {/* Placeholder/Blur */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary-200 animate-pulse" />
      )}
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={onError}
          loading="lazy"
        />
      )}
    </div>
  );
};

const Gallery: React.FC = () => {
  useEffect(() => { document.title = 'Gallery | Team Kavach'; }, []);

  const [galleryData, setGalleryData] = useState<GalleryData>({ events: [] });
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  // Load only event metadata (covers only - super fast!)
  useEffect(() => {
    fetch('/data/gallery-index.json')
      .then(res => res.json())
      .then(data => {
        setGalleryData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading gallery:', err);
        setLoading(false);
      });
  }, []);

  // Generate photo list dynamically based on folder structure
  const loadEventPhotos = (event: Event) => {
    setLoadingPhotos(true);
    
    // Generate photo array dynamically
    const photos: Photo[] = [];
    for (let i = 1; i <= event.photoCount; i++) {
      photos.push({
        id: i,
        url: `/images/gallery/${event.id}/${event.id}-${i}.webp`,
        caption: `${event.name} - Photo ${i}`
      });
    }
    
    const eventWithPhotos = { ...event, photos };
    setSelectedEvent(eventWithPhotos);
    setLoadingPhotos(false);
  };

  // Keyboard navigation for lightbox (must be at top level)
  useEffect(() => {
    if (!selectedPhoto || !selectedEvent) return;
    
    const eventPhotos = selectedEvent.photos || [];
    
    const handleKeyPress = (e: KeyboardEvent) => {
      const currentIndex = eventPhotos.findIndex(p => p.id === selectedPhoto.id);
      
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setSelectedPhoto(eventPhotos[currentIndex - 1]);
      } else if (e.key === 'ArrowRight' && currentIndex < eventPhotos.length - 1) {
        setSelectedPhoto(eventPhotos[currentIndex + 1]);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedPhoto, selectedEvent]);

  // If an event is selected, show its photos
  if (selectedEvent) {
    const eventPhotos = selectedEvent.photos || [];
    
    const currentPhotoIndex = selectedPhoto ? eventPhotos.findIndex(p => p.id === selectedPhoto.id) : -1;
    const hasNext = currentPhotoIndex < eventPhotos.length - 1;
    const hasPrev = currentPhotoIndex > 0;
    
    const goToNext = () => {
      if (hasNext) setSelectedPhoto(eventPhotos[currentPhotoIndex + 1]);
    };
    
    const goToPrev = () => {
      if (hasPrev) setSelectedPhoto(eventPhotos[currentPhotoIndex - 1]);
    };
    
    return (
      <div className="min-h-screen bg-background">
        {/* Compact Event Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white pt-24 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedEvent(null)}
              className="mb-4 flex items-center gap-2 text-white hover:text-white font-semibold transition-colors"
            >
              <IconArrowLeft className="w-5 h-5" />
              Back to Gallery
            </button>
            <h1 className="text-3xl md:text-4xl font-black mb-2 text-white">{selectedEvent.name}</h1>
            <p className="text-white">{selectedEvent.description}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Loading Photos State */}
          {loadingPhotos && (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-secondary-600">Loading photos...</p>
            </div>
          )}

          {/* Photos Grid */}
          {!loadingPhotos && eventPhotos.length === 0 && (
            <div className="text-center py-20">
              <IconPhotoPlus className="w-20 h-20 text-secondary-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">No Photos Yet</h3>
              <p className="text-secondary-600">Photos from this event will be added soon!</p>
            </div>
          )}
          
          {!loadingPhotos && eventPhotos.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {eventPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-secondary-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <LazyImage
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/kavachGroup.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
                      <p className="font-bold text-base text-white drop-shadow-2xl">{photo.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox Modal - Below navbar */}
        {selectedPhoto && (
          <div
            className="fixed top-20 left-0 right-0 bottom-0 bg-black z-[60] flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            >
              <IconX className="w-10 h-10" />
            </button>
            
            {/* Previous Button */}
            {hasPrev && (
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors bg-black/50 rounded-full p-3 z-10"
                aria-label="Previous photo"
              >
                <IconChevronLeft className="w-8 h-8" />
              </button>
            )}
            
            {/* Next Button */}
            {hasNext && (
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors bg-black/50 rounded-full p-3 z-10"
                aria-label="Next photo"
              >
                <IconChevronRight className="w-8 h-8" />
              </button>
            )}
            
            {/* Image Container - fills available space */}
            <div className="flex-1 w-full flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Caption at bottom */}
            <div className="w-full text-center py-4" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold mb-1 text-white">{selectedPhoto.caption}</h3>
              <p className="text-white/80 text-base font-medium">
                Photo {currentPhotoIndex + 1} of {eventPhotos.length}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <IconPhotoPlus className="w-5 h-5" />
              <span className="text-sm font-bold">Our Visual Journey</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Photo Gallery
              <br />
              <span className="text-secondary">Stories in Pictures</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Witness the moments that define our mission—real people, real impact, real change across Bangalore.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-secondary-600">Loading gallery...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && galleryData.events.length === 0 && (
          <div className="text-center py-20">
            <IconPhotoPlus className="w-20 h-20 text-secondary-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">No Events Yet</h3>
            <p className="text-secondary-600">Event albums will be added soon!</p>
          </div>
        )}

        {/* Event Albums Grid */}
        {!loading && galleryData.events.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryData.events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => loadEventPhotos(event)}
              >
                {/* Album Cover */}
                <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary-200 shadow-md hover:shadow-xl transition-all duration-300">
                  <LazyImage
                    src={event.coverImage}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/kavachGroup.webp';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-bold text-xl mb-1.5 drop-shadow-2xl group-hover:text-yellow-300 transition-colors">
                        {event.name}
                      </h3>
                      <p className="text-white/95 text-sm line-clamp-2 mb-2 drop-shadow-lg">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-white/95 text-xs drop-shadow-lg">
                        <IconCalendar className="w-3.5 h-3.5" />
                        {new Date(event.date).toLocaleDateString('en-IN', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  {/* Photo Count Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-secondary-900">
                    {event.photoCount} {event.photoCount === 1 ? 'Photo' : 'Photos'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

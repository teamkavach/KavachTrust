import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { programs } from '@/data/programs';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-secondary">Our</span>{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary/70 max-w-3xl mx-auto">
              Transforming lives through focused initiatives across education, healthcare, community development, and more
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8"
          >
            {programs.map((program) => (
              <motion.div key={program.id} variants={fadeInUp}>
                <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50">
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    <div className="absolute top-6 left-6 text-6xl">{program.icon}</div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{program.title}</h3>
                      <p className="text-lg opacity-90">{program.tagline}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8">
                    <p className="text-secondary/70 text-lg mb-6">{program.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {program.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-secondary/60 font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary mb-3">What We Do:</h4>
                      <div className="space-y-2">
                        {program.highlights.slice(0, 3).map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-secondary/70">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full group-hover:bg-primary group-hover:text-white transition-all"
                    >
                      <Link to={`/programs/${program.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Support Our Programs?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your contribution can help us expand these initiatives and reach more people in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

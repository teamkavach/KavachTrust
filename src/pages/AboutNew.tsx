import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import IconHeart from '@tabler/icons-react/dist/esm/icons/IconHeart';
import IconUsers from '@tabler/icons-react/dist/esm/icons/IconUsers';
import IconTarget from '@tabler/icons-react/dist/esm/icons/IconTarget';
import IconSparkles from '@tabler/icons-react/dist/esm/icons/IconSparkles';
import IconArrowRight from '@tabler/icons-react/dist/esm/icons/IconArrowRight';
import IconQuote from '@tabler/icons-react/dist/esm/icons/IconQuote';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function About() {
  useEffect(() => { document.title = 'About | Team Kavach'; }, []);

  const values = [
    {
      icon: IconHeart,
      title: 'Compassion',
      description: 'We lead with empathy and care in everything we do',
      color: 'bg-red-500'
    },
    {
      icon: IconUsers,
      title: 'Community',
      description: 'Together we achieve more than we ever could alone',
      color: 'bg-blue-500'
    },
    {
      icon: IconTarget,
      title: 'Impact',
      description: 'Every action is focused on creating measurable change',
      color: 'bg-green-500'
    },
    {
      icon: IconSparkles,
      title: 'Innovation',
      description: 'We find creative solutions to complex problems',
      color: 'bg-purple-500'
    }
  ];

  const milestones = [
    { year: '2019', title: 'Founded', desc: 'Team Kavach established with first Blanket Distribution Drive' },
    { year: '2020', title: 'Covid Relief', desc: 'Distributed hygiene kits' },
    { year: '2021', title: 'Blood Donation', desc: 'Launched targeted blood donation camps' },
    { year: '2022', title: 'Environmental', desc: 'Started Plog Treks & Lake Cleaning initiatives' },
    { year: '2023', title: 'Education', desc: 'Started teaching programs in government schools' },
    { year: '2024', title: 'School Rejuvenation', desc: 'Renovated Rural Government School with 80+ volunteers' },
    { year: '2025', title: 'Notebook Drive', desc: 'Recycled 3000+ notebooks with 100+ volunteers' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#DB143C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <IconSparkles className="w-5 h-5" />
              <span className="text-sm font-bold">Since 2019</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              About Us
              <br />
              <span className="text-secondary">Our Story</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              We're a passionate community of volunteers dedicated to creating lasting social impact in Bangalore through grassroots initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">Who We Are</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground font-black">Team Kavach</strong> was founded in 2019 by a group of friends united by a shared purpose. What began as a simple blanket distribution initiative has evolved into a wide-ranging effort to address diverse social and environmental needs.
                </p>
                <p>
                  At its core, <strong className="text-primary font-black">Kavach—meaning "shield"</strong>—embodies the spirit of protection. We devote our time, energy, and resources to support underprivileged communities, promote education, drive environmental conservation, and spread awareness.
                </p>
                <p>
                  Our belief is simple: <strong className="font-black">time is the most precious gift</strong>, and contributing it selflessly helps make the world a better, safer place.
                </p>
                <p>
                  Today, we've distributed <strong className="text-primary font-black">1000+ blankets</strong>, collected <strong className="text-primary font-black">50,000+ ml blood</strong>, recycled <strong className="text-primary font-black">800+ kg plastic waste</strong>, and continue to be a protective shield for society's most vulnerable.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden shadow-2xl">
                {/* Building Communities Photo */}
                <img 
                  src="/images/BuildingCommunties.webp" 
                  alt="Building Communities - Team Kavach"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/60 to-secondary/60"> */}
                  <div className="text-center text-white p-8">
                    <IconHeart className="w-32 h-32 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
                    <p className="text-3xl opacity-90 text-white">Building Communities</p>
                    <p className="text-xl mt-2 opacity-90 text-white">One Act at a Time</p>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-xl transition-all">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <value.icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black mb-4">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Our Journey - Professional Timeline */}
      <Section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-xl text-foreground/60">Key milestones in our growth</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - Center on desktop, left on mobile */}
            <div className="absolute left-[18px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20" />

            {/* Timeline Items */}
            <div className="space-y-6 md:space-y-0">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="relative md:py-6"
                  >
                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                      <div className={`flex items-center ${isLeft ? '' : 'flex-row-reverse'}`}>
                        {/* Card */}
                        <div className={`w-[calc(50%-24px)] ${isLeft ? 'pr-0' : 'pl-0'}`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`bg-primary/5 rounded-xl p-6 hover:bg-primary/10 transition-colors ${isLeft ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}
                            style={{ maxWidth: '380px' }}
                          >
                            <div className="text-4xl font-black text-primary mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{milestone.title}</h3>
                            <p className="text-foreground/60 text-sm">{milestone.desc}</p>
                          </motion.div>
                        </div>
                        
                        {/* Node */}
                        <div className="w-12 flex justify-center relative z-10">
                          <div className="w-3 h-3 rounded-full bg-primary shadow-sm" />
                        </div>
                        
                        {/* Empty space for other side */}
                        <div className="w-[calc(50%-24px)]" />
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start gap-5">
                      {/* Node */}
                      <div className="relative z-10 flex-shrink-0 mt-2">
                        <div className="w-3 h-3 rounded-full bg-primary shadow-sm" />
                      </div>
                      
                      {/* Card */}
                      <div className="flex-1 bg-primary/5 rounded-xl p-4">
                        <div className="text-2xl font-black text-primary mb-1">{milestone.year}</div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{milestone.title}</h3>
                        <p className="text-foreground/60 text-sm">{milestone.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* End Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center mt-8 md:justify-center pl-1 md:pl-0"
            >
              <div className="flex items-center gap-2 text-foreground/50">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
                <span className="text-sm font-medium">The journey continues...</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section className="py-32 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconQuote className="w-16 h-16 mx-auto mb-8 text-primary/30" strokeWidth={1.5} />
          <h2 className="mb-8 text-foreground">Our Mission</h2>
          <p className="text-3xl md:text-4xl font-black leading-tight max-w-4xl mx-auto mb-12">
            "To be the Kavach for those around us facing various life challenges like cold, hunger, illiteracy, poverty, pollution, infections and heat, <br />by responding with compassion, innovation and collective action."
          </p>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Our Team</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Led by passionate volunteers committed to social change
          </p>
          
          <div className="bg-primary rounded-3xl overflow-hidden text-white relative">
            {/* Team Group Photo */}
            <img 
              src="/images/team/team-group.jpg" 
              alt="Team Kavach Volunteers"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="relative p-16">
              <IconUsers className="w-24 h-24 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-4xl font-black mb-4 text-white">180+ Volunteers</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Students, professionals and community leaders united by a common goal creating a positive change
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                <Link to="/get-involved">
                  Join Our Team
                  <IconArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 bg-[#DB143C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be part of our journey to create lasting impact in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14 font-bold">
              <Link to="/get-involved">Become a Volunteer</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="text-lg px-10 h-14 bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/donate">Support Our Cause</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

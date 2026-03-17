import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import IconSchool from '@tabler/icons-react/dist/esm/icons/IconSchool';
import IconMedicalCross from '@tabler/icons-react/dist/esm/icons/IconMedicalCross';
import IconHeartHandshake from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake';
import IconUsers from '@tabler/icons-react/dist/esm/icons/IconUsers';
import IconCircleCheck from '@tabler/icons-react/dist/esm/icons/IconCircleCheck';
import IconTrophy from '@tabler/icons-react/dist/esm/icons/IconTrophy';
import { Button } from '@/components/ui/button';

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

export default function Programs() {
  useEffect(() => { document.title = 'Programs | Team Kavach'; }, []);

  const programs = [
    {
      icon: IconSchool,
      title: 'Education & Youth Empowerment',
      tagline: 'Empowering Through Learning',
      description: 'From teaching Computer Science and English in government schools to distributing exam kits and recycling notebooks, we equip students with tools for success.',
      impact: ['3000+ notebooks recycled', '1700 recycled books distributed', '150+ exam kits distributed', '50+ teaching hours (CS & English)', 'Rural school rejuvenation project', 'Career counselling and soft skill training to govt schools and colleges'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/gallery/govt-school-college/govt-school-college-10.webp'
    },
    {
      icon: IconMedicalCross,
      title: 'Health & Welfare Drives',
      tagline: 'Caring for the Vulnerable',
      description: 'Blood donation camps for thalassemia patients, sanitary kit distribution for BBMP women workers, and umbrella donations for street vendors during summer.',
      impact: ['50,000+ ml blood collected', '400+ sanitary kits donated', '10+ umbrellas distributed','Engagement with Thalassemia Child Care Center', 'Medication support to pediatric cancer patients at the Indira Gandhi Institute of Child Health'],
      color: 'bg-primary',
      gradient: 'from-red-900 to-red-700',
      image: '/images/gallery/blood-donation/blood-donation-5.webp'
    },
    {
      icon: IconHeartHandshake,
      title: 'Winter Blanket Distribution',
      tagline: 'Warmth for the Homeless',
      description: 'Our flagship overnight annual drive since 2019—distributing blankets and food to homeless individuals across Bengaluru during peak winter.',
      impact: ['1000+ blankets distributed', '500+ food packets', 'Annual overnight drives', 'Covering all of Bengaluru'],
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-amber-500',
      image: '/images/gallery/blanket-distribution/blanket-distribution-3.webp'
    },
    {
      icon: IconUsers,
      title: 'Environmental Conservation',
      tagline: 'Protecting Our Planet',
      description: 'Plog Treks at Shivagange Hills, lake cleaning using natural bio-enzymes from vNurture initiative, and promoting eco-friendly practices.',
      impact: ['800+ kg plastic cleaned', '5+ years of Plog Treks', 'Bio-enzyme lake cleaning', 'Zero-chemical approach', 'Mango Seed Collection and Plantation Drive'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500',
      image: '/images/gallery/plog-trek/plog-trek-6.webp'
    },
    {
      icon: IconTrophy,
      title: 'Sports and Cultural Engagement',
      tagline: 'Building Community Spirit',
      description: 'Organizing sports events and cultural programs in underprivileged communities to foster teamwork, confidence, and joy among youth.',
      impact: ["Led badminton tournament to fund rural school sports equipment.", "Organized annual sports-cultural meet at Govt Higher Primary School, Magadi Road.", "Co-organized sports day at MEG School, Bangalore.", "Conducted yoga sessions in govt schools."],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-fuchsia-500',
      image: '/images/gallery/team-group-photos/team-group-photos-3.webp'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
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
              <IconHeartHandshake className="w-5 h-5" />
              <span className="text-sm font-bold">Community Impact</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Our Programs
              <br />
              <span className="text-secondary">Creating Impact</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Focused initiatives across education, healthcare, and community development designed to create lasting change in Bangalore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image/Icon Side */}
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Real Image Background */}
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <program.icon className="w-12 h-12 text-foreground" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 drop-shadow-lg">{program.title}</h3>
                      <p className="text-lg sm:text-xl text-white font-bold drop-shadow-md">{program.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{program.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Impact Stats */}
                  <div className="space-y-3 mb-8">
                    {program.impact.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-6 h-6 flex-shrink-0 ${program.color} rounded-full flex items-center justify-center`}>
                          <IconCircleCheck className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-lg font-bold text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-[#DB143C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Make
            <br />
            A Difference?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join any of our programs as a volunteer or supporter. Together, we can create lasting impact.
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
              <Link to="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

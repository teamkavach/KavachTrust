import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import IconSchool from '@tabler/icons-react/dist/esm/icons/IconSchool';
import IconMedicalCross from '@tabler/icons-react/dist/esm/icons/IconMedicalCross';
import IconHeartHandshake from '@tabler/icons-react/dist/esm/icons/IconHeartHandshake';
import IconTrendingUp from '@tabler/icons-react/dist/esm/icons/IconTrendingUp';
import IconSparkles from '@tabler/icons-react/dist/esm/icons/IconSparkles';
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

export default function Impact() {
  useEffect(() => { document.title = 'Impact | Team Kavach'; }, []);

  const programImpact = [
    {
      icon: IconSchool,
      title: 'Education & Youth Impact',
      stats: [
        { label: 'Notebooks recycled', value: '3000+' },
        { label: 'Exam kits distributed', value: '150+' },
        { label: 'Teaching hours (CS & English)', value: '50+' },
        { label: 'School renovations', value: '1' }
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: IconMedicalCross,
      title: 'Health & Welfare Impact',
      stats: [
        { label: 'Blood collected (ml)', value: '50,000+' },
        { label: 'Sanitary kits donated', value: '400+' },
        { label: 'Blankets distributed', value: '1000+' },
        { label: 'Food packets distributed', value: '500+' }
      ],
      gradient: 'from-red-900 to-red-700'
    },
    {
      icon: IconHeartHandshake,
      title: 'Environmental Impact',
      stats: [
        { label: 'Plastic waste cleaned (kg)', value: '800+' },
        { label: 'Plog Treks conducted', value: '5+' },
        { label: 'Lakes cleaned with bio-enzymes', value: '5+' },
        { label: 'Mango Seeds Collected (kg)', value: '10+' }
      ],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      quote: "KAVACH, along with its founders and members, is the kind of group that restores my faith in humanity. Young yet responsible, few yet impactful, taking small steps guided by a strong vision—they are truly inspiring and motivating, while quietly reminding us of the good we can all contribute. A society and a nation become better because of such individuals and their selfless efforts. I feel happy and privileged to have known Vishwala and KAVACH. I am proud of the team and wish them the very best in everything they do, through KAVACH or otherwise.",
      author: "Mr. Manjunath BN",
      role: "Principal, Janani Adhyayana PU College, Vishweshwaraiah Layout, Bangalore",
      image: ""
    },
    {
      quote: "Team KAVACH volunteers visited our school and distributed notebooks to our students—an initiative that left a deep impression on me. In my 32 years of teaching, I have rarely come across such service-minded youngsters. Their thoughtful effort of collecting used notebooks and transforming them into new ones for underprivileged children is both practical and impactful. Their work also brought back memories of my own childhood struggles, when access to books was limited and we often had to reuse the same pages. It is heartening to see such meaningful efforts addressing challenges that still exist for many children today. What Team KAVACH is doing is truly inspiring. I sincerely appreciate their dedication and wish them continued success. May they continue to make a positive difference in many more lives.",
      author: "Vasantha G",
      role: "Senior Teacher, Nammura Shaale Government Higher Primary School, K Channasandra, Bangalore",
      image: ""
    },
    {
      quote: "Inner Wheel Club of Bangalore Vijayanagar has been associated with Team KAVACH for over six years, and it has been a privilege to collaborate on several meaningful initiatives. Our journey began with their annual blanket distribution drive, a consistent effort to bring warmth and care to those in need. We also partnered on a notebook recycling initiative, where used notebooks were transformed into new ones for underprivileged students—resulting in over a thousand notebooks and promoting both sustainability and access to education. Vishwala has played a key role in strengthening this partnership and expanding its impact. We truly value this association and appreciate Team KAVACH’s dedication to service. We wish them continued success and look forward to many more collaborations ahead.",
      author: "Namratha H K",
      role: "Secretary (2025–26), Inner Wheel Club of Bangalore Vijayanagar",
      image: ""
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
              <IconTrendingUp className="w-5 h-5" />
              <span className="text-sm font-bold">Growing Impact Since 2019</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Our Impact
              <br />
              <span className="text-secondary">In Numbers</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Real stories, real numbers, real change-see how we're transforming lives across Bangalore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program-wise Impact */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Impact by Program</h2>
            <p className="text-xl text-foreground/70">Detailed breakdown of our initiatives</p>
          </div>

          <div className="space-y-12">
            {programImpact.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all">
                  <CardContent className="p-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center`}>
                        <program.icon className="w-11 h-11 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl font-black">{program.title}</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {program.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                          <div className="text-sm font-bold text-foreground/70">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Stories from the Field</h2>
            <p className="text-xl text-foreground/70">Hear from those we've impacted</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    {/* Testimonial Photo */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-primary flex items-center justify-center text-white text-xl font-black">
                            {testimonial.author.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-black text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-foreground/60 font-bold">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <IconQuote className="w-12 h-12 text-primary/20 mb-4" />
                    <p className="text-lg text-foreground/80 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Growth Timeline */}
      <Section className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconSparkles className="w-20 h-20 mx-auto mb-8" strokeWidth={1.5} />
          <h2 className="mb-8">
            Growing Together
            <br />
            Since 2019
          </h2>
          <p className="text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            From a small group of 10 volunteers to a thriving community of 150+, our impact grows every day thanks to dedicated changemakers like you.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 bg-[#DB143C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Be Part of
            <br />
            This Impact
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your time, skills, and support can help us reach even more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14 font-bold">
              <Link to="/get-involved">Join as Volunteer</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="text-lg px-10 h-14 bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

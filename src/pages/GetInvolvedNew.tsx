import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import IconUsers from '@tabler/icons-react/dist/esm/icons/IconUsers';
import IconHeart from '@tabler/icons-react/dist/esm/icons/IconHeart';
import IconCalendar from '@tabler/icons-react/dist/esm/icons/IconCalendar';
import IconBrandInstagram from '@tabler/icons-react/dist/esm/icons/IconBrandInstagram';
import IconMail from '@tabler/icons-react/dist/esm/icons/IconMail';
import IconArrowRight from '@tabler/icons-react/dist/esm/icons/IconArrowRight';
import IconCircleCheck from '@tabler/icons-react/dist/esm/icons/IconCircleCheck';
import IconSparkles from '@tabler/icons-react/dist/esm/icons/IconSparkles';
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

export default function GetInvolved() {
  const volunteerOptions = [
    {
      title: 'Field Volunteer',
      description: 'Work directly with communities, teach students, organize health camps, and create real impact on the ground.',
      commitment: 'Weekends (4-6 hours)',
      benefits: ['Direct impact', 'Skill development', 'Community building', 'Certificate of service'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Organizer',
      description: 'Plan and execute community events, fundraisers, awareness campaigns, and volunteer meetups.',
      commitment: 'Flexible (10+ hours/month)',
      benefits: ['Leadership skills', 'Networking', 'Project management', 'Recognition'],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Content Creator',
      description: 'Create social media content, write stories, design graphics, and help spread awareness about our work.',
      commitment: 'Remote (5+ hours/week)',
      benefits: ['Portfolio building', 'Creative freedom', 'Remote work', 'Exposure'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Fill Application',
      description: 'Complete our simple volunteer application form with your details and interests.'
    },
    {
      number: '02',
      title: 'Orientation',
      description: 'Attend our orientation session to learn about our programs and community.'
    },
    {
      number: '03',
      title: 'Start Impact',
      description: 'Begin your volunteering journey and create lasting change in Bangalore.'
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
              <IconSparkles className="w-5 h-5" />
              <span className="text-sm font-bold">Join 150+ Volunteers</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Get Involved
              <br />
              <span className="text-secondary">Make an Impact</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Join our community of passionate volunteers creating real change in Bangalore through education, healthcare, and social initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">Why Volunteer With Us?</h2>
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Volunteering is more than giving your time—it's about building connections, developing skills, and being part of something bigger
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: IconHeart, title: 'Real Impact', desc: 'See tangible results of your efforts' },
              { icon: IconUsers, title: 'Community', desc: 'Join a passionate group of changemakers' },
              { icon: IconSparkles, title: 'Skill Growth', desc: 'Develop leadership & soft skills' },
              { icon: IconCalendar, title: 'Flexible', desc: 'Choose your commitment level' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-black mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Volunteer Roles */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Choose Your Role</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Multiple ways to contribute based on your skills, interests, and availability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {volunteerOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconUsers className="w-9 h-9 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4">{option.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {option.description}
                    </p>

                    {/* <div className="mb-6">
                      <div className="text-sm font-bold text-primary mb-2">TIME COMMITMENT</div>
                      <div className="text-lg font-black">{option.commitment}</div>
                    </div> */}

                    <div className="space-y-2 mb-6">
                      {option.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <IconCircleCheck className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-bold">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full font-bold" size="lg">
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-xl text-foreground/70">Simple 3-step process to start volunteering</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="text-8xl font-black text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-foreground/70 text-lg">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-16 -right-6 translate-x-1/2 items-center justify-center">
                    <IconArrowRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="font-bold text-lg px-10 h-14">
              <Link to="/contact">
                Start Your Application
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Support Us Section - Redesigned */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <IconHeart className="w-4 h-4" />
                Support Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Can't Volunteer? <br />
                <span className="text-primary">Support Us Instead</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your donations help us reach more communities, organize more events, and create bigger impact. Every rupee counts!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#DB143C] hover:bg-[#b91133] text-white font-bold">
                  <Link to="/donate">
                    Make a Donation
                    <IconArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right - Visual Card */}
            <div className="relative">
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-[#DB143C] to-[#a30f2e] p-8">
                    <h3 className="text-2xl font-black mb-6 text-white">Your Impact</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-white/15 rounded-lg p-4">
                        <div className="text-3xl font-black text-white">₹250</div>
                        <div className="text-white/90">= 1 Blanket + Food Packet</div>
                      </div>
                      <div className="flex items-center gap-4 bg-white/15 rounded-lg p-4">
                        <div className="text-3xl font-black text-white">₹500</div>
                        <div className="text-white/90">= School Kit for a Student</div>
                      </div>
                      <div className="flex items-center gap-4 bg-white/15 rounded-lg p-4">
                        <div className="text-3xl font-black text-white">₹1000</div>
                        <div className="text-white/90">= Support 4 Homeless People</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section - Redesigned */}
      <Section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-100 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Left - Content */}
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                    Have Questions?
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We're here to help! Reach out to us on Instagram or email for any queries about volunteering.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="https://www.instagram.com/teamkavach/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all group"
                    >
                      <IconBrandInstagram className="w-6 h-6" strokeWidth={2} />
                      <div>
                        <div className="font-bold">DM on Instagram</div>
                        <div className="text-sm text-white/80">@teamkavach</div>
                      </div>
                      <IconArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link 
                      to="/contact"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 text-foreground hover:bg-gray-200 transition-all group"
                    >
                      <IconMail className="w-6 h-6 text-primary" strokeWidth={2} />
                      <div>
                        <div className="font-bold">Send us an Email</div>
                        <div className="text-sm text-muted-foreground">kavachtrust@gmail.com</div>
                      </div>
                      <IconArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                {/* Right - Visual */}
                <div className="hidden md:flex bg-primary items-center justify-center p-10">
                  <div className="text-center text-white">
                    <IconUsers className="w-20 h-20 mx-auto mb-4" strokeWidth={1.5} />
                    <p className="text-xl font-black">Join 150+ Volunteers</p>
                    <p className="text-white/90 mt-2">Making a difference in Bangalore</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}

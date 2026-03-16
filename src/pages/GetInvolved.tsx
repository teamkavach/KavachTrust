import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, Handshake, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

export default function GetInvolved() {
  const opportunities = [
    {
      icon: Users,
      title: 'Become a Volunteer',
      description: 'Join our community of passionate volunteers making a direct impact in people\'s lives. From teaching children to supporting the elderly, your time creates real change.',
      color: 'from-blue-500 to-blue-700',
      actions: [
        'Weekend teaching programs',
        'Healthcare camps support',
        'Event coordination',
        'Social media advocacy'
      ],
      cta: 'Start Volunteering',
      link: '/contact'
    },
    {
      icon: Heart,
      title: 'Make a Donation',
      description: 'Your financial support helps us expand our reach and deepen our impact. Every contribution directly funds our programs and touches lives.',
      color: 'from-red-900 to-red-700',
      actions: [
        'One-time donation',
        'Monthly giving program',
        'Sponsor a child\'s education',
        'Fund a health camp'
      ],
      cta: 'Donate Now',
      link: '/donate'
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Organizations and businesses can amplify their social impact by partnering with TeamKavach. Together, we can create sustainable community change.',
      color: 'from-green-500 to-emerald-700',
      actions: [
        'Corporate volunteering programs',
        'CSR partnerships',
        'In-kind donations',
        'Skills-based volunteering'
      ],
      cta: 'Explore Partnerships',
      link: '/contact'
    },
    {
      icon: Building2,
      title: 'Sponsor a Program',
      description: 'Fund entire programs or specific initiatives. Your sponsorship can transform communities and create lasting impact at scale.',
      color: 'from-orange-500 to-red-600',
      actions: [
        'Education program sponsorship',
        'Healthcare camp funding',
        'Community center support',
        'Equipment and infrastructure'
      ],
      cta: 'Become a Sponsor',
      link: '/contact'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary">Join the</span>{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Movement
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary/70 max-w-3xl mx-auto mb-8">
              There are many ways to make a difference. Find the one that fits you best and start creating impact today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <AnimatedSection key={index}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${opportunity.color}`} />
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${opportunity.color} flex items-center justify-center mb-4`}>
                      <opportunity.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl">{opportunity.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {opportunity.actions.map((action, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-secondary/80">{action}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full rounded-full group-hover:translate-x-1 transition-transform"
                      size="lg"
                    >
                      <Link to={opportunity.link}>
                        {opportunity.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <AnimatedSection className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-20 h-20 mx-auto mb-8 fill-current" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Impact Matters
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Whether you give your time, resources, or expertise - every contribution creates ripples of positive change across communities.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6 h-auto">
            <Link to="/impact">See Our Impact Stories</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}

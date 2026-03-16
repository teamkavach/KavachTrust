import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MapPin, Clock, Heart, Target, Building, Award } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import { TestimonialCard, Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { getFeaturedOpportunities } from '../data/opportunities';
import { impactStats, testimonials } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredOpportunities = getFeaturedOpportunities();

  const howItWorksSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Explore opportunities',
      description: 'Browse meaningful volunteering roles across causes and cities that match your interests and skills.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Apply & get matched',
      description: 'Fill a simple application form. Our team will connect you with the right opportunity and team.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Attend orientation',
      description: 'Join our comprehensive orientation to learn about the program, meet fellow volunteers, and get trained.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Start volunteering & track impact',
      description: 'Begin your volunteer journey, make a difference, and track the lives you touch along the way.',
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="primary" size="md" className="mb-6">
                TeamKavach · Volunteer-Led Community
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
                Shielding vulnerable lives, one volunteer at a time
              </h1>
              <p className="text-xl text-secondary-700 mb-8 leading-relaxed">
                Join India's fastest-growing volunteer community. Connect with
                meaningful opportunities in education, healthcare, environment, and
                community development. Make a lasting impact, starting today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PrimaryButton
                  icon={ArrowRight}
                  onClick={() => navigate('/volunteer-opportunities')}
                >
                  Become a Volunteer
                </PrimaryButton>
                <SecondaryButton
                  onClick={() => navigate('/cities?city=Bangalore')}
                >
                  See Opportunities in Bangalore
                </SecondaryButton>
              </div>
            </motion.div>

            {/* Right Content - Floating Stats Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Placeholder for volunteer images collage */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="h-48 bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="h-48 bg-gradient-to-br from-accent-200 to-accent-400 rounded-2xl mt-8"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  />
                  <motion.div
                    className="h-48 bg-gradient-to-br from-secondary-200 to-secondary-400 rounded-2xl"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  />
                  <motion.div
                    className="h-48 bg-gradient-to-br from-primary-300 to-accent-300 rounded-2xl mt-8"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  />
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-lift p-6 max-w-xs"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-primary">725+</p>
                      <p className="text-sm text-secondary-600">Active Volunteers</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">3</p>
                      <p className="text-sm text-secondary-600">Cities</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-2xl font-bold text-secondary">15,000+</p>
                      <p className="text-sm text-secondary-600">Hours Contributed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.slice(0, 4).map((stat, index) => {
              const Icon = stat.icon === 'Users' ? Users : stat.icon === 'Heart' ? Heart : stat.icon === 'MapPin' ? MapPin : Building;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-3xl font-bold text-secondary mb-1">
                    {stat.value.toLocaleString()}
                    {stat.unit && <span className="text-xl text-secondary-600">+</span>}
                  </p>
                  <p className="text-sm text-secondary-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How TeamKavach Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              How TeamKavach Works
            </h2>
            <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
              Your journey from interested individual to impactful volunteer in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, rotateY: 5 }}
                className="relative"
              >
                <Card className="h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="text-primary mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                  <p className="text-secondary-700">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Featured Opportunities
              </h2>
              <p className="text-xl text-secondary-700">
                Start making a difference today with these high-impact roles
              </p>
            </div>
            <SecondaryButton onClick={() => navigate('/volunteer-opportunities')}>
              View All
            </SecondaryButton>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredOpportunities.slice(0, 3).map((opp, index) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover onClick={() => navigate(`/opportunity/${opp.slug}`)}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-2">
                        {opp.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {opp.causes.map((cause) => (
                          <Badge key={cause} variant="primary" size="sm">
                            {cause}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {opp.isNew && (
                      <Badge variant="success" size="sm">New</Badge>
                    )}
                  </div>
                  <p className="text-secondary-700 mb-4 line-clamp-2">
                    {opp.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-secondary-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {opp.city}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {opp.timeCommitment}
                    </div>
                  </div>
                  <Badge variant="accent" size="sm">{opp.type}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stories Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Stories from Our Community
            </h2>
            <p className="text-xl text-secondary-700">
              Hear from volunteers making a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <SecondaryButton onClick={() => navigate('/stories')}>
              Read More Stories
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 700+ volunteers across India who are creating lasting change in their communities
            </p>
            <PrimaryButton
              className="bg-accent hover:bg-accent-600"
              icon={ArrowRight}
              onClick={() => navigate('/volunteer-opportunities')}
            >
              Start Your Volunteer Journey
            </PrimaryButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

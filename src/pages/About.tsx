import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { teamMembers, partners } from '../data/mockData';

const About: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="About TeamKavach"
        subtitle="Learn about our mission, vision, and the team working to create lasting change"
        breadcrumb={[{ name: 'Home', path: '/' }, { name: 'About' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Mission & Vision */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
                <p className="text-secondary-700 leading-relaxed">
                  To mobilize passionate volunteers across India, connecting them with meaningful
                  opportunities to create lasting positive change in underserved communities.
                </p>
              </Card>
              <Card>
                <h3 className="text-2xl font-bold text-accent mb-4">Vision</h3>
                <p className="text-secondary-700 leading-relaxed">
                  A society where every individual has the opportunity to contribute their time and
                  skills to shield vulnerable lives and build stronger, more resilient communities.
                </p>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* The Problem */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">The Problem We Address</h2>
            <Card>
              <p className="text-lg text-secondary-700 leading-relaxed">
                Millions of people in India lack access to quality education, healthcare, and basic
                support systems. At the same time, countless individuals want to volunteer but don't
                know where to start or how to make a real impact. TeamKavach bridges this gap,
                creating structured, meaningful volunteering experiences that transform both
                volunteers and beneficiaries.
              </p>
            </Card>
          </motion.div>
        </section>

        {/* Our Approach */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Volunteer-Centric',
                  description:
                    'We believe volunteers are at the heart of change. We provide training, support, and community.',
                },
                {
                  title: 'Impact-Focused',
                  description:
                    'Every program is designed for measurable, long-term impact on beneficiaries and communities.',
                },
                {
                  title: 'Partnership-Driven',
                  description:
                    'We collaborate with trusted NGOs and community organizations to maximize reach and effectiveness.',
                },
              ].map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <h3 className="text-xl font-bold text-primary mb-3">{approach.title}</h3>
                    <p className="text-secondary-700">{approach.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-secondary mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-secondary-600 mb-3">{member.city}</p>
                  <p className="text-sm text-secondary-700">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section>
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Our Partners</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-center p-6">
                <img src={partner.logo} alt={partner.name} className="max-w-full h-16 grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

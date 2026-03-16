import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { StatCard } from '../components/Card';
import { impactStats, milestones } from '../data/mockData';
import { stories } from '../data/stories';
import { Users, Heart, MapPin, Building, Target, Clock } from 'lucide-react';

const Impact: React.FC = () => {
  const iconMap: Record<string, any> = {
    Users,
    Heart,
    MapPin,
    Building,
    Target,
    Clock,
  };

  return (
    <div>
      <PageHeader
        title="Our Impact"
        subtitle="Measuring the change we create together"
        breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Impact' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Impact Stats */}
        <section>
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
            Impact by Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatCard
                    label={stat.label}
                    value={stat.value}
                    unit={stat.unit}
                    icon={IconComponent && <IconComponent className="w-6 h-6" />}
                  />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Impact Stories */}
        <section>
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
            Real Stories, Real Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stories.filter((s) => s.category === 'Impact').map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{story.title}</h3>
                  <p className="text-secondary-600 text-sm mb-3">{story.city}</p>
                  <p className="text-secondary-700 italic mb-4">"{story.quote}"</p>
                  <p className="text-secondary-700 line-clamp-3">{story.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline */}
        <section>
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-full bg-primary-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-secondary mb-2">{milestone.title}</h3>
                  <p className="text-secondary-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impact;

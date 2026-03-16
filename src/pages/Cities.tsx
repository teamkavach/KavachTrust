import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { cities } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Cities: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="TeamKavach in Your City"
        subtitle="Discover volunteering opportunities in cities across India"
        breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Cities' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover onClick={() => navigate(`/volunteer-opportunities?city=${city.slug}`)}>
                <img src={city.image} alt={city.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-2">{city.name}</h3>
                <p className="text-secondary-700 mb-4">{city.description}</p>
                <div className="flex items-center gap-4 text-sm text-secondary-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {city.activeVolunteers} volunteers
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {city.opportunitiesCount} opportunities
                  </div>
                </div>
                <ul className="space-y-1 text-sm text-secondary-700 mb-4">
                  {city.highlights.map((highlight, i) => (
                    <li key={i}>• {highlight}</li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cities;

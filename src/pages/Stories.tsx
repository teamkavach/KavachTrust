import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { stories } from '../data/stories';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';

const Stories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader
        title="Volunteer Stories"
        subtitle="Real stories from our community of changemakers"
        breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Stories' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/stories/${story.slug}`)}
              className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lift transition-shadow"
            >
              <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <Badge variant={story.category === 'Volunteer' ? 'primary' : story.category === 'Impact' ? 'accent' : 'secondary'} size="sm" className="mb-3">
                  {story.category}
                </Badge>
                <h3 className="text-xl font-bold text-secondary mb-2">{story.title}</h3>
                <p className="text-sm text-secondary-600 mb-3">{story.city} · {story.readTime}</p>
                <p className="text-secondary-700 line-clamp-3 mb-4">{story.summary}</p>
                <p className="text-primary font-medium text-sm">Read full story →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;

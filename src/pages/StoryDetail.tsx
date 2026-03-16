import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoryBySlug } from '../data/stories';
import { PageHeader } from '../components/PageHeader';
import { SecondaryButton } from '../components/Button';
import { Badge } from '../components/Badge';
import { ArrowLeft } from 'lucide-react';

const StoryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const story = slug ? getStoryBySlug(slug) : null;

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Story Not Found</h2>
          <SecondaryButton onClick={() => navigate('/stories')}>
            Back to Stories
          </SecondaryButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={story.title}
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Stories', path: '/stories' },
          { name: story.title },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/stories')}
          className="flex items-center gap-2 text-primary hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Stories
        </button>

        <img src={story.image} alt={story.title} className="w-full h-96 object-cover rounded-2xl mb-8" />

        <div className="mb-6">
          <Badge variant="primary" className="mb-4">{story.category}</Badge>
          <div className="flex items-center gap-4 text-secondary-600 text-sm mb-6">
            <span>{story.author}</span>
            <span>•</span>
            <span>{story.city}</span>
            <span>•</span>
            <span>{story.readTime}</span>
            <span>•</span>
            <span>{story.publishedDate}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-secondary-700 mb-8">
            "{story.quote}"
          </blockquote>
          <div className="text-secondary-700 whitespace-pre-line leading-relaxed">
            {story.content}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <Badge key={tag} variant="secondary" size="sm">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, ArrowLeft } from 'lucide-react';
import { getOpportunityBySlug } from '../data/opportunities';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { PrimaryButton, SecondaryButton } from '../components/Button';

const OpportunityDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const opportunity = slug ? getOpportunityBySlug(slug) : null;

  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Opportunity Not Found</h2>
          <SecondaryButton onClick={() => navigate('/volunteer-opportunities')}>
            Browse Opportunities
          </SecondaryButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={opportunity.title}
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Opportunities', path: '/volunteer-opportunities' },
          { name: opportunity.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/volunteer-opportunities')}
          className="flex items-center gap-2 text-primary hover:text-primary-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Opportunities
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.causes.map((cause) => (
                  <Badge key={cause} variant="primary">{cause}</Badge>
                ))}
                <Badge variant="accent">{opportunity.type}</Badge>
                {opportunity.isNew && <Badge variant="success">New</Badge>}
                {opportunity.isPopular && <Badge variant="warning">Popular</Badge>}
              </div>

              <div className="flex flex-wrap gap-4 text-secondary-600 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{opportunity.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{opportunity.timeCommitment}</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <Card>
              <h2 className="text-2xl font-bold text-secondary mb-4">Overview</h2>
              <div className="text-secondary-700 whitespace-pre-line leading-relaxed">
                {opportunity.overview}
              </div>
            </Card>

            {/* Responsibilities */}
            <Card>
              <h2 className="text-2xl font-bold text-secondary mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {opportunity.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3 text-secondary-700">
                    <span className="text-primary mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Who This Is For */}
            <Card>
              <h2 className="text-2xl font-bold text-secondary mb-4">Who This Is For</h2>
              <p className="text-secondary-700 leading-relaxed">
                {opportunity.whoThisIsFor}
              </p>
            </Card>

            {/* Commitment Details */}
            <Card>
              <h2 className="text-2xl font-bold text-secondary mb-4">Commitment</h2>
              <div className="grid md:grid-cols-2 gap-4 text-secondary-700">
                <div>
                  <p className="font-semibold mb-1">Hours per week:</p>
                  <p>{opportunity.hoursPerWeek}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Duration:</p>
                  <p>{opportunity.duration}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Preferred days:</p>
                  <p>{opportunity.timeCommitment}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Time slots:</p>
                  <p>{opportunity.availabilitySlots.join(', ')}</p>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card>
              <h2 className="text-2xl font-bold text-secondary mb-4">Location</h2>
              <p className="text-secondary-700 mb-4">{opportunity.location}</p>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-secondary-500">Map placeholder</p>
              </div>
            </Card>

            {/* Partner Info */}
            {opportunity.partnerName && (
              <Card>
                <h2 className="text-2xl font-bold text-secondary mb-4">About the Program</h2>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {opportunity.partnerName}
                </h3>
                <p className="text-secondary-700">{opportunity.partnerDescription}</p>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Key Info Card */}
              <Card>
                <h3 className="text-lg font-bold text-secondary mb-4">Key Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-secondary-600 mb-1">Time needed/week</p>
                    <p className="font-semibold text-secondary">{opportunity.hoursPerWeek}</p>
                  </div>
                  <div>
                    <p className="text-secondary-600 mb-1">Duration</p>
                    <p className="font-semibold text-secondary">{opportunity.duration}</p>
                  </div>
                  <div>
                    <p className="text-secondary-600 mb-1">Type</p>
                    <p className="font-semibold text-secondary">{opportunity.type}</p>
                  </div>
                  <div>
                    <p className="text-secondary-600 mb-1">Team size</p>
                    <p className="font-semibold text-secondary">{opportunity.teamSize}</p>
                  </div>
                  {opportunity.urgency && (
                    <div>
                      <p className="text-secondary-600 mb-1">Urgency</p>
                      <Badge variant={opportunity.urgency === 'High' || opportunity.urgency === 'Urgent' ? 'warning' : 'secondary'}>
                        {opportunity.urgency}
                      </Badge>
                    </div>
                  )}
                  {opportunity.nextOrientationDate && (
                    <div>
                      <p className="text-secondary-600 mb-1 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Next Orientation
                      </p>
                      <p className="font-semibold text-secondary">{opportunity.nextOrientationDate}</p>
                    </div>
                  )}
                </div>
              </Card>

              {/* Apply Card */}
              <Card className="bg-primary-50">
                <h3 className="text-lg font-bold text-secondary mb-4">Ready to Volunteer?</h3>
                <p className="text-sm text-secondary-700 mb-4">
                  Join our community of passionate volunteers and start making a difference today!
                </p>
                <PrimaryButton fullWidth onClick={() => navigate('/contact')}>
                  Apply to Volunteer
                </PrimaryButton>
              </Card>

              {/* Languages */}
              <Card>
                <h3 className="text-lg font-bold text-secondary mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {opportunity.languages.map((lang) => (
                    <Badge key={lang} variant="secondary" size="sm">{lang}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;

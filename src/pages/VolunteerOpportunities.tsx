import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, Filter } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { PrimaryButton, GhostButton } from '../components/Button';
import { filterOpportunities } from '../data/opportunities';
import { useNavigate } from 'react-router-dom';
import type { CauseType, OpportunityType, TimeCommitment, AvailabilitySlot } from '../types';

const causes: CauseType[] = ['Children', 'Youth', 'Women', 'Health', 'Environment', 'Community', 'Tech/Design', 'Elderly'];
const opportunityTypes: OpportunityType[] = ['On-site', 'Remote', 'Hybrid'];
const timeCommitments: TimeCommitment[] = ['One-time event', 'Weekly', 'Weekends', 'Weekday evenings', 'Flexible'];
const availabilitySlots: AvailabilitySlot[] = ['Morning', 'Afternoon', 'Evening'];
const cities = ['Bangalore', 'Chennai', 'Hyderabad', 'Remote'];

const VolunteerOpportunities: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedTimeCommitments, setSelectedTimeCommitments] = useState<string[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredOpportunities = useMemo(() => {
    return filterOpportunities({
      search,
      cities: selectedCities,
      causes: selectedCauses,
      types: selectedTypes,
      timeCommitments: selectedTimeCommitments,
      availabilitySlots: selectedSlots,
    });
  }, [search, selectedCities, selectedCauses, selectedTypes, selectedTimeCommitments, selectedSlots]);

  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedCities([]);
    setSelectedCauses([]);
    setSelectedTypes([]);
    setSelectedTimeCommitments([]);
    setSelectedSlots([]);
  };

  const hasActiveFilters = search || selectedCities.length > 0 || selectedCauses.length > 0 || 
    selectedTypes.length > 0 || selectedTimeCommitments.length > 0 || selectedSlots.length > 0;

  return (
    <div>
      <PageHeader
        title="Volunteer Opportunities"
        subtitle="Browse curated roles from TeamKavach and our partner NGOs. Find the perfect opportunity to make a meaningful impact."
        breadcrumb={[
          { name: 'Home', path: '/' },
          { name: 'Opportunities' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Filter Panel - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-secondary">Filters</h3>
                {hasActiveFilters && (
                  <GhostButton onClick={resetFilters} className="text-sm">
                    Reset All
                  </GhostButton>
                )}
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search opportunities..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  City
                </label>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <label key={city} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCities.includes(city)}
                        onChange={() => toggleFilter(selectedCities, setSelectedCities, city)}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-sm text-secondary-700">{city}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cause Filter */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Cause
                </label>
                <div className="flex flex-wrap gap-2">
                  {causes.map((cause) => (
                    <button
                      key={cause}
                      onClick={() => toggleFilter(selectedCauses, setSelectedCauses, cause)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                        selectedCauses.includes(cause)
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {cause}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Opportunity Type
                </label>
                <div className="space-y-2">
                  {opportunityTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-sm text-secondary-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Commitment */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Time Commitment
                </label>
                <div className="space-y-2">
                  {timeCommitments.map((time) => (
                    <label key={time} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTimeCommitments.includes(time)}
                        onChange={() => toggleFilter(selectedTimeCommitments, setSelectedTimeCommitments, time)}
                        className="w-4 h-4 text-primary rounded focus:ring-primary"
                      />
                      <span className="text-sm text-secondary-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability Slots */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Availability
                </label>
                <div className="flex flex-wrap gap-2">
                  {availabilitySlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => toggleFilter(selectedSlots, setSelectedSlots, slot)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                        selectedSlots.includes(slot)
                          ? 'bg-accent text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-primary text-white p-4 rounded-full shadow-lift hover:bg-primary-600 transition-colors"
            >
              <Filter className="w-6 h-6" />
            </button>
          </div>

          {/* Opportunities List */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-secondary-700">
                Showing <span className="font-semibold">{filteredOpportunities.length}</span> opportunities
              </p>
            </div>

            <div className="grid gap-6">
              {filteredOpportunities.map((opp, index) => (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                >
                  <Card hover onClick={() => navigate(`/opportunity/${opp.slug}`)}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
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
                          {(opp.isNew || opp.isPopular) && (
                            <Badge variant={opp.isNew ? 'success' : 'warning'} size="sm">
                              {opp.isNew ? 'New' : 'Popular'}
                            </Badge>
                          )}
                        </div>

                        <p className="text-secondary-700 mb-4 line-clamp-2">
                          {opp.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-secondary-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {opp.city}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {opp.timeCommitment}
                          </div>
                          <Badge variant="accent" size="sm">{opp.type}</Badge>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <PrimaryButton onClick={() => navigate(`/opportunity/${opp.slug}`)}>
                          View Details
                        </PrimaryButton>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {filteredOpportunities.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-secondary-600 mb-4">
                    No opportunities match your filters
                  </p>
                  <GhostButton onClick={resetFilters}>
                    Clear all filters
                  </GhostButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;

import type { Opportunity } from '@/types';

// TODO: Replace with actual API calls when backend is ready
export const opportunities: Opportunity[] = [
  {
    id: '1',
    slug: 'teach-underprivileged-children-bangalore',
    title: 'Teach Underprivileged Children',
    shortDescription: 'Help children from low-income families with education support and mentoring.',
    overview: 'Join our education initiative to provide quality learning experiences to children from underserved communities in Bangalore. You will be working with children aged 8-14, helping them with homework, teaching English and Math fundamentals, and serving as a positive role model.\n\nOur program runs in 5 centers across Bangalore, reaching over 200 children every week. Volunteers are the backbone of this initiative, bringing energy, patience, and dedication to transform young lives through education.',
    responsibilities: [
      'Teach English and Mathematics to small groups (5-8 children)',
      'Help with homework and exam preparation',
      'Organize creative learning activities and games',
      'Track and report student progress',
      'Attend monthly volunteer coordination meetings'
    ],
    whoThisIsFor: 'Anyone passionate about education and patient with children. No formal teaching degree required, but you should be comfortable with middle school-level English and Math. Good communication skills in English and/or Kannada preferred.',
    causes: ['Children'],
    city: 'Bangalore',
    type: 'On-site',
    timeCommitment: 'Weekends',
    hoursPerWeek: '4-6 hours',
    duration: '6 months minimum',
    availabilitySlots: ['Afternoon'],
    urgency: 'High',
    teamSize: 'Group (4-6 volunteers per center)',
    location: 'Multiple centers: Whitefield, Electronic City, JP Nagar, Yelahanka, BTM Layout',
    languages: ['English', 'Kannada', 'Hindi'],
    minCommitmentMonths: 6,
    partnerName: 'Akshara Foundation',
    partnerDescription: 'Working towards ensuring that every child is in school and learning well.',
    nextOrientationDate: '2025-11-22',
    isFeatured: true,
    isPopular: true
  },
  {
    id: '2',
    slug: 'elderly-care-companion-bangalore',
    title: 'Elderly Care Companion',
    shortDescription: 'Spend quality time with senior citizens, providing companionship and support.',
    overview: 'Our Elderly Care program connects volunteers with senior citizens who need companionship, assistance, and emotional support. Many elderly individuals live alone or in care facilities and would greatly benefit from regular friendly visits.\n\nAs a volunteer, you will bring joy, conversation, and assistance to seniors, helping them feel valued and connected to the community.',
    responsibilities: [
      'Visit assigned senior citizens regularly (weekly or bi-weekly)',
      'Engage in conversations, read to them, or play games',
      'Assist with light tasks like writing letters or organizing photos',
      'Accompany them on short walks or medical appointments (optional)',
      'Report any health or safety concerns to the coordinator'
    ],
    whoThisIsFor: 'Compassionate individuals who enjoy spending time with elders. Good listening skills required. Preferred age: 21+. Background in healthcare or social work is a plus but not necessary.',
    causes: ['Elderly', 'Community'],
    city: 'Bangalore',
    type: 'On-site',
    timeCommitment: 'Flexible',
    hoursPerWeek: '2-4 hours',
    duration: '3 months minimum',
    availabilitySlots: ['Morning', 'Afternoon'],
    urgency: 'Medium',
    teamSize: 'Individual',
    location: 'Various locations based on assignment',
    languages: ['English', 'Kannada', 'Hindi', 'Tamil'],
    minCommitmentMonths: 3,
    nextOrientationDate: '2025-11-18',
    isFeatured: true
  },
  {
    id: '3',
    slug: 'social-media-content-creator-remote',
    title: 'Social Media Content Creator',
    shortDescription: 'Create engaging social media content to amplify TeamKavach impact stories.',
    overview: 'Help TeamKavach reach more volunteers and donors through compelling social media content. We are looking for creative individuals who can craft stories, design graphics, and manage our social media presence across Instagram, LinkedIn, and Facebook.\n\nYour work will directly contribute to growing our volunteer community and increasing awareness about the causes we support.',
    responsibilities: [
      'Create 3-5 social media posts per week (graphics + captions)',
      'Design Instagram stories and reels showcasing volunteer activities',
      'Write engaging copy that highlights impact stories',
      'Schedule and publish content using our social media tools',
      'Track engagement metrics and suggest improvements',
      'Collaborate with the communications team on campaigns'
    ],
    whoThisIsFor: 'Creative professionals or students with skills in graphic design, copywriting, or social media management. Proficiency in Canva, Adobe Creative Suite, or similar tools preferred. Understanding of NGO sector is a plus.',
    causes: ['Tech/Design'],
    city: 'Remote',
    type: 'Remote',
    timeCommitment: 'Weekday evenings',
    hoursPerWeek: '5-8 hours',
    duration: '4 months minimum',
    availabilitySlots: ['Evening'],
    urgency: 'High',
    teamSize: 'Team (3-4 volunteers)',
    location: 'Remote - work from anywhere',
    languages: ['English'],
    minCommitmentMonths: 4,
    nextOrientationDate: '2025-11-25',
    isFeatured: true,
    isNew: true
  },
  {
    id: '4',
    slug: 'healthcare-awareness-campaigns-chennai',
    title: 'Healthcare Awareness Volunteer',
    shortDescription: 'Conduct health camps and awareness sessions in underserved communities.',
    overview: 'Join our healthcare outreach team to bring critical health information and services to communities that lack access. You will help organize health camps, conduct awareness sessions on hygiene, nutrition, and disease prevention, and connect people with healthcare resources.',
    responsibilities: [
      'Assist in organizing monthly health camps',
      'Conduct awareness sessions on basic health topics',
      'Help with registration and crowd management during camps',
      'Distribute health education materials',
      'Follow up with beneficiaries for referrals'
    ],
    whoThisIsFor: 'Healthcare professionals, medical/nursing students, or anyone passionate about public health. Training will be provided for non-medical volunteers.',
    causes: ['Health', 'Community'],
    city: 'Chennai',
    type: 'On-site',
    timeCommitment: 'One-time event',
    hoursPerWeek: '6-8 hours',
    duration: 'Per event basis',
    availabilitySlots: ['Morning', 'Afternoon'],
    urgency: 'Medium',
    teamSize: 'Group (10-15 volunteers per camp)',
    location: 'Various locations in Chennai suburbs',
    languages: ['Tamil', 'English'],
    partnerName: 'Community Health Initiative',
    nextOrientationDate: '2025-11-20',
    isFeatured: false
  },
  {
    id: '5',
    slug: 'environmental-conservation-bangalore',
    title: 'Environmental Conservation Volunteer',
    shortDescription: 'Participate in tree plantation drives and lake cleanup activities.',
    overview: 'Be part of our environmental conservation efforts to restore Bangalore green cover and water bodies. Join weekend activities including tree plantation, lake cleanup, waste segregation awareness, and urban gardening projects.',
    responsibilities: [
      'Participate in tree plantation drives',
      'Help organize and execute lake cleanup campaigns',
      'Conduct waste segregation awareness in neighborhoods',
      'Maintain community gardens',
      'Document activities through photos and reports'
    ],
    whoThisIsFor: 'Nature enthusiasts, students, working professionals - anyone who cares about the environment. No prior experience needed, just enthusiasm and commitment.',
    causes: ['Environment'],
    city: 'Bangalore',
    type: 'On-site',
    timeCommitment: 'Weekends',
    hoursPerWeek: '4-5 hours',
    duration: 'Flexible',
    availabilitySlots: ['Morning'],
    urgency: 'Low',
    teamSize: 'Group (20+ volunteers)',
    location: 'Various parks and lakes across Bangalore',
    languages: ['English', 'Kannada'],
    nextOrientationDate: '2025-11-23',
    isFeatured: false,
    isNew: true
  },
  {
    id: '6',
    slug: 'womens-empowerment-skills-trainer',
    title: 'Womens Empowerment - Skills Trainer',
    shortDescription: 'Teach vocational skills to women from marginalized communities.',
    overview: 'Empower women by teaching them marketable skills such as tailoring, handicrafts, computer basics, or spoken English. Your training will help them gain financial independence and confidence.',
    responsibilities: [
      'Conduct weekly skill training sessions',
      'Prepare simple lesson plans and materials',
      'Track learner progress and provide certificates',
      'Mentor women on job opportunities',
      'Connect them with potential employers or markets'
    ],
    whoThisIsFor: 'Anyone with skills in tailoring, crafts, computers, English, or any vocational area. Teaching experience is a plus. Women volunteers especially encouraged.',
    causes: ['Women', 'Community'],
    city: 'Bangalore',
    type: 'On-site',
    timeCommitment: 'Weekly',
    hoursPerWeek: '3-4 hours',
    duration: '6 months minimum',
    availabilitySlots: ['Afternoon', 'Evening'],
    urgency: 'Medium',
    teamSize: 'Individual or pairs',
    location: 'Community centers in Bommanahalli and Jayanagar',
    languages: ['Kannada', 'Hindi', 'English'],
    minCommitmentMonths: 6,
    nextOrientationDate: '2025-11-21',
    isFeatured: true
  }
];

export const getFeaturedOpportunities = (): Opportunity[] => {
  return opportunities.filter(opp => opp.isFeatured);
};

export const getOpportunityBySlug = (slug: string): Opportunity | undefined => {
  return opportunities.find(opp => opp.slug === slug);
};

export const filterOpportunities = (filters: {
  search?: string;
  cities?: string[];
  causes?: string[];
  types?: string[];
  timeCommitments?: string[];
  availabilitySlots?: string[];
}): Opportunity[] => {
  return opportunities.filter(opp => {
    if (filters.search && !opp.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !opp.shortDescription.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.cities && filters.cities.length > 0 && !filters.cities.includes(opp.city)) {
      return false;
    }
    if (filters.causes && filters.causes.length > 0 && 
        !opp.causes.some(cause => filters.causes!.includes(cause))) {
      return false;
    }
    if (filters.types && filters.types.length > 0 && !filters.types.includes(opp.type)) {
      return false;
    }
    if (filters.timeCommitments && filters.timeCommitments.length > 0 && 
        !filters.timeCommitments.includes(opp.timeCommitment)) {
      return false;
    }
    if (filters.availabilitySlots && filters.availabilitySlots.length > 0 && 
        !opp.availabilitySlots.some(slot => filters.availabilitySlots!.includes(slot))) {
      return false;
    }
    return true;
  });
};

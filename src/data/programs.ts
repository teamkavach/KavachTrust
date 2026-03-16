export interface Program {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  stories: {
    title: string;
    excerpt: string;
    image: string;
  }[];
}

export const programs: Program[] = [
  {
    id: '1',
    title: 'Education for All',
    slug: 'education',
    tagline: 'Empowering children through quality education',
    description: 'We provide educational support, mentorship, and resources to underprivileged children across India. From tutoring to scholarship programs, we ensure every child has access to learning opportunities.',
    icon: '📚',
    color: 'from-blue-500 to-blue-700',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    stats: [
      { label: 'Children Supported', value: '2,500+' },
      { label: 'Learning Centers', value: '15' },
      { label: 'Volunteers', value: '300+' }
    ],
    highlights: [
      'After-school tutoring programs',
      'Scholarship assistance',
      'Digital literacy workshops',
      'Career counseling',
      'Library access programs'
    ],
    stories: [
      {
        title: 'From Streets to Engineering College',
        excerpt: 'How Rajesh overcame poverty to achieve his dreams with TeamKavach support',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600'
      }
    ]
  },
  {
    id: '2',
    title: 'Healthcare Outreach',
    slug: 'healthcare',
    tagline: 'Bringing quality healthcare to underserved communities',
    description: 'Regular health camps, free medical checkups, medicine distribution, and awareness programs to ensure basic healthcare reaches everyone who needs it.',
    icon: '🏥',
    color: 'from-red-900 to-red-700',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    stats: [
      { label: 'Patients Treated', value: '10,000+' },
      { label: 'Health Camps', value: '150+' },
      { label: 'Medical Professionals', value: '50+' }
    ],
    highlights: [
      'Free health checkup camps',
      'Medicine distribution',
      'Dental care programs',
      'Eye care initiatives',
      'Mental health awareness'
    ],
    stories: [
      {
        title: 'A Second Chance at Life',
        excerpt: 'How our health camp saved Grandmother Lakshmi\'s eyesight',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600'
      }
    ]
  },
  {
    id: '3',
    title: 'Elderly Care',
    slug: 'elderly-care',
    tagline: 'Dignity and companionship for senior citizens',
    description: 'Regular visits, companionship programs, healthcare support, and recreational activities for elderly citizens in old age homes and communities.',
    icon: '❤️',
    color: 'from-purple-500 to-purple-700',
    image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800',
    stats: [
      { label: 'Seniors Supported', value: '1,200+' },
      { label: 'Regular Visits', value: '500+' },
      { label: 'Old Age Homes', value: '8' }
    ],
    highlights: [
      'Weekly companionship visits',
      'Birthday celebrations',
      'Healthcare assistance',
      'Festive celebrations',
      'Skill-sharing sessions'
    ],
    stories: [
      {
        title: 'Finding Family Again',
        excerpt: 'How Mr. Sharma found joy and companionship through our program',
        image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600'
      }
    ]
  },
  {
    id: '4',
    title: 'Women Empowerment',
    slug: 'women-empowerment',
    tagline: 'Skills, confidence, and independence for women',
    description: 'Vocational training, entrepreneurship support, and skill development programs to help women achieve financial independence and self-confidence.',
    icon: '💪',
    color: 'from-green-500 to-emerald-700',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800',
    stats: [
      { label: 'Women Trained', value: '800+' },
      { label: 'Businesses Started', value: '150+' },
      { label: 'Training Programs', value: '50+' }
    ],
    highlights: [
      'Vocational skill training',
      'Entrepreneurship workshops',
      'Financial literacy programs',
      'Self-defense classes',
      'Leadership development'
    ],
    stories: [
      {
        title: 'From Homemaker to Entrepreneur',
        excerpt: 'Meena\'s journey of starting her own tailoring business',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600'
      }
    ]
  },
  {
    id: '5',
    title: 'Community Development',
    slug: 'community',
    tagline: 'Building stronger, self-reliant communities',
    description: 'From cleanliness drives to skill development workshops, we work with communities to create sustainable change from within.',
    icon: '🤝',
    color: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    stats: [
      { label: 'Communities Served', value: '25+' },
      { label: 'Volunteers', value: '1,000+' },
      { label: 'Events Organized', value: '200+' }
    ],
    highlights: [
      'Cleanliness drives',
      'Tree plantation',
      'Community festivals',
      'Sports events',
      'Cultural programs'
    ],
    stories: [
      {
        title: 'Transforming Neighborhoods',
        excerpt: 'How one community came together to create lasting change',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600'
      }
    ]
  }
];

export const getProgramBySlug = (slug: string) => {
  return programs.find(p => p.slug === slug);
};

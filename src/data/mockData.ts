import type { City, Testimonial, TeamMember, Partner, ImpactStat, Milestone, FAQItem } from '@/types';

export const cities: City[] = [
  {
    id: '1',
    name: 'Bangalore',
    slug: 'bangalore',
    description: 'Our largest volunteer hub with programs spanning education, elderly care, environment, and women empowerment.',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800',
    activeVolunteers: 450,
    opportunitiesCount: 12,
    keyPartners: ['Akshara Foundation', 'Bangalore Cares', 'Green Bangalore'],
    highlights: [
      '200+ children impacted through education programs',
      '8 community centers active',
      '50+ elderly beneficiaries receiving regular support'
    ]
  },
  {
    id: '2',
    name: 'Chennai',
    slug: 'chennai',
    description: 'Growing presence focused on healthcare access and community wellness programs.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
    activeVolunteers: 180,
    opportunitiesCount: 6,
    keyPartners: ['Community Health Initiative', 'Chennai Youth Foundation'],
    highlights: [
      '2,000+ people reached through health camps',
      '12 health camps conducted',
      'Strong medical volunteer network'
    ]
  },
  {
    id: '3',
    name: 'Hyderabad',
    slug: 'hyderabad',
    description: 'New city launch with focus on youth mentorship and skill development programs.',
    image: 'https://images.unsplash.com/photo-1591260955159-5c9e6d6b2e3e?w=800',
    activeVolunteers: 95,
    opportunitiesCount: 4,
    keyPartners: ['Hyderabad Youth Network'],
    highlights: [
      'Just launched in 2025',
      'Focus on youth & skills',
      'Rapidly growing volunteer base'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Menon',
    role: 'Teaching Volunteer',
    city: 'Bangalore',
    quote: 'Volunteering with TeamKavach has been the most rewarding experience of my life. The children I teach have taught me more than I could ever teach them.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Healthcare Volunteer',
    city: 'Chennai',
    quote: 'Being able to use my medical skills to serve communities in need fills me with purpose. TeamKavach makes it easy and impactful.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    id: '3',
    name: 'Sneha Reddy',
    role: 'Content Creator',
    city: 'Remote',
    quote: 'I love that I can contribute remotely through my design skills. TeamKavach proves that distance is no barrier to making a difference.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    role: 'Founder & Director',
    city: 'Bangalore',
    bio: 'Social entrepreneur with 8+ years in NGO sector. Started TeamKavach to mobilize youth for social change.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    linkedin: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Deepa Iyer',
    role: 'Programs Head',
    city: 'Bangalore',
    bio: 'Education specialist focused on designing volunteer-led programs for maximum community impact.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
  },
  {
    id: '3',
    name: 'Vikram Singh',
    role: 'Volunteer Coordinator',
    city: 'Chennai',
    bio: 'Passionate about building communities and ensuring volunteers have meaningful, well-supported experiences.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  },
  {
    id: '4',
    name: 'Kavya Nair',
    role: 'Communications Lead',
    city: 'Remote',
    bio: 'Storyteller and marketer dedicated to amplifying the voices of volunteers and beneficiaries.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400'
  }
];

export const partners: Partner[] = [
  {
    id: '1',
    name: 'Akshara Foundation',
    logo: 'https://via.placeholder.com/150x60/0D7A7A/FFFFFF?text=Akshara',
    website: 'https://akshara.org',
    description: 'Education for all children'
  },
  {
    id: '2',
    name: 'Community Health Initiative',
    logo: 'https://via.placeholder.com/150x60/0D7A7A/FFFFFF?text=CHI',
    description: 'Healthcare access programs'
  },
  {
    id: '3',
    name: 'Green Bangalore',
    logo: 'https://via.placeholder.com/150x60/0D7A7A/FFFFFF?text=Green+BLR',
    description: 'Environmental conservation'
  },
  {
    id: '4',
    name: 'Youth Network India',
    logo: 'https://via.placeholder.com/150x60/0D7A7A/FFFFFF?text=Youth+Network',
    description: 'Youth development programs'
  }
];

export const impactStats: ImpactStat[] = [
  {
    id: '1',
    label: 'People Impacted',
    value: 5000,
    icon: 'Users'
  },
  {
    id: '2',
    label: 'Active Volunteers',
    value: 725,
    icon: 'Heart'
  },
  {
    id: '3',
    label: 'Volunteer Hours',
    value: 15000,
    unit: 'hours',
    icon: 'Clock'
  },
  {
    id: '4',
    label: 'Cities',
    value: 3,
    icon: 'MapPin'
  },
  {
    id: '5',
    label: 'Partner NGOs',
    value: 12,
    icon: 'Building'
  },
  {
    id: '6',
    label: 'Programs Running',
    value: 8,
    icon: 'Target'
  }
];

export const milestones: Milestone[] = [
  {
    id: '1',
    year: '2023',
    title: 'TeamKavach Founded',
    description: 'Started with 20 volunteers in Bangalore, focusing on education for underprivileged children.'
  },
  {
    id: '2',
    year: '2024',
    title: 'Expanded to Chennai',
    description: 'Launched healthcare awareness programs and crossed 300 volunteers across 2 cities.'
  },
  {
    id: '3',
    year: '2024',
    title: 'Remote Volunteering Introduced',
    description: 'Enabled professionals across India to contribute through digital skills and remote work.'
  },
  {
    id: '4',
    year: '2025',
    title: 'Reached 5,000 Beneficiaries',
    description: 'Major milestone - impacted 5,000+ lives through education, health, and community programs.'
  },
  {
    id: '5',
    year: '2025',
    title: 'Launched in Hyderabad',
    description: 'Third city expansion with focus on youth mentorship and skill development.'
  }
];

export const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'Who can volunteer with TeamKavach?',
    answer: 'Anyone aged 18 and above with a genuine desire to make a positive impact can volunteer. We welcome students, working professionals, homemakers, and retirees. No prior experience is necessary for most roles, though some specialized positions may require specific skills.',
    category: 'General'
  },
  {
    id: '2',
    question: 'Is there a minimum time commitment?',
    answer: 'Time commitment varies by opportunity. Some roles like one-time events require just a few hours, while ongoing programs typically ask for 3-6 months minimum commitment of 3-6 hours per week. We believe consistent engagement creates the most meaningful impact.',
    category: 'Volunteering'
  },
  {
    id: '3',
    question: 'Can I volunteer remotely?',
    answer: 'Yes! We offer various remote volunteering opportunities including content creation, social media management, graphic design, website development, research, and online tutoring. Remote volunteers can contribute from anywhere in India.',
    category: 'Volunteering'
  },
  {
    id: '4',
    question: 'Do I need prior volunteering experience?',
    answer: 'No prior experience is required. We provide comprehensive orientation and training for all volunteers. You will be supported by experienced coordinators and fellow volunteers throughout your journey.',
    category: 'Volunteering'
  },
  {
    id: '5',
    question: 'Is there an age limit for volunteering?',
    answer: 'Volunteers must be at least 18 years old. There is no upper age limit - we welcome volunteers of all ages who are passionate and committed to social change.',
    category: 'General'
  },
  {
    id: '6',
    question: 'How are volunteers supported?',
    answer: 'All volunteers receive orientation training, ongoing support from program coordinators, regular team meetings, access to resources and materials, and a community of fellow volunteers. We also provide certificates of appreciation and impact reports.',
    category: 'Volunteering'
  },
  {
    id: '7',
    question: 'Are donations tax-deductible?',
    answer: 'Yes, TeamKavach is a registered non-profit organization. Donations are eligible for tax deduction under Section 80G of the Income Tax Act. You will receive a donation receipt for your tax filings.',
    category: 'Donation'
  },
  {
    id: '8',
    question: 'How is donation money used?',
    answer: 'Donations support program operations, beneficiary materials (books, health supplies, etc.), volunteer training, and organizational infrastructure. We maintain complete transparency with regular financial reports shared with donors.',
    category: 'Donation'
  },
  {
    id: '9',
    question: 'Is it safe to volunteer?',
    answer: 'Yes, volunteer safety is our top priority. All programs are conducted in verified, safe locations. For on-site volunteering, we provide clear guidelines, buddy systems, and emergency contacts. Background verification is conducted for roles involving vulnerable populations.',
    category: 'Safety'
  },
  {
    id: '10',
    question: 'How do I apply for a volunteering opportunity?',
    answer: 'Browse opportunities on our website, click on the role that interests you, and fill out the application form. Our team will review your application and contact you within 5-7 days with next steps including orientation details.',
    category: 'Volunteering'
  }
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getFAQsByCategory = (category: FAQItem['category']): FAQItem[] => {
  return faqs.filter(faq => faq.category === category);
};

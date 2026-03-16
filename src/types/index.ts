// Core Types for TeamKavach Platform

export type CauseType = 
  | 'Children' 
  | 'Youth' 
  | 'Women' 
  | 'Health' 
  | 'Environment' 
  | 'Community' 
  | 'Tech/Design'
  | 'Elderly';

export type OpportunityType = 'On-site' | 'Remote' | 'Hybrid';

export type TimeCommitment = 
  | 'One-time event' 
  | 'Weekly' 
  | 'Weekends' 
  | 'Weekday evenings'
  | 'Flexible';

export type AvailabilitySlot = 'Morning' | 'Afternoon' | 'Evening';

export type DayOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export type UrgencyLevel = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  responsibilities: string[];
  whoThisIsFor: string;
  causes: CauseType[];
  city: string;
  type: OpportunityType;
  timeCommitment: TimeCommitment;
  hoursPerWeek: string;
  duration: string;
  availabilitySlots: AvailabilitySlot[];
  urgency: UrgencyLevel;
  teamSize: string;
  location: string;
  languages: string[];
  minCommitmentMonths?: number;
  partnerId?: string;
  partnerName?: string;
  partnerDescription?: string;
  nextOrientationDate?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  category: 'Volunteer' | 'Impact' | 'Partner';
  author: string;
  authorRole?: string;
  city: string;
  quote: string;
  summary: string;
  content: string;
  image: string;
  readTime: string;
  publishedDate: string;
  tags: string[];
}

export interface City {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  activeVolunteers: number;
  opportunitiesCount: number;
  keyPartners: string[];
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  city: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  unit?: string;
  icon: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface VolunteerApplication {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  city: string;
  ageRange: string;
  occupation: string;
  preferredArea: string;
  skills: string[];
  preferredCauses: CauseType[];
  availableDays: DayOfWeek[];
  availableSlots: AvailabilitySlot[];
  startDate: string;
  languages: string[];
  hasExperience: boolean;
  experienceDetails?: string;
  motivation: string;
  referralSource: string;
  agreeToTerms: boolean;
  agreeToUpdates: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Volunteering' | 'Donation' | 'Safety';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  topic: 'Volunteering' | 'Donation' | 'Partnership' | 'Media' | 'Other';
  message: string;
}

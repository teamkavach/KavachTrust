import type { Story } from '@/types';

export const stories: Story[] = [
  {
    id: '1',
    slug: 'from-volunteer-to-mentor-riya-journey',
    title: 'From Volunteer to Mentor: Riya\'s Journey',
    category: 'Volunteer',
    author: 'Riya Sharma',
    authorRole: 'Education Volunteer',
    city: 'Bangalore',
    quote: 'The smiles on those children\'s faces remind me why I started volunteering in the first place.',
    summary: 'Riya started as a weekend teaching volunteer and is now mentoring new volunteers while pursuing her dream of becoming an educator.',
    content: `When Riya Sharma first walked into the community center in Whitefield, she was a nervous 23-year-old software engineer looking for something meaningful beyond her 9-to-5 job. Two years later, she's not just teaching children but mentoring new volunteers and has discovered her true calling in education.

"I initially signed up thinking I'd help kids with their homework for a few hours on weekends," Riya recalls. "But it became so much more than that. These children taught me patience, resilience, and the true meaning of gratitude."

Riya works with 12 children aged 10-13, helping them with English and Mathematics. What started as academic support evolved into life mentorship. "Many of these kids come from difficult backgrounds. Sometimes they just need someone to listen, to believe in them."

Her impact extends beyond the classroom. Riya organized a career awareness day, bringing IT professionals to talk to the children about future possibilities. She also started a weekend library program, collecting donated books and creating a small lending library.

"TeamKavach gave me the structure and support to make a real difference. The orientation, the continuous training, and the community of volunteers – it all matters," she says.

Today, Riya is pursuing a part-time education degree, inspired by her volunteering experience. She continues to teach on weekends and now helps onboard new volunteers, sharing her learnings and encouraging them to stay committed.

"If you're thinking about volunteering, just do it. You'll receive far more than you give. These children changed my life."`,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
    readTime: '4 min read',
    publishedDate: '2025-10-15',
    tags: ['Education', 'Mentorship', 'Bangalore', 'Career Change']
  },
  {
    id: '2',
    slug: 'bringing-healthcare-to-doorsteps',
    title: 'Bringing Healthcare to Doorsteps',
    category: 'Impact',
    author: 'TeamKavach Impact Team',
    city: 'Chennai',
    quote: 'Over 2,000 people received free health checkups and critical information about preventive care.',
    summary: 'How our healthcare awareness campaign in Chennai reached underserved communities and saved lives.',
    content: `In the outskirts of Chennai, access to basic healthcare remains a luxury for many families. That's why TeamKavach launched a series of mobile health camps in partnership with Community Health Initiative, bringing medical services directly to people's doorsteps.

Over the past six months, our volunteer-led healthcare awareness campaign has conducted 12 health camps across Chennai suburbs, serving over 2,000 beneficiaries. Each camp offers free health screenings, consultations with doctors, distribution of essential medicines, and most importantly – education about preventive healthcare.

"Many people here have never had their blood pressure checked or blood sugar tested," explains Dr. Priya Menon, who volunteers at these camps. "We're not just treating illness; we're preventing it through awareness."

The campaign mobilizes 15-20 volunteers per camp – a mix of medical professionals, students, and community volunteers. While doctors and nurses provide medical services, other volunteers manage registration, crowd control, health education sessions, and follow-up coordination.

The impact has been significant. Early detection helped identify 47 cases of undiagnosed diabetes and 32 cases of hypertension. All beneficiaries received referrals to nearby government hospitals for continued treatment, and volunteers conduct phone follow-ups to ensure they seek care.

Beyond medical services, the camps have become community gatherings where people learn about nutrition, hygiene, and child health. Volunteers distribute information pamphlets in Tamil, conduct interactive sessions on hand washing and waste management, and connect families with government welfare schemes.

"Healthcare is a right, not a privilege," says camp coordinator Arun Kumar. "Through TeamKavach, we're making that right accessible to those who need it most."

The program continues to expand, with plans to reach 10 more locations this year.`,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    readTime: '5 min read',
    publishedDate: '2025-09-28',
    tags: ['Healthcare', 'Chennai', 'Community Service', 'Impact']
  },
  {
    id: '3',
    slug: 'tech-for-good-remote-volunteers',
    title: 'Tech for Good: How Remote Volunteers Amplify Our Reach',
    category: 'Volunteer',
    author: 'Ankit Verma',
    authorRole: 'Digital Marketing Volunteer',
    city: 'Remote',
    quote: 'Working remotely doesn\'t mean you can\'t make a real impact. I\'m proof of that.',
    summary: 'Ankit shares how he contributes to TeamKavach mission from his home, creating content that inspires thousands.',
    content: `Ankit Verma lives in Pune and works as a content designer for a tech company. Despite being hundreds of kilometers away from TeamKavach's ground operations, he plays a crucial role in the organization's growth and impact.

"I wanted to volunteer but couldn't commit to on-site roles due to my work schedule," Ankit explains. "That's when I discovered TeamKavach's remote volunteering opportunities in digital marketing and content creation."

For the past eight months, Ankit has been creating social media content that tells TeamKavach's story to the world. He designs Instagram graphics, writes LinkedIn posts, creates impact reports, and manages email campaigns – all from his home office.

"Every week, I interview volunteers and beneficiaries over video calls, capturing their stories. Then I transform those conversations into compelling visual content," he says. His posts have reached over 100,000 people and contributed to a 40% increase in volunteer sign-ups.

But the impact goes beyond numbers. "When I see someone commenting that they were inspired to volunteer after reading a story I wrote, that's when I feel the real impact of my work."

Ankit works with a team of three other remote volunteers – a graphic designer from Delhi, a videographer from Hyderabad, and a copywriter from Mumbai. They collaborate using online tools, meeting weekly on video calls to plan campaigns and share ideas.

"Remote volunteering is perfect for working professionals who want to contribute their skills but can't commit to fixed on-site hours. You get flexibility while making a real difference."

His advice for aspiring remote volunteers? "Don't underestimate the impact of digital work. Behind every volunteer who shows up on-ground, there are digital storytellers inspiring them to take that step. We're all part of the same mission."`,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800',
    readTime: '3 min read',
    publishedDate: '2025-10-22',
    tags: ['Remote Work', 'Digital Marketing', 'Tech', 'Innovation']
  }
];

export const getStoryBySlug = (slug: string): Story | undefined => {
  return stories.find(story => story.slug === slug);
};

export const getStoriesByCategory = (category: Story['category']): Story[] => {
  return stories.filter(story => story.category === category);
};

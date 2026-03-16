# TeamKavach - Volunteer Platform

A modern, full-featured volunteering platform for TeamKavach NGO built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

TeamKavach is a volunteer-led community platform that connects passionate volunteers with meaningful opportunities across India. This platform enables users to:

- Browse volunteering opportunities across multiple cities and causes
- Apply for positions through integrated application forms
- Read impact stories from volunteers and beneficiaries
- Learn about TeamKavach's mission, team, and partners
- Explore city-wise programs and initiatives

## 🚀 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router v6** - Client-side routing
- **Lucide React** - Icon library

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer, AppLayout)
│   ├── Button.tsx      # Button variants (Primary, Secondary, Ghost, Accent)
│   ├── Card.tsx        # Card components (Card, StatCard, TestimonialCard)
│   ├── Badge.tsx       # Badge and Tag components
│   └── PageHeader.tsx  # Page header component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── VolunteerOpportunities.tsx  # Opportunities listing with filters
│   ├── OpportunityDetail.tsx       # Single opportunity view + application
│   ├── About.tsx       # About TeamKavach
│   ├── Impact.tsx      # Impact metrics and stories
│   ├── Cities.tsx      # City-wise opportunities
│   ├── Stories.tsx     # Volunteer stories listing
│   ├── StoryDetail.tsx # Single story view
│   ├── Donate.tsx      # Donation page (stub)
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Contact.tsx     # Contact form
│   └── Login.tsx       # Login page (stub)
├── data/               # Mock data
│   ├── opportunities.ts    # Volunteering opportunities
│   ├── stories.ts          # Volunteer and impact stories
│   └── mockData.ts         # Cities, team, partners, FAQs, etc.
├── types/              # TypeScript type definitions
│   └── index.ts
├── router/             # React Router configuration
│   └── index.tsx
├── index.css           # Global styles and Tailwind imports
└── main.tsx            # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: #0D7A7A (Deep Teal)
- **Accent**: #F4A41D (Warm Orange)
- **Secondary**: #233B5D (Indigo)
- **Background**: #F5F7FA (Soft Grey)

### Typography
- **Font Family**: Inter (imported from Google Fonts)
- **Hierarchy**: Bold headings, regular body text with high contrast

### Components

#### Buttons
- `PrimaryButton` - Main actions (teal background)
- `SecondaryButton` - Secondary actions (outlined)
- `GhostButton` - Tertiary actions (text only)
- `AccentButton` - Special CTAs (orange background)

#### Cards
- `Card` - Basic content container with optional hover effect
- `StatCard` - Display statistics with icons and animated counters
- `TestimonialCard` - Volunteer testimonials with image

#### Badges & Tags
- `Badge` - Status indicators, categories (small, inline)
- `Tag` - Interactive filters, removable chips

## 🎬 Animations (Framer Motion)

All animations follow these principles:

- **Hero sections**: Fade-up with slight parallax on scroll
- **Cards**: Staggered fade-up on first appearance, lift on hover
- **Tabs/filters**: Smooth opacity and slide transitions
- **Modals**: Scale-in with fade backdrop
- **Route changes**: Simple fade between pages

## 📄 Pages Overview

### Home (/)
- Hero with floating stats card
- Impact metrics strip
- How TeamKavach Works (4-step timeline)
- Featured opportunities carousel
- Volunteer stories preview
- Partners section
- CTA section

### Volunteer Opportunities (/volunteer-opportunities)
- Advanced filtering (city, cause, type, time, availability)
- Search functionality
- Responsive filter panel
- Skeleton loaders
- Layout animations

### Opportunity Detail (/opportunity/:slug)
- Comprehensive opportunity information
- Key info sidebar
- Responsibilities, requirements, commitment details
- Location with map placeholder
- Partner information
- Apply button with modal (placeholder)

### About (/about)
- Mission & Vision
- Problem statement
- Our Approach
- Team profiles with images
- Partner logos

### Impact (/impact)
- Animated stat counters
- Impact stories grid
- Timeline of milestones

### Cities (/cities)
- City cards with statistics
- Navigate to filtered opportunities

### Stories (/stories & /stories/:slug)
- Story listing with categories
- Full story view with formatted content
- Tags and metadata

### FAQ (/faq)
- Accordion-style questions
- Categorized FAQs
- Smooth animations

### Contact (/contact)
- Contact form
- Contact information cards
- Social links

## 🔌 Backend Integration (TODO)

The current application uses mock data. To integrate with a backend:

1. **Replace mock data imports** in pages with API calls
2. **API endpoints to create**:
   - `GET /api/opportunities` - List opportunities with filters
   - `GET /api/opportunities/:slug` - Single opportunity
   - `POST /api/applications` - Submit volunteer application
   - `GET /api/stories` - List stories
   - `GET /api/cities` - Cities data
   - `GET /api/impact-stats` - Impact statistics
   - `POST /api/contact` - Contact form submission

3. **Add state management** (React Query, SWR, or Redux) for:
   - Caching API responses
   - Loading states
   - Error handling
   - Optimistic updates

4. **Authentication** for:
   - Volunteer dashboard
   - Application tracking
   - Admin panel

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive components
- Keyboard navigation support
- High color contrast (WCAG AA compliant)
- Minimum touch target sizes (44x44px)
- Alt text for images
- Focus indicators

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components and pages are fully responsive.

## 🚧 Future Enhancements

### High Priority
1. **Complete Application Form** - Multi-step form with validation
2. **User Authentication** - Login, signup, volunteer dashboard
3. **Backend Integration** - API connections for all data
4. **Payment Integration** - Razorpay/Stripe for donations
5. **Search Optimization** - Better search with autocomplete

### Medium Priority
6. **Admin Dashboard** - Manage opportunities, volunteers, applications
7. **Email Notifications** - Application confirmations, reminders
8. **Volunteer Profiles** - Track hours, impact, badges
9. **Blog/News Section** - Latest updates and announcements
10. **Events Calendar** - Upcoming orientation sessions and events

### Nice to Have
11. **Social Sharing** - Share opportunities and stories
12. **Multilingual Support** - Hindi, Kannada, Tamil translations
13. **PWA Features** - Offline support, push notifications
14. **Analytics Dashboard** - Volunteer and impact metrics
15. **Mobile App** - React Native version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary to TeamKavach. All rights reserved.

## 📧 Contact

TeamKavach
- Email: hello@teamkavach.org
- Phone: +91 80 1234 5678
- Website: Coming soon

---

**Built with ❤️ by volunteers for the community**

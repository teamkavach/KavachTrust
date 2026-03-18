import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import IconMail from '@tabler/icons-react/dist/esm/icons/IconMail';
import IconPhone from '@tabler/icons-react/dist/esm/icons/IconPhone';
import IconMapPin from '@tabler/icons-react/dist/esm/icons/IconMapPin';
import IconSparkles from '@tabler/icons-react/dist/esm/icons/IconSparkles';
import IconSend from '@tabler/icons-react/dist/esm/icons/IconSend';
import IconCircleCheck from '@tabler/icons-react/dist/esm/icons/IconCircleCheck';
import IconAlertCircle from '@tabler/icons-react/dist/esm/icons/IconAlertCircle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const Contact: React.FC = () => {
  useEffect(() => { document.title = 'Contact | Team Kavach'; }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    volunteerRole: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'topic' && value !== 'Volunteering' ? { volunteerRole: '' } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '0036691c-8b1f-4322-ab5c-dcf0dd294127',
          subject: `Team Kavach Contact: ${formData.topic || 'General Enquiry'}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', topic: '', volunteerRole: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  const contactInfo = [
    {
      icon: IconMail,
      title: 'Email',
      value: 'kavachtrust@gmail.com',
      href: 'mailto:kavachtrust@gmail.com'
    },
    {
      icon: IconPhone,
      title: 'Phone',
      value: '+91 7892474801',
      href: 'tel:+917892474801'
    },
    {
      icon: IconMapPin,
      title: 'Address',
      value: '921, 3rd Main Rd, D-Block, 2nd Stage, Rajajinagar, Bengaluru, Karnataka 560010',
      href: null
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Matching site theme */}
      <section className="relative py-24 md:py-32 bg-[#DB143C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <IconSparkles className="w-5 h-5" />
              <span className="text-sm font-bold">We'd Love to Hear From You</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Get in <span className="text-white/90">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Have questions or want to get involved? Reach out to us and let's create impact together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you soon.</p>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <IconCircleCheck className="w-9 h-9 text-green-600" />
                      </div>
                      <h3 className="text-xl font-black text-gray-900">Message Sent!</h3>
                      <p className="text-muted-foreground max-w-xs">Thank you for reaching out. We'll get back to you within 1-2 business days.</p>
                      <Button variant="outline" className="mt-2" onClick={() => setStatus('idle')}>Send Another Message</Button>
                    </div>
                  ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Name <span className="text-primary">*</span></label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email <span className="text-primary">*</span></label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" 
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" 
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Topic</label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50">
                        <option value="">Select a topic</option>
                        <option>Volunteering</option>
                        <option>Donation</option>
                        <option>Partnership</option>
                        <option>Media</option>
                        <option>Other</option>
                      </select>
                    </div>
                    {formData.topic === 'Volunteering' && (
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                        <label className="block text-sm font-semibold text-foreground mb-3">
                          How would you like to contribute? <span className="text-primary">*</span>
                        </label>
                        <div className="space-y-3">
                          {[
                            { value: 'Volunteer on Ground', label: 'Volunteer on Ground', desc: 'Join events, distributions, and drives directly' },
                            { value: 'Content Creation', label: 'Content Creation', desc: 'Photography, videography, social media & design' },
                            { value: 'Event Organizer', label: 'Event Organizer', desc: 'Help plan, coordinate, and manage events' },
                          ].map((option) => (
                            <label
                              key={option.value}
                              className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                formData.volunteerRole === option.value
                                  ? 'border-primary bg-white'
                                  : 'border-transparent bg-white/60 hover:border-primary/40'
                              }`}
                            >
                              <input
                                type="radio"
                                name="volunteerRole"
                                value={option.value}
                                checked={formData.volunteerRole === option.value}
                                onChange={handleChange}
                                className="mt-0.5 accent-[#DB143C]"
                                required={formData.topic === 'Volunteering'}
                              />
                              <div>
                                <div className="text-sm font-semibold text-foreground">{option.label}</div>
                                <div className="text-xs text-muted-foreground">{option.desc}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Message <span className="text-primary">*</span></label>
                      <textarea 
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none bg-gray-50/50" 
                        placeholder="How can we help you?"
                      />
                    </div>
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-medium">
                        <IconAlertCircle className="w-4 h-4 flex-shrink-0" />
                        Something went wrong. Please try again or email us directly at kavachtrust@gmail.com
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-[#DB143C] hover:bg-[#b91133] text-white font-bold py-6 rounded-xl disabled:opacity-70">
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</span>
                      ) : (
                        <span className="flex items-center gap-2"><IconSend className="w-5 h-5" />Send Message</span>
                      )}
                    </Button>
                  </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Contact Information</h2>
              <p className="text-muted-foreground mb-8">Get in touch with us through any of these channels.</p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[#DB143C]/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 text-[#DB143C]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                            {item.href ? (
                              <a 
                                href={item.href} 
                                className="text-muted-foreground hover:text-[#DB143C] transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

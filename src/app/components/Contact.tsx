
import { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
    const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !ADMIN_TEMPLATE_ID || !AUTO_REPLY_TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Please configure all EmailJS credentials in .env file');
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: `Subject: ${formData.subject}\n\n${formData.message}`,
    };

    try {
      // Send separate emails for Admin Notification and User Auto-Reply
      await Promise.all([
        // 1. Send to Admin
        emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY),
        // 2. Send Auto-Reply to User
        emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY),
      ]);

      toast.success('Message sent! Check your email for confirmation.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shubhdixit2411@gmail.com',
      link: 'mailto:shubhdixit2411@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Shubh-Dixit',
      link: 'https://github.com/Shubh-Dixit',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'shubh-dixit',
      link: 'https://www.linkedin.com/in/shubh-dixit/',
    },
  ];

  return (
    <section id="contact" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get In <span className="text-gradient drop-shadow-sm">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you're looking for an SDE intern, ML engineer, or full-stack developer, let's talk!
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group flex items-center gap-4 p-4 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  >
                    <div className="p-3 bg-gradient-to-br from-[var(--gradient-start)]/20 to-[var(--gradient-end)]/20 rounded-lg group-hover:from-[var(--gradient-start)]/30 group-hover:to-[var(--gradient-end)]/30 transition-all border border-black/5 dark:border-white/5">
                      <Icon className="w-6 h-6 text-[var(--gradient-start)]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground dark:text-white group-hover:text-[var(--gradient-start)] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Additional info */}
            <div className="p-6 glass-card">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[var(--gradient-start)] mt-1" />
                <div>
                  <p className="font-semibold text-foreground dark:text-white mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">Punjab, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--gradient-start)] mt-1" />
                <div>
                  <p className="font-semibold text-foreground dark:text-white mb-1">Availability</p>
                  <p className="text-sm text-muted-foreground">Open to internships & full-time roles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 glass-card">
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6">Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-lg text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-lg text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-lg text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-lg text-foreground dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--gradient-start)] focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
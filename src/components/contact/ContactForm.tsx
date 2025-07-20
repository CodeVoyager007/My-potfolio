'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactForm.module.scss';

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
};

const inquiryTypes = [
  'General',
  'Collaboration',
  'Feedback',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: inquiryTypes[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', inquiryType: inquiryTypes[0], message: '' });
      } else {
        setStatus('error');
        setError('Failed to send message.');
      }
    } catch (err) {
      setStatus('error');
      setError('Something went wrong.');
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formVariants}
      className={styles['contact-form-container']}
    >
      <h2 className={styles['contact-title']}>Contact Me</h2>
      <p className={styles['contact-subtitle']}>I&apos;d love to hear from you! Fill out the form and I&apos;ll get back to you soon.</p>
      <form onSubmit={handleSubmit} className={styles['contact-form']}>
        <div className={styles['form-row']}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles['input']}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className={styles['input']}
            autoComplete="email"
          />
        </div>
        <div className={styles['form-row']}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={handleChange}
            className={styles['input']}
            autoComplete="tel"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className={styles['input']}
          />
        </div>
        <div className={styles['form-row']}>
          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            className={styles['input']}
            required
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className={styles['form-row']}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className={styles['input']}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          type="submit"
          disabled={status === 'loading'}
          className={styles['submit-btn']}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={styles['success']}
          >
            Message sent! Thank you for reaching out.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={styles['error']}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 
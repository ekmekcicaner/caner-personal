import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiSend } from 'react-icons/fi';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Mail gönderilemedi');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "ekmekcicaner@outlook.com",
      href: "mailto:ekmekcicaner@outlook.com"
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/ekmekcicaner",
      href: "https://github.com/ekmekcicaner"
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ekmekcicaner",
      href: "https://linkedin.com/in/ekmekcicaner"
    },
    {
      icon: <FiTwitter className="w-6 h-6" />,
      label: "Twitter",
      value: "twitter.com/ekmekcicanerr",
      href: "https://twitter.com/ekmekcicanerr"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: "Konum",
      value: "İstanbul, Türkiye",
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-6">
            İletişime Geç
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary leading-relaxed">
            Projeleriniz için benimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-dark-border">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 dark:text-dark-text hover:text-primary dark:hover:text-primary-light transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-dark-text">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-dark-border space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
                Mesaj Gönder
              </h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent resize-none"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isSubmitting
                    ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed focus:ring-gray-400'
                    : submitStatus === 'success'
                    ? 'bg-green-500 dark:bg-green-600 focus:ring-green-500'
                    : submitStatus === 'error'
                    ? 'bg-red-500 dark:bg-red-600 focus:ring-red-500'
                    : 'bg-primary dark:bg-primary-light hover:bg-primary-dark dark:hover:bg-primary focus:ring-primary dark:focus:ring-primary-light'
                }`}
                aria-disabled={isSubmitting}
                aria-live="polite"
              >
                {isSubmitting ? (
                  'Gönderiliyor...'
                ) : submitStatus === 'success' ? (
                  'Mesajınız İletildi!'
                ) : submitStatus === 'error' ? (
                  'Bir Hata Oluştu!'
                ) : (
                  <>
                    <FiSend className="w-5 h-5 mr-2" aria-hidden="true" />
                    Gönder
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Contact; 
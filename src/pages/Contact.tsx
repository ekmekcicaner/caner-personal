import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-dark-text">Lokasyon</h3>
                    <p className="text-gray-600 dark:text-dark-text-secondary">İstanbul, Türkiye</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-dark-text">Email</h3>
                    <a 
                      href="mailto:contact@example.com" 
                      className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light rounded-lg px-2 py-1"
                      aria-label="Email gönder"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-dark-border">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-dark-text mb-4">
                    Sosyal Medya
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      { href: "https://github.com/yourusername", icon: <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />, label: "GitHub profilim" },
                      { href: "https://linkedin.com/in/yourusername", icon: <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />, label: "LinkedIn profilim" }
                    ].map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light rounded-lg p-2"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-dark-border"
              aria-label="İletişim formu"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-text mb-6">
                Mesaj Gönder
              </h2>

              <div className="space-y-6">
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
                    Email
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
                      : 'bg-primary dark:bg-primary-light hover:bg-primary-dark dark:hover:bg-primary focus:ring-primary dark:focus:ring-primary-light'
                  }`}
                  aria-disabled={isSubmitting}
                  aria-live="polite"
                >
                  {isSubmitting ? (
                    'Gönderiliyor...'
                  ) : submitStatus === 'success' ? (
                    'Mesajınız İletildi!'
                  ) : (
                    <>
                      <FiSend className="w-5 h-5 mr-2" aria-hidden="true" />
                      Gönder
                    </>
                  )}
                </button>
              </div>
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
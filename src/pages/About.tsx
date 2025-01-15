import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiGlobe } from 'react-icons/fi';
import Footer from '../components/Footer';

const experiences = [
  {
    title: 'Software Developer - Specialist Level',
    company: 'Mypayz (Fintech company)',
    period: '2024 - Present',
    description: 'WinForms uygulamaları ve Blazor web panelleri geliştirme, REST API servisleri tasarlama ve geliştirme, şirket içi component library oluşturma.',
    technologies: ['ASP.NET Core', 'Blazor', 'WinForms', 'SQL Server', 'Redis']
  },
  {
    title: 'Associate Software Developer - Junior Specialist Level',
    company: 'Mypayz (Fintech company)',
    period: '2023 - 2024',
    description: 'Windows/Worker servisleri geliştirme, banka sanal POS API entegrasyonları, merchant panel geliştirme ve veritabanı tasarımı.',
    technologies: ['ASP.NET Core', 'Windows Services', 'SQL Server', 'Redis', 'RabbitMQ']
  },
  {
    title: 'Software Developer - Intern Level',
    company: 'Mypayz (Fintech company)',
    period: '2022 - 2023',
    description: 'WinForms uygulamaları geliştirme, API dokümantasyonu yazma ve HTML email şablonları oluşturma.',
    technologies: ['WinForms', '.NET Core', 'SQL Server', 'HTML/CSS']
  }
];

const certifications = [
  {
    title: 'ISO/IEC 27001:2022 Information Security Management System Foundation and Internal Auditor Training',
    issuer: 'CTR Certification',
    date: '2024',
    description: 'Bilgi güvenliği yönetim sistemi ve iç denetçi eğitimi sertifikası'
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center max-w-3xl mx-auto mb-12 sm:mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light text-sm font-medium mb-4">
            Hakkımda
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-6">
            Merhaba, Ben Caner
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary leading-relaxed">
            Fintech sektöründe .NET teknolojileri ile yazılım geliştiriyorum. Özellikle ödeme sistemleri, POS entegrasyonları ve güvenlik odaklı 
            çözümler üzerinde çalışıyorum. WinForms, Blazor ve ASP.NET Core teknolojilerini kullanarak, modern ve sürdürülebilir uygulamalar geliştirmeye odaklanıyorum.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 dark:bg-secondary-light/10 text-secondary dark:text-secondary-light text-sm font-medium mb-4">
              Deneyim
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4 flex items-center justify-center">
              <FiBriefcase className="mr-2" />
              Profesyonel Geçmiş
            </h2>
          </motion.div>

          <div className="relative space-y-8">
            {/* Timeline Line */}
            <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 dark:from-primary-light/20 dark:via-primary-light dark:to-primary-light/20"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:translate-y-24'
                } ${index % 2 === 0 ? '' : 'md:translate-x-[50%]'}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[14px] md:left-1/2 md:ml-[-8px] top-8 w-4 h-4 rounded-full bg-primary dark:bg-primary-light ring-4 ring-white dark:ring-dark-card`}></div>

                <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="group bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-dark-border hover:border-primary dark:hover:border-primary-light transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary dark:text-primary-light">{exp.company}</p>
                      </div>
                      <p className="text-gray-600 dark:text-dark-text-secondary mt-2 sm:mt-0">{exp.period}</p>
                    </div>
                    <p className="text-gray-600 dark:text-dark-text-secondary mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-dark-text-secondary text-sm px-3 py-1 rounded-full group-hover:bg-primary/5 dark:group-hover:bg-primary-light/5 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-dark-border hover:border-primary dark:hover:border-primary-light transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
                <FiBook className="relative text-2xl text-primary dark:text-primary-light mr-2 transform group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                Eğitim
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Management Information Systems (Full Scholarship - English)</h3>
                <p className="text-primary dark:text-primary-light">İstinye University</p>
                <p className="text-gray-600 dark:text-dark-text-secondary">2018 - 2023</p>
                <p className="text-gray-600 dark:text-dark-text-secondary">GPA: 3.20</p>
                <p className="text-gray-600 dark:text-dark-text-secondary mt-2">Bölüm üçüncüsü olarak mezun oldum. Eğitimim süresince veri analizi, veri bilimi, iş geliştirme ve dijital dönüşüm alanlarına odaklandım.</p>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-dark-border hover:border-primary dark:hover:border-primary-light transition-colors duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
                <FiGlobe className="relative text-2xl text-primary dark:text-primary-light mr-2 transform group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                Dil Becerileri
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">Türkçe</h3>
                <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full w-full"></div>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary mt-1">Native</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text mb-2">İngilizce</h3>
                <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2.5">
                  <div className="bg-primary dark:bg-primary-light h-2.5 rounded-full w-[75%]"></div>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary mt-1">B2 (Business English, able to read and write technical documentation)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 dark:bg-secondary-light/10 text-secondary dark:text-secondary-light text-sm font-medium mb-4">
              Sertifikalar
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4 flex items-center justify-center">
              <FiAward className="mr-2" />
              Profesyonel Sertifikalar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 border border-gray-100 dark:border-dark-border hover:border-secondary dark:hover:border-secondary-light transition-colors duration-300"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-secondary/10 dark:bg-secondary-light/10 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
                  <FiAward className="relative text-3xl text-secondary dark:text-secondary-light transform group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2 group-hover:text-secondary dark:group-hover:text-secondary-light transition-colors">
                  {cert.title}
                </h3>
                <p className="text-secondary dark:text-secondary-light mb-1">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-dark-text-secondary mb-3">{cert.date}</p>
                <p className="text-gray-600 dark:text-dark-text-secondary">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About; 
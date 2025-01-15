import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiLayers, FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import Footer from '../components/Footer';

const skills = [
  {
    icon: <FiCode />,
    title: 'Backend Geliştirme',
    description: 'Modern .NET teknolojileri ile güvenli, hızlı ve ölçeklenebilir backend sistemleri',
    technologies: ['.NET Core', 'ASP.NET Core', 'Windows Services', 'WinForms', 'Blazor', 'Entity Framework Core']
  },
  {
    icon: <FiDatabase />,
    title: 'Veritabanı & Entegrasyon',
    description: 'Veritabanı tasarımı, optimizasyon ve üçüncü parti servis entegrasyonları',
    technologies: ['SQL Server', 'T-SQL', 'MongoDB', 'Redis', 'RabbitMQ', 'REST API']
  },
  {
    icon: <FiServer />,
    title: 'Fintech & Güvenlik',
    description: 'Fintech sektöründe güvenli ödeme sistemleri ve POS entegrasyonları',
    technologies: ['Payment Systems', 'Virtual POS', 'ISO 27001', 'API Security', 'Secure Coding']
  },
  {
    icon: <FiLayers />,
    title: 'Yazılım Mimarisi',
    description: 'Clean Architecture ve modern tasarım prensipleri ile sürdürülebilir yazılım mimarisi',
    technologies: ['Clean Architecture', 'SOLID', 'Design Patterns', 'Unit Testing', 'Documentation']
  }
];

const projects = [
  {
    title: 'Birtek Randevo CRM',
    description: 'Randevu alma, ürün ve kaynak yönetimi için geliştirilmiş kapsamlı bir CRM sistemi. Çoklu dil desteği, özelleştirilebilir randevu takvimleri ve detaylı raporlama özellikleri.',
    tech: ['ASP.NET Core', 'Blazor', 'SQL Server', 'Redis', 'SignalR'],
    link: 'https://github.com/ekmekcicaneri/randevo-crm'
  },
  {
    title: 'CanersToolkit',
    description: 'Yazılımcılar için günlük işleri kolaylaştıran çeşitli araçlar sunan bir web uygulaması. JSON formatter, Base64 converter, JWT decoder gibi sık kullanılan araçları içerir.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/ekmekcicaneri/caners-toolkit'
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
        >
          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-dark-text mb-4 sm:mb-6 leading-tight">
                Merhaba, Ben{' '}
                <span className="text-primary dark:text-primary-light">
                  Caner Ekmekci
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-dark-text-secondary mb-8 sm:mb-10 leading-relaxed">
                Full-stack yazılım geliştirici olarak, modern teknolojiler ve best practice yaklaşımları ile{' '}
                <span className="text-primary dark:text-primary-light font-semibold">
                  ölçeklenebilir
                </span>
                {' '}ve{' '}
                <span className="text-secondary dark:text-secondary-light font-semibold">
                  sürdürülebilir
                </span>
                {' '}yazılım çözümleri geliştiriyorum.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8"
              >
                <a
                  href="/contact"
                  className="btn btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
                >
                  İletişime Geç
                  <FiArrowRight className="ml-2" />
                </a>
                <a
                  href="/about"
                  className="btn btn-outline px-6 sm:px-8 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:ring-offset-2 dark:focus:ring-offset-dark-bg hover:bg-primary/5 dark:hover:bg-primary-light/5"
                >
                  Hakkımda
                  <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center md:justify-start space-x-6"
              >
                {[
                  { href: "https://github.com/yourusername", icon: <FiGithub className="w-6 h-6" />, label: "GitHub profilim" },
                  { href: "https://linkedin.com/in/yourusername", icon: <FiLinkedin className="w-6 h-6" />, label: "LinkedIn profilim" },
                  { href: "https://twitter.com/yourusername", icon: <FiTwitter className="w-6 h-6" />, label: "Twitter profilim" }
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 dark:from-primary-light/20 dark:to-secondary-light/20 rounded-full blur-2xl"></div>
            <img
              src="/assets/images/caner.jpg"
              alt="Caner Ekmekci'nin profil fotoğrafı"
              className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-dark-card shadow-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light text-sm font-medium mb-4">
            Uzmanlık Alanları
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Teknoloji Stack'im
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Modern teknolojiler ve best practice yaklaşımları ile end-to-end çözümler geliştiriyorum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-dark-card rounded-xl shadow-lg p-6 sm:p-8 h-full border border-gray-100 dark:border-dark-border hover:border-primary dark:hover:border-primary-light transition-colors duration-300 focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-primary-light"
              tabIndex={0}
              role="article"
              aria-label={`${skill.title} uzmanlık alanı`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 dark:bg-primary-light/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform"></div>
                <div className="relative text-primary dark:text-primary-light text-2xl sm:text-3xl mb-4 transform group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-dark-text mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-dark-text-secondary text-sm px-3 py-1 rounded-full group-hover:bg-primary/5 dark:group-hover:bg-primary-light/5 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 dark:bg-secondary-light/10 text-secondary dark:text-secondary-light text-sm font-medium mb-4">
            Projeler
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Öne Çıkan Çalışmalarım
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Open source projelerim ve geliştirdiğim çözümler
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group bg-white dark:bg-dark-card rounded-lg border border-gray-200 dark:border-dark-border hover:border-secondary dark:hover:border-secondary-light transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FiGithub className="w-5 h-5 text-gray-700 dark:text-dark-text-secondary mr-3" />
                    <h3 className="text-xl font-semibold text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    </h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600 dark:text-dark-text-secondary">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      <span className="text-sm">Star</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-dark-text-secondary">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                      </svg>
                      <span className="text-sm">Fork</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-border text-gray-800 dark:text-dark-text-secondary"
                      >
                        <span className="w-2 h-2 mr-1.5 rounded-full bg-primary dark:bg-primary-light"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-dark-text-secondary">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    Active
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Son Blog Yazıları
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Yazılım geliştirme, mimari tasarım ve teknoloji üzerine deneyimlerimi paylaşıyorum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-border"
          >
            <div className="p-6">
              <span className="inline-block bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light text-sm px-3 py-1 rounded-full mb-4">
                Yazılım Mimarisi
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                Clean Architecture ile Sürdürülebilir Yazılım Geliştirme
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Modern yazılım geliştirmede Clean Architecture'ın önemi ve uygulanması...
              </p>
              <a
                href="/blog/clean-architecture"
                className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors duration-200"
              >
                Devamını Oku →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-border"
          >
            <div className="p-6">
              <span className="inline-block bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light text-sm px-3 py-1 rounded-full mb-4">
                DevOps
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                GitHub Actions ile Modern CI/CD Pipeline'ları
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                GitHub Actions kullanarak otomatik deployment süreçlerinin kurulumu...
              </p>
              <a
                href="/blog/github-actions-cicd"
                className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors duration-200"
              >
                Devamını Oku →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-border"
          >
            <div className="p-6">
              <span className="inline-block bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light text-sm px-3 py-1 rounded-full mb-4">
                Frontend
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-2">
                Next.js 13 ile Server Components
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                Next.js 13'ün getirdiği yenilikler ve Server Components kullanımı...
              </p>
              <a
                href="/blog/nextjs-13-server-components"
                className="text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors duration-200"
              >
                Devamını Oku →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home; 
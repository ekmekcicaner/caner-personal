import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ekmekcicaner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ekmekcicaner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/ekmekcicanerr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
          </div>
          <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
            © {currentYear} Caner Ekmekci. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-4 text-sm">
            <a
              href="/privacy"
              className="text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              Gizlilik Politikası
            </a>
            <a
              href="/terms"
              className="text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
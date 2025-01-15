import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiTag, FiClock, FiSearch } from 'react-icons/fi';
import Footer from '../components/Footer';


const blogPosts = [
  {
    id: 1,
    title: 'Mikroservis Mimarisinde Event-Driven Communication',
    excerpt: 'Mikroservis mimarisinde servisler arası iletişimde event-driven yaklaşımın avantajları ve implementasyon detayları.',
    date: '15 Mart 2024',
    readTime: '8 dk',
    category: 'Mimari',
    tags: ['Mikroservisler', 'Event-Driven', 'Apache Kafka', 'RabbitMQ'],
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: 2,
    title: 'React Performance Optimizasyonu: Best Practices',
    excerpt: 'React uygulamalarında performans optimizasyonu için kullanabileceğiniz teknikler ve best practice yaklaşımları.',
    date: '10 Mart 2024',
    readTime: '6 dk',
    category: 'Frontend',
    tags: ['React', 'Performance', 'Optimization', 'Web'],
    image: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: 3,
    title: 'Docker ve Kubernetes ile Uygulama Deployment',
    excerpt: 'Modern uygulamaların Docker containerization ve Kubernetes orchestration ile deployment süreçleri.',
    date: '5 Mart 2024',
    readTime: '10 dk',
    category: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'DevOps', 'Deployment'],
    image: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: 4,
    title: '.NET Core ile Clean Architecture',
    excerpt: 'Clean Architecture prensiplerinin .NET Core projelerinde uygulanması ve örnek proje yapısı.',
    date: '1 Mart 2024',
    readTime: '7 dk',
    category: 'Backend',
    tags: ['.NET Core', 'Clean Architecture', 'CQRS', 'DDD'],
    image: 'https://picsum.photos/800/400?random=4'
  }
];

const categories = ['Tümü', 'Mimari', 'Frontend', 'Backend', 'DevOps'];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tümü' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-bg dark:to-dark-card transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-dark-text mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary">
            Yazılım geliştirme, mimari tasarım ve teknoloji üzerine yazılar
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full md:w-96"
            >
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-text-secondary" />
              <input
                type="text"
                placeholder="Yazılarda ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-dark-text focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary dark:bg-primary-light text-white'
                      : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-dark-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-dark-border hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-dark-text-secondary mb-4">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiTag className="w-4 h-4" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-dark-text-secondary mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-100 dark:bg-dark-border text-gray-700 dark:text-dark-text-secondary text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-block text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors duration-200"
                >
                  Devamını Oku →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Blog; 
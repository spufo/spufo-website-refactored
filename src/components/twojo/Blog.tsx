import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import featuredArticeImage from '/assets/images/team.jpg';
import olderArticle1Image from '/assets/images/Curved_FinalSpufoLogo.svg';
import olderArticle2Image from '/assets/images/Curved_FinalSpufoLogo.svg';
import olderArticle3Image from '/assets/images/Curved_FinalSpufoLogo.svg';
import FeaturedArticle from './articles/FeaturedArticle';
import ArticleCard from './articles/ArticleCard';

const Blog = () => {
  const { t } = useTranslation();

  const olderArticles = [
    {
      image: olderArticle1Image,
      tag: t('twojo.blog.olderArticles.article1.tag'),
      title: t('twojo.blog.olderArticles.article1.title'),
      content: t('twojo.blog.olderArticles.article1.content'),
      link: '/contact',
      linkText: t('twojo.blog.olderArticles.article1.link'),
    },
    {
      image: olderArticle2Image,
      tag: t('twojo.blog.olderArticles.article2.tag'),
      title: t('twojo.blog.olderArticles.article2.title'),
      content: t('twojo.blog.olderArticles.article2.content'),
      link: '/contact',
      linkText: t('twojo.blog.olderArticles.article2.link'),
    },
    {
      image: olderArticle3Image,
      tag: t('twojo.blog.olderArticles.article3.tag'),
      title: t('twojo.blog.olderArticles.article3.title'),
      content: t('twojo.blog.olderArticles.article3.content'),
      link: '/contact',
      linkText: t('twojo.blog.olderArticles.article3.link'),
    },
  ];

  return (
    <section className="relative bg-[#111] text-white min-h-screen overflow-hidden pt-20">
      {/* Dots Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[--blue-color] text-4xl md:text-7xl font-semibold mb-4">
            {t('twojo.blog.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('twojo.blog.description')}
          </p>
        </motion.div>

        {/* Featured Article */}
        <FeaturedArticle 
          image={featuredArticeImage}
          tag={t('twojo.blog.featuredArticle.tag')}
          title={t('twojo.blog.featuredArticle.title')}
          content={t('twojo.blog.featuredArticle.content')}
          link="https://hub.hslu.ch/informatik/neue-tatort-app-sichert-fingerabdruecke-fuer-die-polizei/"
          linkText={t('twojo.blog.featuredArticle.link')}
        />

        {/* Older Articles Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {olderArticles.map((article, index) => (
            <ArticleCard
              key={index}
              {...article}
              delay={0.4 + (index * 0.2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

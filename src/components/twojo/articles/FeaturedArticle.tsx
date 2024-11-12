import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedArticleProps {
  image: string;
  tag: string;
  title: string;
  content: string;
  link: string;
  linkText: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  image,
  tag,
  title,
  content,
  link,
  linkText,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16"
    >
      <div className="rounded-3xl shadow-lg p-8 bg-[#18181b] transform hover:scale-105 transition duration-300">
        <div className="md:flex gap-8">
          <div className="md:w-1/2">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img 
                src={image}
                alt={title} 
                className="w-full h-full object-cover rounded-2xl"
              />
            </a>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-between">
            <div>
              <div className="text-[--blue-color] font-medium mb-2">{tag}</div>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {title}
                </h3>
              </a>
              <p className="text-gray-400 leading-relaxed">
                {content}
              </p>
            </div>
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center group text-[--blue-color] hover:text-[--blue-selected-color] transition-colors duration-300 mt-6"
            >
              {linkText}
              <span className="ml-2 transform group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArticle;

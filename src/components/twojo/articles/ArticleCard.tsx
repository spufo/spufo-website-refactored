import React from 'react';
import { motion } from 'framer-motion';
import ScrollLink from '../../general/ScrollLink';

interface ArticleCardProps {
  image: string;
  tag: string;
  title: string;
  content: string;
  link: string;
  linkText: string;
  delay: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  tag,
  title,
  content,
  link,
  linkText,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <div className="rounded-3xl shadow-lg p-8 h-full bg-[#18181b] transform hover:scale-105 transition duration-300 flex flex-col">
        <div className="flex-grow">
          <ScrollLink to={link}>
            <img 
              src={image}
              alt={title} 
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
          </ScrollLink>
          <div className="text-[--blue-color] font-medium mb-2">{tag}</div>
          <ScrollLink to={link}>
            <h3 className="text-2xl font-bold text-white mb-4">
              {title}
            </h3>
          </ScrollLink>
          <p className="text-gray-400 leading-relaxed">
            {content}
          </p>
        </div>
        <ScrollLink 
          to={link}
          className="inline-flex items-center group text-[--blue-color] hover:text-[--blue-selected-color] transition-colors duration-300 mt-6"
        >
          {linkText}
          <span className="ml-2 transform group-hover:translate-x-1 transition duration-300">→</span>
        </ScrollLink>
      </div>
    </motion.div>
  );
};

export default ArticleCard;

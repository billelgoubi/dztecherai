import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { InstagramIcon, YoutubeIcon, TelegramIcon } from './icons/SocialIcons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          AI Teacher DZ
        </a>
        <div className="flex items-center space-x-4">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
            <InstagramIcon />
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
            <YoutubeIcon />
          </a>
          <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
            <TelegramIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

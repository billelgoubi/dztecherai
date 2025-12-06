import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { InstagramIcon, YoutubeIcon, TelegramIcon, WhatsAppIcon } from './icons/SocialIcons';

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-10">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="font-bold text-lg text-cyan-400 mb-4">AI Teacher DZ</h3>
            <p className="text-gray-400">أدوات وخدمات تعليمية مبتكرة للمعلم الجزائري.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-cyan-400 mb-4">طرق الدفع</h3>
            <p className="text-gray-400">الدفع للخدمات والمنتجات المدفوعة يكون عبر بريدي موب (BaridiMob). يرجى التواصل عبر واتساب للتفاصيل.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-cyan-400 mb-4">تواصل معنا</h3>
            <div className="flex justify-center md:justify-end space-x-reverse space-x-4">
               <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <WhatsAppIcon />
              </a>
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
             <p className="text-gray-400 mt-4">
              انضم لمجموعتنا على تيليغرام:
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mr-1">
                @innovtechdz
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Teacher DZ. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500">
          حوّل تعليمك إلى تجربة تفاعلية
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          نقدم لك أحدث الأدوات والخدمات التعليمية المدعومة بالذكاء الاصطناعي لإنشاء دروس ملهمة، ملخصات ذكية، وأنشطة مبتكرة.
        </p>
      </div>
    </div>
  );
};

export default Hero;

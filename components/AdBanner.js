import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client='ca-pub-6137557895427855'
      data-ad-slot='3491852367'
      data-ad-format='auto'
      data-full-width-responsive='true'
    ></ins>
  );
};

export default AdBanner;

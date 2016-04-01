import React from 'react';

import HomeContent from './home_content';
import AboutContent from './about_content';
import PortfolioContent from './portfolio_content';
import ContactContent from './contact_content';
import FooterContent from './footer_content';

export default () => {
  return (
    <div className="container">
      <HomeContent />
      <AboutContent />
      <PortfolioContent />
      <ContactContent />
      <FooterContent />
    </div>
  );
}

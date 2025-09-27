import React from 'react';
import AnnouncementHero from '../components/Announcement Companents/AnnouncementHero';
import AnnouncementList from '../components/Announcement Companents/AnnouncementList';
import AnnouncementNewsletter from '../components/Announcement Companents/AnnouncementNewsletter';

const Announcement = () => {
  return (
    <div className="announcement">
      <AnnouncementHero />
      <AnnouncementList />
      <AnnouncementNewsletter />
    </div>
  );
};

export default Announcement;

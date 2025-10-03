import React from 'react';
import AnnouncementHero from '../components/Announcement Companents/AnnouncementHero';
import AnnouncementList from '../components/Announcement Companents/AnnouncementList';

const Announcement = () => {
  return (
    <div className="announcement">
      <AnnouncementHero />
      <AnnouncementList />
    </div>
  );
};

export default Announcement;

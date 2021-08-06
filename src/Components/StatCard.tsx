import React from 'react';

const StatCard = ({ data }: { data: { mainInfo: string, minorInfo: string } }) => (
  <div className='stat-card'>
    <p className='main-info'>{data.mainInfo}</p>
    <p className='minor-info'>{data.minorInfo}</p>
  </div>
);

export default StatCard;
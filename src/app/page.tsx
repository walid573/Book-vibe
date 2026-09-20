import React from 'react';
import Banner from './components/shared/homepage/Banner';
import Books from './components/shared/homepage/Books';

const page = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Books/>
    </div>
  );
};

export default page;
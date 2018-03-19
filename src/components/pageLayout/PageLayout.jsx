import React from 'react';

import ContIn from 'containers/ContIn';

import './PageLayout.scss';

const PageLayout = () => (
  <div className='container'>
    <h1>Test</h1>
    <div className='page-layout__viewport'>
      <ContIn />

    </div>
  </div>
);

export default PageLayout;

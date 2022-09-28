import React from 'react';

const OpenGraphTags = () => {
  return (
    <React.Fragment>
      <meta
        property='og:url'
        content='https://bazar-react.vercel.app/landing'
      />
      {/* thumbnail And title for social media */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Migobucks App' />
      <meta property='og:description' content='Migobucks App' />
      <meta property='og:image' content='/assets/images/landing/preview.png' />
    </React.Fragment>
  );
};

export default OpenGraphTags;

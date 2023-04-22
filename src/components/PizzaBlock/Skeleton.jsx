import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="139" cy="135" r="125" />
    <rect x="-1" y="279" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="418" rx="10" ry="10" width="101" height="45" />
    <rect x="123" y="419" rx="26" ry="26" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;

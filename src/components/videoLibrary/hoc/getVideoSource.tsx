import React from 'react';

const getVideoSource = (Wrapped: any) => (props: any) => {
  const src = [
    {
      src: 'http://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
    },
    {
      src:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4',
    },
  ];
  return <Wrapped {...props} src={src} />;
};

export default getVideoSource;

import React from 'react';

const getVideoOptions = (Wrapped: any) => (props: any) => {
  const opts = {
    autoplay: true,
    controls: true,
  };
  return <Wrapped {...props} videoOptions={opts} />;
};

export default getVideoOptions;

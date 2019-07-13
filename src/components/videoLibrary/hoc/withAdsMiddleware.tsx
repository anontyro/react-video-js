import React from 'react';

const withAdsMiddleware = (Wrapped: any) => (props: any) => {
  return <Wrapped {...props} />;
};

export default withAdsMiddleware;

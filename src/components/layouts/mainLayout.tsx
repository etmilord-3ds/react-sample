import React from 'react';

type LayoutPropts = {
  children?: string | React.ReactNode;
};

const Layout: React.FC<LayoutPropts> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;

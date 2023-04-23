import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      layoutです
      <br />
      {children}
    </>
  );
}

export default Layout;

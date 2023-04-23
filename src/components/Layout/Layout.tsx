type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      layoutです
      <br />
      {children}
    </div>
  );
}

export default Layout;

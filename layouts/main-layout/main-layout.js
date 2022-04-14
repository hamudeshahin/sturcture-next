const MainLayout = ({ children }) => {
  return (
    <div>
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Navbar</footer>
    </div>
  );
};

export default MainLayout;

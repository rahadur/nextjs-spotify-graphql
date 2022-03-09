import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm">
        <div className="container">
            <div className="col-8 offset-2">
                <Link href="/">
                    <a className="navbar-brand">Spotify GraphQL</a>
                </Link>
            </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="container my-3">
        <div className="col-8 offset-2">{children}</div>
      </div>
    </>
  );
};

export default Layout;

import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout

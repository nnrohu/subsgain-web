import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
function Layout({ children }) {
  return (
    <>
      <Meta
        title="Subs Gain - Home"
        keywords="youtube subs, free subs for youtube, sub gain, subsgain, subs gain"
        description="Subs Gain | Boost Subscriber offers a platform to share videos and channels."
      />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout

import Head from 'next/head'
import HomeBody from '../components/HomeBody'
import Meta from '../components/Meta'

export default function Home() {
  return (
    <div>
      <Meta
        title="Subs Gain - Home"
        keywords="youtube subs, free subs for youtube, sub gain, subsgain, subs gain"
        description="Subs Gain | Boost Subscriber offers a platform to share videos and channels."
      />
      <HomeBody />
    </div>
  )
}

import Head from 'next/head'
import HomeBody from '../components/HomeBody'
import Meta from '../components/Meta'

export default function Home() {
  return (
    <div>
      <Meta title="Home" />
      <HomeBody />
    </div>
  )
}

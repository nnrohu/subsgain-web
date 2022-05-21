import Head from 'next/head';
import HomeBody from '../components/HomeBody';
import Meta from '../components/Meta';
import AdBanner from '../components/AdBanner';
export default function Home() {
  return (
    <div>
      <Meta title='Home' />
      <Meta name='viewport' content='initial-scale=1, width=device-width' />

      {/* <AdBanner /> */}
      <HomeBody />
    </div>
  );
}

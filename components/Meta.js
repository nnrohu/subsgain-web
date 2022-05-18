import Head from 'next/head';
function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta property='og:title' content={`Subs Gain - ${title}`} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <link rel='icon' href='/logo.png' />
      <title>{`Subs Gain - ${title}`}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Subs Gain',
  keywords:
    'youtube subs, free subs for youtube, sub gain, subsgain, subs gain',
  description:
    'Subs Gain | Boost Subscriber offers a platform to share videos and channels.',
};

export default Meta;

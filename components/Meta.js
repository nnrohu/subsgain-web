import Head from "next/head"
function Meta({title, keywords, description}) {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet='utf-8' />
            <link rel="icon" href='/favicon.ico' />
            <title>{title}</title>
        </div>
    )
}

Meta.defaultProps = {
    title: 'Subs Gain',
    keywords: 'youtube subs, free subs for youtube, free subs, subs pal',
    description: 'Subs Gain | Boost Subscriber offers a platform to share videos and channels.'
}

export default Meta

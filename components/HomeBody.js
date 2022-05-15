import Link from 'next/link'
import Image from 'next/image'

function HomeBody() {
  return (
    <div className="container">
      <div className="homepageCntr">
      <div className="lefthome">
        <div className="my-4 md:my-8">
          <h1>
            Subs Gain | Boost Subscriber offers a platform to share videos and
            channels with people around the world.
          </h1>
        </div>
        <div className="my-4 md:my-8">
          <h1>
            Subs Gain | Boost Subscriber creates a community for people to
            introduce their own channels and videos to everyone all over the
            world.
          </h1>
        </div>
        <div className="my-4 md:my-8">
          <h1>
            All of your subscribers, views, and likes are from real people.
          </h1>
        </div>
        <div className="my-4 md:my-8">
          <h1>
            You will easy to get 1k subscribers and 4k watching hours of time
            very quickly.
          </h1>
        </div>
        <div className="my-4 md:my-8">
          <h1>You can turn on monetization in a short time.</h1>
        </div>
        <div className="my-4 md:my-8">
          <h1>
            We will promote immediately your channels and videos to people
            around the world and help your channels and videos reach out to many
            people.
          </h1>
        </div>
      </div>
      <div className="righthome">
        
          <Link href="https://play.google.com/store/apps/details?id=com.legit.subsgain">
            <a target="_blank">
              <img
                src="/get_it_on_google_play.png"
                alt="download from google play"
                width="600"
                height="50"
              />
            </a>
          </Link>
      </div>
      </div>
    </div>
  )
}

export default HomeBody

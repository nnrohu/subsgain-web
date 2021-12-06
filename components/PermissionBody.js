import Link from 'next/link'
import Image from 'next/image'

function PermissionBody() {
  return (
    <div className="flex flex-col md:flex-row p-3 md:8 min-h-screen">
      <div className="flex-1  ">
        
        <div className="my-4 md:my-8">
          <h1 className="text-lg font-bold">Google Account</h1>
          <p>used to sign in the app.</p>
        </div>
        
        <div className="my-4 md:my-8">
          <h1 className="text-lg font-bold">Draw over other apps</h1>
          <p>used to show timer on screen.</p>
        </div>
        
        <div className="my-4 md:my-8">
          <h1 className="text-lg font-bold">Youtube view only</h1>
          <p>used to verify that you have subscribed or not.</p>
        </div>
       
      </div>
      <div className="flex-1 max-w-screen-lg mx-auto item-center">
        <Link href="https://play.google.com/store/apps/details?id=com.legit.subsgain">
          <a>
            <img
              src="/get_it_on_google_play.png"
              alt="download from google play"
              width="400"
              height="40"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PermissionBody

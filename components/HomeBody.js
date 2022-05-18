import Link from 'next/link';
import Image from 'next/image';
import { app } from '../src/config/firebaseConfig';

import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
} from 'firebase/auth';

function HomeBody() {
  // const oauth2Client = new google.auth.OAuth2(
  //   process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  //   process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  //   'https://www.subsgain.in/help'
  // );

  const scopes = ['https://www.googleapis.com/auth/youtube.readonly'];

  // const url = oauth2Client.generateAuthUrl({
  //   // 'online' (default) or 'offline' (gets refresh_token)
  //   access_type: 'offline',

  //   // If you only need one scope you can pass it as a string
  //   scope: scopes,
  // });

  // const initClient = () => {
  //   gapi.client
  //     .init({
  //       apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  //       clientId:
  //         '173945245363-gsed416svvqc7ku5bmu81vsdequu5mhd.apps.googleusercontent.com',
  //       scope: 'https://www.googleapis.com/auth/youtube.readonly',
  //       discoveryDocs: [
  //         'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
  //       ],
  //     })
  //     .then(function () {
  //       GoogleAuth = gapi.auth2.getAuthInstance();

  //       // Listen for sign-in state changes.
  //       GoogleAuth.isSignedIn.listen(updateSigninStatus);
  //     });
  // };

  // const provider = new GoogleAuthProvider();
  // const auth = getAuth(app);

  // provider.addScope('https://www.googleapis.com/auth/youtube.readonly');

  const signIn = async () => {
    // const response = await signInWithCredential(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
    // const res = await GoogleAuth.signIn();
    // console.log('res', gapi);
    // let gapiClient = loadClientAuth2(
    //   gapi,
    //   process.env.NEXT_GOOGLE_CLIENT_ID,
    //   scopes
    // );
  };
  return (
    <div className='container'>
      <div className='homepageCntr'>
        <div className='lefthome'>
          <div className='my-4 md:my-8'>
            <h1>
              Subs Gain | Boost Subscriber offers a platform to share videos and
              channels with people around the world.
            </h1>
          </div>
          <div className='my-4 md:my-8'>
            <h1>
              Subs Gain | Boost Subscriber creates a community for people to
              introduce their own channels and videos to everyone all over the
              world.
            </h1>
          </div>
          <div className='my-4 md:my-8'>
            <h1>
              All of your subscribers, views, and likes are from real people.
            </h1>
          </div>
          <div className='my-4 md:my-8'>
            <h1>
              You will easy to get 1k subscribers and 4k watching hours of time
              very quickly.
            </h1>
          </div>
          <div className='my-4 md:my-8'>
            <h1>You can turn on monetization in a short time.</h1>
          </div>
          <div className='my-4 md:my-8'>
            <h1>
              We will promote immediately your channels and videos to people
              around the world and help your channels and videos reach out to
              many people.
            </h1>
          </div>
        </div>
        <div className='righthome'>
          <Link href='https://play.google.com/store/apps/details?id=com.legit.subsgain'>
            <a>
              <img
                src='/get_it_on_google_play.png'
                alt='download from google play'
                width='600'
                height='50'
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;

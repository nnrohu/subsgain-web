import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "../pages/style.css"
function MyApp({ Component, pageProps }) {

  // const firebaseConfig = {
  //   apiKey: "AIzaSyC4UaDklZyBv7cI0KpC9CjqffxFg_luJoA",
  //   authDomain: "legit-subsgain.firebaseapp.com",
  //   projectId: "legit-subsgain",
  //   storageBucket: "legit-subsgain.appspot.com",
  //   messagingSenderId: "173945245363",
  //   appId: "1:173945245363:web:3e6f3b5a172c51c7ceeac6",
  //   measurementId: "G-XT37WY2RHH"
  // };

  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

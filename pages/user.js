import Meta from '../components/Meta'
import Link from 'next/link'
import Image from 'next/image'
import you from "../public/you.jpg"
import { Fragment } from 'react'
function permissions() {
  return (
    <Fragment>
    <div className='coinHeader'>
        <div className='container'>
       <span><b>Coin</b> : 9350</span>
       <button>Add more +</button>
       </div>
    </div>
    <div className='container'>
      
      <Meta title="User" />

<div className='userIup'>
      <div className='userInn'>
          <label className='userInnLab'><Image layout="intrinsic"  src={you} alt="" /></label>
          <Link href="https://play.google.com/store/apps/details?id=com.legit.subsgain">
          <a  className='alink' target="_blank">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout >
          </a>
        </Link>
      </div>
      <section>
      <h1>User Liting:</h1>
      <ul>
        <li>Amar Poddar</li>
        <li>Rajat Kumar Sahu</li>
        <li>Tarun Sharma</li>
        <li>Vinay Yadav</li>
        <li>Sonika Thakur</li>
        <li>Deepak Choudhary</li>
      </ul>
      </section>
    </div>
    </div>
    </Fragment>
  )
}

export default permissions

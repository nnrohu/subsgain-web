import Link from 'next/link'
import Image from "next/image";
import logo from "../public/logo.png"
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
function Nav() {
  const [open, setOpen] = useState(false);



  // console.log("width", width)
  return (
    <nav className="header">
    <div className="container">
    <div className="logo">
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="download from google play"
              width={64}
              height={64}
              layout="intrinsic"
            />
            <span>Subs Gain</span>
            </a>
        </Link>
        </div>
        <div className="menubar">
          <button onClick={()=> setOpen(!open)} className="menubarClick">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-10 fill-current"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <ul className='navul desk'>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/permissions"><a>Permissions</a></Link></li>
          </ul>

        </div>
        
        {open && <ul className='navul mobs'>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/permissions"><a>Permissions</a></Link></li>
          </ul>
            }

      </div>
    </nav>
  )
}

export default Nav

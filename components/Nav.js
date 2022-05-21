import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
function Nav() {
  const { user, logout, login } = useAuth();
  const router = useRouter();
  return (
    <nav className='header'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <a>
              <Image
                src={logo}
                alt='download from google play'
                width={64}
                height={64}
                layout='intrinsic'
              />
              <span>Subs Gain</span>
            </a>
          </Link>
        </div>
        <div className='menubar'>
          <button className='p-2 rounded-lg md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='h-10 fill-current'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </button>

          <ul className='navul'>
            <li>
              <Link href='/permissions'>
                <a>Permissions</a>
              </Link>
            </li>

            {user ? (
              <>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <button
                  type='button'
                  class='login-with-google-btn'
                  onClick={() => login()}
                >
                  Sign in with Google
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

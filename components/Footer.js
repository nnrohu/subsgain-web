import Link from 'next/link'

function Footer() {
  return (
    <div className="flex bg-gray-100 absolute  w-full flex-col justify-center p-4">
      <div className="flex text-center justify-around flex-row">
        <Link href="/privacy_policy">Privacy</Link>
        <Link href="/term_condition">Terms &amp; Conditions</Link>
      </div>
      <div className="text-center mt-4">
        <h1>&copy; 2021 Subs Gain</h1>
      </div>
    </div>
  )
}

export default Footer

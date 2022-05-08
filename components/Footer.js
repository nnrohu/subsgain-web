import Link from 'next/link'

function Footer() {
  return (
    <div className="footer">
      <div className='container'>
      <p>Copyright &copy; 2022 SubsGain <span>
        <Link href="/privacy_policy"><a>Privacy Policy</a></Link>
        <Link href="/term_condition"><a>Terms &amp; Conditions</a></Link> <Link href="/help"><a>Help</a></Link></span></p>
        </div>
    </div>
  )
}

export default Footer

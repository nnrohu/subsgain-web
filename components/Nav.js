import Link from 'next/link'

function Nav() {
  return (
    <nav class="bg-white px-6 relative shadow-md">
      <div class="flex flex-row justify-between items-center py-2">
        <Link href="/">
          <div className="flex flex-row items-center">
            <img
              src="/logo.png"
              alt="download from google play"
              width="50"
              height="50"
            />
            <h3 class="font-semibold text-2xl text-gray-600">Subs Gain</h3>
          </div>
        </Link>
        <div class="group flex flex-col items-center">
          <button class="p-2 rounded-lg md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="h-10 fill-current"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div class="hidden group-hover:block md:block absolute md:static bg-white inset-x-0 top-16 py-3 shadow-md md:shadow-none text-gray-600">
            <div class="flex flex-row justify-center items-center text-center font-semibold text-gray-500">
              <div
                class="px-6 py-1 flex flex-col md:flex-row md:items-center"
                href="#"
              >
                <Link href="/">Home </Link>
              </div>
              <div
                class="px-6 py-1 flex flex-col md:flex-row md:items-center"
                href="#"
              >
                <Link href="/permissions">Permissions </Link>
              </div>
              <div
                class="px-6 py-1 flex flex-col md:flex-row md:items-center"
                href="#"
              >
                <Link href="/help">Help</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

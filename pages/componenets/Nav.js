import Link from 'next/link'

export default function Nav(){
  return (

    <div className='bg-gradient-to-b from-gray-800 to-gray-900 flex'>

      <Link href="/">
        <h1 className="p-3 text-2xl text-white font-bold">tagwalls</h1>
      </Link>

      <div className="text-white flex my-auto text-sm">

        <Link href="/latest">
          <div className="p-3 border-l border-gray-500 hover:bg-gray-700">
            <h2 className="text-green-300">latest</h2>
          </div>
        </Link>

        <Link href="/hot">
          <div className="p-3 border-l border-gray-500 hover:bg-gray-700">
            <h2 className=" text-red-500">hot</h2>
          </div>
        </Link>

        <Link href="/toplist">
          <div className="p-3 border-l border-gray-500 hover:bg-gray-700">
            <h2 className=" text-purple-300">toplist</h2>
          </div>
        </Link>

        <Link href="/random">
          <div className="p-3 border-l border-gray-500 hover:bg-gray-700">
            <h2 className=" text-orange-400">random</h2>
          </div>
        </Link>

        <Link href="/tags">
          <div className="p-3 border-x border-gray-500 hover:bg-gray-700">
            <h2 className=" text-yellow-400">tags</h2>
          </div>
        </Link>

      </div>
    </div>

  )
}

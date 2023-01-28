export default function Nav(){
  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 flex'>
      <h1 className="p-3 text-2xl text-white font-bold">tagwalls</h1>
      <div className="text-white flex mt-auto">
        <div className="p-3 border-x border-gray-500 hover:bg-gray-700">
          <h2 className="text-green-300">latest</h2>
        </div>

        <div className="p-3 border-x border-gray-500 hover:bg-gray-700">
          <h2 className=" text-red-500">hot</h2>
        </div>

        <div className="p-3 border-x border-gray-500 hover:bg-gray-700">
          <h2 className=" text-purple-300">toplist</h2>
        </div>

        <div className="p-3 border-x border-gray-500 hover:bg-gray-700">
          <h2 className=" text-orange-400">random</h2>
        </div>

        <div className="p-3 border-x border-gray-500 hover:bg-gray-700">
          <h2 className=" text-yellow-400">tags</h2>
        </div>
      </div>
    </div>
  )
}

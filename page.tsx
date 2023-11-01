import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between">
      <nav className='w-full h-20 flex items-center justify-between px-5 shadow-lg'>
        <p className='text-2xl font-bold cursor-pointer'>RISTEK</p>
        <button className='text-gray-500 text-base px-4 pl-20 py-1 rounded-md hover:text-blue-700'>
          Homepage
        </button>
        <button className='text-gray-500 px-3 py-1 rounded-md hover:text-blue-700'>
          Friends
        </button>
        <button className='text-gray-500 px-3 py-1 rounded-md hover:text-blue-700'>
          Tasks
        </button>
        <button className='text-gray-500 px-3 py-1 rounded-md hover:text-blue-700'>
          Events
        </button>
        <button className='text-gray-500 px-3 py-1 rounded-md hover:text-blue-700'>
          About Fasilkom/UI
        </button>
        <button className='text-gray-500 px-3 py-1 rounded-md hover:text-blue-700'>
          Welcome, Anthony Edbert Feriyanto
        </button>
      </nav>
      <div className='h-screen w-full flex justify-center py-10'>
        <div className='font-semibold pt-20 mt-2 pr-20 mr-6 text-3xl'>
          Anthony Edbert Feriyanto
        <button className='border-cyan-700 border-solid text-blue-700 text-lg pl-20 px-7'>Edit Profile</button>
          <div className='font-normal mt-2 pr-20 mr-6 text-lg'>Class of 2023</div>  
            
        </div>
      </div>
    </main>
  )
}

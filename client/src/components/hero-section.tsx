import React from 'react'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className='text-xl font-semibold text-gray-900'>niti</span>

            </div>
            {/* <div  className="flex flex-wrap items-right gap-2 md:flex-row bg-white text-black rounded">
              <Button>Sign in</Button>
            </div> */}
  <button className=" bg-white text-gray-600 hover:bg-gray-100 px-4 py-3 rounded-xl shadow-sm transition duration-150 ease-in-out">
    Sign in
  </button>


        </header>

        {/*Hero Content */}
        <main className='max-w-7xl mx-auto px-6 pt-16 pb-20'>
          <div className='text-center mb-16'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              AI-powered projects briefs
              <br />
              for designers
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
               Transform your ideas into comprehensive project briefs in seconds! Let AI create
            your project brief while you focus on bringing your vision to life.
            </p>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text rounded-full">
            Get started for free
          </Button>

          </div>

          <div className='relative max-w-4xl mx-auto'>
            <div className='relative'>
               <img
              src="/todo.jpeg"
              alt="niti"
              width={800}
              height={500}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
              
            </div>
            <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 border-2 border-white"></div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Join 50,000+ designers</span>
            </div>
          </div>

          </div>


        </main>


    </div>
  )
}

export default HeroSection
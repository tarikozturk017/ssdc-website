import { useState } from 'react'
import Head from 'next/head'
// import {BsFilledMoonStarsFill} from 'react-icons/bs' 
import Footer from './components/Footer'
import Board from './components/Board'
import About from './components/About'


export default function Home() {
  const [displayBoard, setDisplayBoard] = useState(false);

  // const display = displayBoard ? <Board /> : <About />;
  return (
    <div >
      <Head>
        <title>Seneca Software Developers Club</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' min-h-screen bg-gradient-to-b from-gray-100 to-gray-500' >
        <section >
          <nav className=' bg-red-800 p-8 mx-0 mb-12 flex justify-between text-xl text-neutral-100'>
            <ul className='flex items-center gap-8'>
              <li><a href="">SSDC | Seneca Software Developers Club</a></li>
            </ul>
            <ul className='flex items-center gap-3 md:gap-6 lg:gap-8'>
              {/* <li className='hover:text-slate-300'><a href="" onClick={() => {setDisplayBoard(true)}}>Board</a></li> */}
              {/* <li className='hover:text-slate-300'><a href="" onClick={() => {setDisplayBoard(false)}}>About</a></li> */}
              <li className='hover:text-slate-300 cursor-pointer
              ' onClick={() => {setDisplayBoard(true)}}>Board</li>
              <li className='hover:text-slate-300 cursor-pointer
              ' onClick={() => {setDisplayBoard(false)}}>About</li>
              <li className='hover:text-slate-300'><a href="#contact">Get Involved</a></li>
            </ul>
          </nav>
        </section>

        <section>
          { displayBoard && <Board />}
          { !displayBoard && <About />}
          {/* {display} */}
        </section>
        <div id='contact'>
          <Footer />
        </div>
      </main>
    </div>
  )
}

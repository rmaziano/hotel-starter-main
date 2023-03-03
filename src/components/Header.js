import React, { useEffect, useState } from 'react'
// logo
import LogoDark from '../assets/img/logo-dark.svg'
import LogoWhite from '../assets/img/logo-white.svg'

const Header = () => {
  const [header, setHeader] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })
  return (
    <header
      className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        {/* logo */}
        <a href='/'>
          {header ? (
            <img className='w-[160px]' src={LogoDark} alt='Logo Dark' />
          ) : (
            <img className='w-[160px]' src={LogoWhite} alt='Logo White' />
          )}
        </a>
        {/* nav */}
        <nav
          className={`${
            header ? 'text-primary' : 'text-white'
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <a href='/' className='hover:text-accent transition-all'>
            Home
          </a>
          <a href='/' className='hover:text-accent transition-all'>
            Rooms
          </a>
          <a href='/' className='hover:text-accent transition-all'>
            Restaurant
          </a>
          <a href='/' className='hover:text-accent transition-all'>
            Spa
          </a>
          <a href='/' className='hover:text-accent transition-all'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header

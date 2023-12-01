import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const navLinks = ['home', 'about', 'portfolio', 'experience', 'contact']
  //   const menuRef = useRef()

  //   useEffect(() => {
  //     const closeMenu = (e) => {
  //       console.log(menuRef.current)
  //       if (!menuRef.current.contains(e.target)) {
  //         setNav(false)
  //       }
  //     }

  //     document.body.addEventListener('mousedown', closeMenu)

  //     return () => document.removeEventListener('mousedown', closeMenu)
  //   }, [])

  return (
    <div
      className=" fixed flex h-20 w-full items-center 
    justify-between bg-slate-600 text-white"
    >
      <div>
        <h1 className="ml-2 px-4 font-signature text-4xl">Sam</h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map((link, index) => (
          <li
            className="cursor-pointer px-4 font-medium capitalize text-gray-400 duration-200 hover:scale-105"
            key={index}
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="to-hero-gradient-to from-hero-gradient-from absolute right-0 top-0 flex h-screen w-max flex-col items-center justify-center bg-gradient-to-b px-10">
          {navLinks.map((link, index) => (
            <li
              className="cursor-pointer px-4 py-6 text-2xl font-medium capitalize text-gray-400 duration-200 hover:scale-105"
              key={index}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar

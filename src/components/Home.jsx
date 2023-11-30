import { Link } from 'react-scroll'
import heroImage from '../assets/heroImage.png'
import { IoIosArrowForward } from 'react-icons/io'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Home = () => {
  return (
    <div
      name="home"
      className="from-hero-gradient-from to-hero-gradient-to h-screen w-full bg-gradient-to-b pt-32 bg-blend-overlay"
    >
      <div
        className=" mx-auto flex h-full max-w-screen-lg flex-col 
      items-center justify-center px-4 lg:flex-row"
      >
        <div className="rounded-full  lg:mr-6 lg:w-auto">
          <img
            src={heroImage}
            alt="my profile"
            className="border-primary mx-auto h-56 rounded-full border-8 lg:h-72"
          />
        </div>
        <div className="flex h-full flex-col justify-center">
          <h2 className="font-header text-center text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
            Hello I'm Samuel Kariuki
          </h2>
          {/* <p className="max-w-md py-4 text-gray-400">
            I have 0 year of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, tailwind, Node and Express
          </p> */}
          <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
              <p className="font-body text-lg uppercase text-white">
                Let's connect
              </p>
              <div className="hidden sm:block">
                <IoIosArrowForward className=" hover:text-yellow text-xl text-white" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 pl-2 pt-5 sm:justify-start sm:pt-0">
              <a
                href="https://github.com/karispapa"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className=" hover:text-yellow text-xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-kariuki-210a358b/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className=" hover:text-yellow text-xl text-white" />
              </a>
              <a
                href="mailto:skariuki@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineMail className=" hover:text-yellow text-xl text-white" />
              </a>
            </div>
          </div>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-4  flex w-fit 
              cursor-pointer items-center rounded-full border-4 border-white px-6 py-2  text-white"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <IoIosArrowForward size={23} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

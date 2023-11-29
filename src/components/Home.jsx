import { Link } from 'react-scroll'
import heroImage from '../assets/heroImage.png'
import { IoIosArrowForward } from 'react-icons/io'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-32 bg-blend-overlay"
    >
      <div className=" mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            I am a full Stack Developer
          </h2>
          <p className="max-w-md py-4 text-gray-400">
            I have 0 year of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, tailwind, Next JS and GraphQl
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group my-2 flex w-fit cursor-pointer items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <IoIosArrowForward size={23} />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/3">
          <img
            src={heroImage}
            alt="my profile"
            className="mx-auto h-full  w-2/3 rounded-2xl object-contain md:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Home

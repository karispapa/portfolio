import { Link } from 'react-scroll'
import heroImage from '../assets/heroImage.png'
import { IoIosArrowForward } from 'react-icons/io'

import { socialLinks2 } from '../utils/utils'
const Home = () => {
  return (
    <div
      name="home"
      className="from-hero-gradient-from to-hero-gradient-to h-screen w-full bg-gradient-to-b pt-32 bg-blend-overlay lg:pt-32 "
    >
      <div
        className="mx-auto flex h-full max-w-screen-lg flex-col 
      items-center justify-center px-4 lg:flex-row"
      >
        <div className="mr-3 rounded-full lg:ml-8 lg:w-1/2 ">
          <img
            src={heroImage}
            alt="my profile"
            className="mx-auto h-56 rounded-full border-8 border-primary lg:h-72"
          />
        </div>
        <div className="flex h-full flex-col justify-center">
          <h2 className="font-header text-center text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
            Hello I'm Samuel Kariuki
          </h2>
          <p className=" py-4  text-lg text-gray-200">
            A lover of functional programming and fully self taught. Currently,
            I love to work on web applications using technologies like React,
            Redux, mongoDB, tailwind, Node, NestJs, Typescript, postgres and
            Express
          </p>
          <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
            <div className="flex items-center justify-center space-x-2 pl-0 sm:justify-start md:pl-1">
              <p className="font-body text-lg uppercase text-white">
                Let's connect
              </p>

              <div className="hidden sm:block">
                <IoIosArrowForward className=" text-2xl text-white hover:scale-110 hover:text-yellow-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 pl-2 pt-5 sm:justify-start sm:pt-0">
              {socialLinks2.map(({ Icon, href }, index) => (
                <a href={href} target="_blank" rel="noreferrer" key={index}>
                  <Icon className=" text-2xl text-white hover:scale-110 hover:text-yellow-500" />
                </a>
              ))}
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

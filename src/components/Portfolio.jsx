import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'

import tictactoe from '../assets/portfolio/tictactoe.jpg'

const Portfolio = () => {
  const portfolios = [
    { imageSrc: arrayDestruct, demoLink: '', codeLink: '' },
    { imageSrc: installNode, demoLink: '', codeLink: '' },
    { imageSrc: navbar, demoLink: '', codeLink: '' },
    { imageSrc: reactParallax, demoLink: '', codeLink: '' },
    { imageSrc: reactSmooth, demoLink: '', codeLink: '' },
    {
      imageSrc: tictactoe,
      demoLink: 'https://beamcmms.com/',
      codeLink: 'https://github.com/karispapa/tic-tac-toe',
    },
  ]
  return (
    <div
      name="portfolio"
      className=" w-full pt-24
      text-white md:h-screen md:pb-6 "
    >
      <div
        className="mx-auto flex h-full w-full max-w-screen-lg 
        flex-col justify-center p-4"
      >
        <div className="pb-6">
          <p className="text-primary inline border-b-4 border-gray-500 text-4xl font-bold uppercase">
            Portfolio
          </p>
          <p className="font-header  pt-6 text-xl font-medium capitalize text-black sm:text-2xl lg:text-3xl">
            Check Out my work right here
          </p>
        </div>
        <div
          className="grid gap-8 sm:grid-cols-2 
        sm:px-0 md:grid-cols-3"
        >
          {portfolios.map(({ imageSrc, demoLink, codeLink }, index) => (
            <div
              key={index}
              className="rounded-lg text-gray-800 shadow-md shadow-gray-600"
            >
              <img
                src={imageSrc}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noreferrer">
                  <button
                    className="m-4 w-1/2 px-6 py-3 first-letter:duration-300
               hover:scale-110"
                  >
                    Demo
                  </button>
                </a>
                <a target="_blank" rel="noreferrer" href={codeLink}>
                  <button
                    className="m-4 w-1/2 px-6 py-3 first-letter:duration-300 
              hover:scale-110"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

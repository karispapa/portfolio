import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
  const portfolios = [
    arrayDestruct,
    installNode,
    navbar,
    reactParallax,
    reactSmooth,
    reactWeather,
  ]
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b  from-black  to-gray-800 pt-32 text-white 
      md:h-screen md:pb-6 md:pt-40"
    >
      <div
        className="mx-auto flex h-full w-full max-w-screen-lg 
        flex-col justify-center p-4"
      >
        <div className="pb-6">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6">Check Out my work right here</p>
        </div>
        <div
          className="grid gap-8 sm:grid-cols-2 
        sm:px-0 md:grid-cols-3"
        >
          {portfolios.map((imageSrc, index) => (
            <div key={index} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={imageSrc}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="m-4 w-1/2 px-6 py-3 first-letter:duration-200
               hover:scale-105"
                >
                  Demo
                </button>
                <button
                  className="m-4 w-1/2 px-6 py-3 first-letter:duration-200 
              hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

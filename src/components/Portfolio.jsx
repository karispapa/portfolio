import beambudget from '../assets/portfolio/beambudgetapi.png'
import beamcmms from '../assets/portfolio/beamcmmsapi.png'
// import calculator from '../assets/portfolio/calculator.png'
// import recipes from '../assets/portfolio/odinrecipes.png'
import budget from '../assets/portfolio/beambudget.png'

// import tictactoe from '../assets/portfolio/tictactoe.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      imageSrc: beambudget,
      demoLink:
        'https://www.postman.com/beamsystems/workspace/beam-budget/overview',
      codeLink: 'https://github.com/karispapa/BeamBudget_fs',
    },
    {
      imageSrc: beamcmms,
      demoLink: 'https://www.postman.com/beamsystems/workspace/beam-cmms/',
      codeLink: 'https://github.com/karispapa/beam_cmms',
    },
    // {
    //   imageSrc: calculator,
    //   demoLink: 'https://karispapa.github.io/calculator/',
    //   codeLink: 'https://github.com/karispapa/calculator',
    // },
    // {
    //   imageSrc: recipes,
    //   demoLink: 'https://karispapa.github.io/odin-recipes/',
    //   codeLink: 'https://github.com/karispapa/odin-recipes',
    // },
    {
      imageSrc: budget,
      demoLink: 'https://github.com/karispapa/React-Budget-App',
      codeLink: 'https://github.com/karispapa/React-Budget-App',
    },
    // {
    //   imageSrc: tictactoe,
    //   demoLink: 'https://beamcmms.com/',
    //   codeLink: 'https://github.com/karispapa/tic-tac-toe',
    // },
  ]
  return (
    <div
      name="portfolio"
      className=" md:h-scree w-full
      pt-24 text-white md:pb-6 "
    >
      <div
        className="mx-auto flex h-full w-full max-w-screen-lg 
        flex-col justify-center p-4"
      >
        <div className="pb-6">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold uppercase text-primary">
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

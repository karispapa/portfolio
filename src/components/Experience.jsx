import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import mongodb from '../assets/mongodb.png'
import redux from '../assets/redux.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'

const Experience = () => {
  const techs = [
    { name: html, title: 'HTML', style: 'shadow-orange-500' },
    { name: css, title: 'CSS', style: 'shadow-blue-500' },
    { name: javascript, title: 'Javascript', style: 'shadow-yellow-500' },
    { name: reactImage, title: 'React', style: 'shadow-blue-500' },
    { name: mongodb, title: 'MongoDB', style: 'shadow-white' },
    { name: redux, title: 'Redux', style: 'shadow-pink-400' },
    { name: github, title: 'Github', style: 'shadow-gray-400' },
    { name: tailwind, title: 'Tailwind', style: 'shadow-sky-400' },
    { name: node, title: 'node', style: 'shadow-node' },
  ]
  return (
    <div
      name="experience"
      className=" md:h-scree bg-gradient-to-b from-gray-800 to-black
     pt-24"
    >
      <div
        className="mx-auto flex h-full w-full max-w-screen-lg 
      flex-col justify-center p-4 text-white "
      >
        <div>
          <p
            className="inline border-b-4 
          border-gray-500 p-2 text-4xl font-bold"
          >
            Experience
          </p>
          <p className="py-6">These are the technolgies I have worked with</p>
        </div>
        <div
          className="grid w-full grid-cols-2 gap-8 px-12 
        py-8 text-center sm:grid-cols-3 sm:px-0"
        >
          {techs.map(({ name, title, style }, index) => (
            <div
              key={index}
              className={`
               ${style} }  rounded-lg py-2 shadow-md duration-500 hover:scale-105 `}
            >
              <img className={'mx-auto w-20'} src={name} alt="" />
              <p className=" mt-4 capitalize">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

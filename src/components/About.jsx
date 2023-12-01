import { IoIosArrowForward } from 'react-icons/io'
import { socialLinks2 } from '../utils/utils'

const About = () => {
  return (
    <div className="h-screen w-full bg-gray-100 pt-4" name="about">
      <div className=" container mx-auto flex max-w-screen-lg flex-col items-center px-8 py-16 md:py-20 lg:flex-row ">
        <div className=" mx-auto w-full text-left">
          <h2 className="font-header text-primary mb-4 text-3xl font-semibold uppercase sm:text-4xl lg:text-5xl">
            ABOUT
          </h2>
          <h4 className="font-header  pt-6 text-xl font-medium capitalize text-black sm:text-2xl lg:text-3xl">
            I'm Samuel Kariuki, a passionate Web Developer
          </h4>
          <p className="font-body text-grey-20 pt-6 text-lg leading-relaxed">
            Currently working as an electrical engineer and also do coding as a
            hobby. Web development opened a world of endless opportunities to
            bring ideas to life through code. I am proficient with HTML, vanilla
            css, javascript, React, node + Express, sass. For 3 years I have
            enjoyed coding as a hobby and this year, I made a decision to move
            to professional web development. I am fully self taught, and one who
            values effective communication, collaboration, teamwork and getting
            things done.
          </p>
          <div className=" mt-6 flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center space-x-2 sm:justify-start">
              <p className="font-body text-grey-20 text-lg font-semibold uppercase">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <IoIosArrowForward className="  text-primary text-2xl hover:scale-110 hover:text-yellow-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 pl-2 pt-5 sm:justify-start sm:pt-0">
              {socialLinks2.map(({ Icon, href }, index) => (
                <a href={href} target="_blank" rel="noreferrer" key={index}>
                  <Icon className=" text-primary text-2xl hover:scale-110 hover:text-yellow-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

//  <div
//       name="about"
//       className="h-screen w-full bg-gradient-to-b from-gray-800 to-black pt-16 text-white"
//     >
//       <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 pt-16">
//         <div className="pb-8">
//           <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
//             About
//           </p>
//         </div>
//         <p className=" mt-20 text-xl">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in fugit
//           quae laudantium quis adipisci rem at eligendi laboriosam aut velit
//           dicta, explicabo atque officia repellat provident fugiat earum
//           laborum. Dolor, quisquam fugiat distinctio iure, recusandae officiis
//           reprehenderit, ad impedit commodi quaerat perspiciatis fuga ab quis
//           hic ipsum inventore nulla.
//         </p>
//         <br />
//         <p className=" text-xl">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
//           voluptatem, dolor saepe temporibus culpa officia ut repudiandae
//           exercitationem pariatur aperiam quaerat nam debitis nobis. Facilis
//           fuga sit eos similique excepturi praesentium odit repellat amet,
//           quisquam debitis, aperiam, ratione molestiae consequatur! Nam
//           dignissimos facere quia ipsam nobis quod esse! Ut, eum!
//         </p>
//       </div>
//     </div>

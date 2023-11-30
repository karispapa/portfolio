import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const links = [
    {
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: 'https://www.linkedin.com/in/samuel-kariuki-210a358b/',
      style: 'rounded-tr-md',
    },
    {
      child: (
        <>
          Github: <FaGithub size={25} />
        </>
      ),
      href: 'https://github.com/karispapa',
    },
    {
      child: (
        <>
          Mail <HiOutlineMail size={25} />{' '}
        </>
      ),
      href: 'mailto:skariuki@gmail.com',
    },
    {
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />{' '}
        </>
      ),
      href: '/resume.pdf',
      download: 'download',
      style: 'rounded-br-md',
    },
  ]
  return (
    <div>
      <ul className=" fixed left-0 top-[35%] hidden flex-col  lg:flex">
        {links.map(({ child, href, download, style }, index) => (
          <li
            key={index}
            className={
              'ml-[-100px] flex w-40 items-center justify-between bg-gray-500 px-4 py-3 duration-300 hover:ml-[-10px] hover:rounded-md' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
              className="flex w-full items-center justify-between text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks

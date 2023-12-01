import { socialLinks } from '../utils/utils'

const SocialLinks = () => {
  return (
    <div>
      <ul className=" fixed left-0 top-[35%] hidden flex-col  lg:flex">
        {socialLinks.map(({ child, href, download, style }, index) => (
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

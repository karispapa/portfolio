import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const socialLinks = [
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
        Github <FaGithub size={25} />
      </>
    ),
    href: 'https://github.com/karispapa',
  },
  {
    child: (
      <>
        Whatsapp <FaWhatsapp size={25} />
      </>
    ),
    href: 'https://wa.me/254713281515',
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

export const socialLinks2 = [
  {
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/samuel-kariuki-210a358b/',
  },
  {
    Icon: FaGithub,
    href: 'https://github.com/karispapa',
  },
  {
    Icon: FaWhatsapp,
    href: 'https://wa.me/254713281515',
  },

  {
    Icon: HiOutlineMail,
    href: 'mailto:skariuki@gmail.com',
  },
]

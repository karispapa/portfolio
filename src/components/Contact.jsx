import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black pt-16
   md:h-screen"
    >
      <div
        className="mx-auto flex h-full w-full max-w-screen-lg 
      flex-col justify-center p-4 text-white "
      >
        <div className="pb-8 ">
          <p
            className="inline border-b-4 
          border-gray-500 p-2 text-4xl font-bold"
          >
            Contact
          </p>
          <p className="py-6">
            Please Fill the Form below to get in touch with me{' '}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/6ff0c4b9-3d5c-401a-858a-100c2f667a61"
            method="POST"
            className=" flex w-full flex-col space-y-4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="rounded-md border-2 bg-transparent p-2
               text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="rounded-md border-2 bg-transparent p-2
               text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="rounded-md border-2 bg-transparent p-2
               text-white focus:outline-none"
              placeholder="Enter Your Message"
            ></textarea>
            <button
              className="text-l mx-auto my-8 flex items-center rounded-full 
            bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white duration-300 hover:scale-110"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

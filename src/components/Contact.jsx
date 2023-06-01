import React from 'react'

const Contact = () => {
  return (
    <div className='text-white mx-auto max-w-screen-md py-48'>
        <p className='text-5xl text-center font-bold pb-5'>Contact</p>
        <p className='text-center pb-5'>Need to get in touch? Contact me!</p>

        <form action='#' className='space-y-5'>
            <div>
                <label htmlFor='email' className='block pb-2 font-medium text-sm'>Your Email *</label>
                <input type='email' id='email' className='w-full p-2.5 text-sm shadow-sm border border-gray-600 rounded-lg bg-neutral-800 placeholder-gray-400' placeholder='name@email.com' required></input>
            </div>

            <div>
                <label htmlFor='subject' className='block pb-2 font-medium text-sm'>Subject *</label>
                <input type='text' id='subject' className='w-full p-2.5 text-sm shadow-sm border border-gray-600 rounded-lg bg-neutral-800 placeholder-gray-400' placeholder='How may I help?' required></input>
            </div>

            <div>
              <label htmlFor='message' className='block pb-2 font-medium text-sm'>Message *</label>
              <textarea rows='6' id='message' className='w-full p-2.5 text-sm shadow-sm border border-gray-600 rounded-lg bg-neutral-800 placeholder-gray-400' placeholder='Comment here.' required></textarea>
            </div>
            <button type="submit" className='py-2 px-3 rounded-lg font-medium text-center bg-blue-700 transition-all hover:bg-blue-600 hover:scale-110'>Send</button>
        </form>
    </div>
  )
}

export default Contact
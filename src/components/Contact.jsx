import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-5xl mx-auto px-6 py-20 text-white'>

      <h1 className='text-6xl font-bold text-center mb-16'>
        Contact
      </h1>

      <div className='bg-white/5 border border-fuchsia-800 rounded-3xl p-10 backdrop-blur-md text-center'>

        <p className='text-gray-300 text-xl leading-9 mb-10'>
          Have feedback, suggestions, or ideas ?
          <br />
          Feel free to reach out.
        </p>

        <div className='space-y-8 text-lg'>

          <div>
            <h2 className='text-fuchsia-400 text-2xl font-bold mb-2'>
              Email
            </h2>

            <p className='text-gray-300'>
              anshsharma2625@gmail.com
            </p>
          </div>

          <div>
            <h2 className='text-fuchsia-400 text-2xl font-bold mb-2'>
              GitHub
            </h2>

            <p className='text-gray-300'>
              github.com/Ansh2625
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact

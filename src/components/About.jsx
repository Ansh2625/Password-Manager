import React from 'react'

const About = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-15 text-white'>

      <h1 className='text-6xl font-bold text-center mb-16'>
        About VaultX
      </h1>

      <div className='grid md:grid-cols-2 gap-8'>

        <div className='bg-white/5 border border-fuchsia-800 rounded-3xl p-8 backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-6 text-fuchsia-400'>
            What is VaultX?
          </h2>

          <p className='text-gray-300 leading-8 text-lg'>
            VaultX is a modern password manager built to securely store and manage credentials in a clean and responsive interface.
          </p>
        </div>

        <div className='bg-white/5 border border-fuchsia-800 rounded-3xl p-8 backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-6 text-fuchsia-400'>
            Technologies
          </h2>

          <ul className='text-gray-300 leading-8 text-lg space-y-2'>
            <li>• React.js</li>
            <li>• Tailwind CSS</li>
            <li>• Express.js</li>
            <li>• MongoDB</li>
          </ul>
        </div>

        <div className='bg-white/5 border border-fuchsia-800 rounded-3xl p-8 backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-6 text-fuchsia-400'>
            Features
          </h2>

          <ul className='text-gray-300 leading-8 text-lg space-y-2'>
            <li>• Password storage</li>
            <li>• Copy to clipboard</li>
            <li>• CRUD operations</li>
            <li>• Responsive design</li>
            <li>• Password visibility toggle</li>
          </ul>
        </div>

        <div className='bg-white/5 border border-fuchsia-800 rounded-3xl p-8 backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-6 text-fuchsia-400'>
            Purpose
          </h2>

          <p className='text-gray-300 leading-8 text-lg'>
            This project was created to practice full-stack development, API integration, database handling, and modern UI design.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About
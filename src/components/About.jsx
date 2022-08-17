import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vel nihil neque fugit, tempora obcaecati. Voluptatibus beatae, dicta quas amet consequatur necessitatibus unde magni veritatis est sapiente rerum ducimus numquam architecto, corporis perferendis, mollitia nemo eius odio. Fugit, eveniet architecto.
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias molestiae et sit? Explicabo natus fugiat numquam optio ullam. Impedit alias fugiat facere laborum ratione? Tenetur odio nemo, beatae incidunt consectetur non ducimus quaerat sint quidem sed consequuntur dignissimos commodi?    
            </p>

        </div>

    </div>
  )
}

export default About
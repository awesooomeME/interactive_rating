import Image from 'next/image';
import { useState } from 'react';

import { Overpass } from 'next/font/google';
import star from '../../public/icon-star.svg';
import thankYou from '../../public/illustration-thank-you.svg';

const overpass = Overpass({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  const [selected, setSelected] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);

  const submitForm = () => {
    if (selected == 0) return
    setSubmitted(true);
  }

  return (
    <main className={`${overpass.className} w-screen h-screen 
      overflow-hidden bg-very_dark_blue flex justify-center items-center`}>
      {isSubmitted ? 
        <div className='w-[90%] md:w-1/3 h-2/4 md:h-3/5 rounded-3xl
        bg-gradient-to-br from-medium_grey/10 to-dark_blue 
        px-5 md:px-20 pt-12 pb-10 flex flex-col justify-between'>
          <div className='flex justify-center md:mt-5'>
            <Image src={thankYou} alt='Thank You' className='w-auto h-[7em] md:h-[10em]'/>
          </div>
          <div className='flex justify-center'>
            <span className='bg-medium_grey/10 text-sm md:text-xl rounded-full 
              py-1 md:py-2 px-2 md:px-5 text-orange/80 font-light'>
              You selected {selected} out of 5
            </span>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl md:text-4xl text-white text-center'>
              Thank You!
            </h1>
            <h2 className='text-lg md:text-2xl text-medium_grey text-center'>
              We appreciate you taking the time to give a rating. If you ever need more support,
              don&apos;t hesitate to get in touch!
            </h2>
          </div>
        </div>
        :
        <div className='w-[90%] md:w-1/3 h-2/4 md:h-3/5 rounded-3xl
        bg-gradient-to-br from-medium_grey/10 to-dark_blue 
        px-5 md:px-20 pt-12 pb-10 flex flex-col justify-between'>
          {/* className='bg-medium_grey/20 rounded-full p-2 flex-none inline-block' */}
          <div >
            <Image src={star} alt="" className='h-9 md:h-10 w-auto bg-medium_grey/20 p-2 rounded-full'/>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-white text-2xl md:text-4xl'>
              How did we do?
            </h1>
            <h2 className='text-light_grey text-lg md:text-xl'>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve
              our offering!
            </h2>
          </div>
          <div className='flex justify-between'>
            {[1,2,3,4,5].map((rating) => (
              <div className={`p-5 ${rating == selected ? 'bg-orange text-white' : 'bg-light_grey'} 
                rounded-full w-10 h-10 md:w-20 md:h-20 flex justify-center 
                items-center cursor-pointer`}
                onClick={() => setSelected(rating)} key={rating}>
                {rating}
              </div>
            ))}
          </div>
          <button className='w-full py-3 bg-orange text-white hover:bg-white hover:text-orange
            focus:bg-white focus:text-orange rounded-full text-lg md:text-xl' onClick={() => submitForm()}>
            SUBMIT
          </button>
        </div>
      }
    </main>
  )
}

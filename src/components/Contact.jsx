import React from 'react'
import { useForm } from 'react-hook-form';
function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data) => window.location.href = `mailto:neerajkumarsharma013@gmail?subject=${data.subject}&body=Hi ,my name is ${data.Name}. ${data.Message}(${data.Email})`);


    return (
        <div className='h-screen flex relative  flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-14 md:top-20 lg:top-10   uppercase tracking-[20px] text-gray-500 text-2xl '>contact</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-1xl md:text-2xl xl:text-4xl space-y-0 md:space-y-0 font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#ae36ff]/40 underline'>Lets Talk.</span>
                </h4>
                <div className='space-y-1 flex flex-row items-end justify-evenly  '>
                    <div className='flex flex-col  text-center place-items-center space-y-4'>
                        <img src="3D-Call-Icon-PNG.png" alt="calls here" className='h-7 w-7 animate-pulse' />
                        <img src="mail.png" alt="calls here" className='h-10 w-10 animate-pulse' />
                        <img src="loc.png" alt="calls here" className='h-10 w-7 animate-pulse' />
                    </div>

                    <div className=' flex flex-col text-center items-center space-y-6'>
                        <div className='flex items-center space-x-5 justify-center'>

                            <p className='text-1xl md:text-2xl blur transition-all duration-300 ease-in-out select-none ' > +916350207562 </p>

                        </div>
                        <div className='flex items-center space-x-5 justify-center'>

                            <p className='text-1xl md:text-2xl '>neerajkumarsharma013@gmail.com </p>

                        </div>
                        <div className='flex items-center space-x-5  justify-center'>

                            <p className='text-1xl md:text-2xl '> Jaipur, Rajasthan </p>

                        </div>
                    </div>

                </div>


                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1   mx-auto'>
                    <div className='flex space-x-2'>
                        <input  {...register('Name')} placeholder='Name' required className='contactInput' type="text" />
                        <input  {...register('Email')} placeholder='Email' required className='contactInput' type="text" />
                    </div>
                    <input {...register('Subject')} placeholder='Subject ' className='contactInput' type="text" />
                    <textarea {...register('Message')} placeholder='Message' className='contactInput' />
                    <button type='submit' className='bg-[#ae36ff] py-5 px-10 rounded-md  font-bold text-lg'>Submit</button>
                </form>


            </div>
        </div>
    )
}

export default Contact

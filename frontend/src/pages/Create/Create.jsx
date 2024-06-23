import { useState } from 'react'
import Validation from '../../hook/validation'
import { Controller, useForm } from 'react-hook-form'
import IconSelect from './IconSelect'


const Create = () => {


    const { validateRequired } = Validation
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section>
            <div className=" flex flex-col items-center space-y-5 md:space-y-10 justify-center px-6 py-8 sm:pt-0  mx-auto min-h-screen lg:py-0">
                <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl ">
                    Create <span className='text-teal-500'>Question</span>
                </h1>

                <form className="bg-gray-800  rounded-lg shadow  border h-fit border-gray-700   space-y-4 flex flex-col justify-center md:space-y-6  overflow-hidden md:w-10/12 lg:w-4/6 w-full md:px-10 px-5 md:py-5 py-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex flex-col md:flex-row justify-between '>

                        {/*  icon select  */}
                        <div className=' md:w-1/2  md:px-5 my-5  relative m-[20px] '>
                            {/* <IconSelect iconSelect={iconSelect} /> */}
                            <Controller
                                name="icon"
                                control={control}
                                defaultValue={null}
                                render={({ field }) => <IconSelect {...field} />}
                            />
                        </div>

                        <div className='my-2 md:my-5 md:w-1/2 md:px-5 relative flex flex-col justify-center '>
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium  text-white">Title</label>
                            <input {...register('Title', { validate: (value) => validateRequired(value) })} type="Title" name="Title" id="Title" placeholder="Title" className=" border focus:outline-none focus:ring-2 focus:ring-teal-600  sm:text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " />
                            {errors.Title && <div className="col-span-2 absolute bottom-0 right-7">
                            <p className="text-red-500 text-end  -my-5 ">{errors.Title.message}</p>
                        </div>}
                        </div>
                    </div>

                    <div className=''>
                        <label htmlFor="message" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Question</label>
                        <textarea {...register('message', { validate: (value) => validateRequired(value) })} id="message" rows={10} className="max-h-[450px] min-h-36 block p-2.5 w-full text-base rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-600  border-gray-600 bg-gray-700 text-white" placeholder="Write your Question here..." defaultValue={""} />
                        
                    </div>
                    {errors.message && <div className="col-span-2 ">
                            <p className="text-red-500 text-end  -my-5 ">{errors.message.message}</p>
                        </div>}
                    <div>
                        <button type="submit" className="w-full  text-white mt-3  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700  ">Create</button>
                    </div>

                </form>
            </div>

        </section>
    )
}

export default Create
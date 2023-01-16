import React from 'react'
import Heading from './Heading'
// import {useNavigate} from 'react-router-dom'

const UserLogin = () => {
   const handleSubmit =async (e)=> {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        
      }
    });
    const json = await response.json()
    console.log(json)
   }
  return (
    <section name='contact' className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <Heading title='Login to your Account' />
          <div className="bg-light-bg p-6 max-w-[30rem] mx-auto rounded">
            <form action="#" onSubmit={handleSubmit}>
              
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="capitalize text-black mb-1">your email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="password" className="capitalize text-black mb-1">your password :</label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
              
              <div className='grid grid-rows-1 grid-flow-col gap-1'>
              <input type="submit" value="Login" name="submit"
              className="hidden lg:flex text-white text-center cursor-pointer bg-blue py-3 px-3 rounded
              hover:bg-black"/>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default UserLogin
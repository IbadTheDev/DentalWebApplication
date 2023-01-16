import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Form, Input, message} from "antd"
import Heading from './Heading'
import axios from 'axios'

const UserLogin = () => {
  const navigate = useNavigate()
   
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post('api/auth/login', values);
      if(res.data.success)
      {
        localStorage.setItem("token", res.data.token);
        message.success('Login Successfully');
        navigate("/");
      }
      else{
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error)
      message.error("Something went wrong")
    }
   
  }
  return (
    <section name='contact' className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <Heading title='Login to your Account' />
          <div className="bg-light-bg p-6 max-w-[30rem] mx-auto rounded">
            <Form action="#" onFinish={onfinishHandler}>
              
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="capitalize text-black mb-1">your email :</label>
                <Form.Item name="email">
                <Input
                  type="email"
                  placeholder="enter your email"
                  className="w-full p-3 outline-none"
                  required
                />
                </Form.Item>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="password" className="capitalize text-black mb-1">your password :</label>
                <Form.Item name="password">
                <Input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="w-full p-3 outline-none"
                  required
                />
                </Form.Item>
              </div>
              
              <div className='grid grid-rows-1 grid-flow-col gap-1'>
              <Input type="submit" value="Login" name="submit"
              className="hidden lg:flex text-white text-center cursor-pointer bg-blue py-3 px-3 rounded
              hover:bg-black"/>
              </div>
            </Form>
          </div>
        </div>
      </section>
  )
}

export default UserLogin
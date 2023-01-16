import React from 'react'
import Heading from './Heading'
import {useNavigate} from 'react-router-dom'
import {Form, Input, message } from 'antd';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate()
    const onfinishHandler = async (values) => {
      try {
        const res = await axios.post('/api/auth/register', values)
        if(res.data.success){
        message.success('Registered Successfully')
        navigate('/userLogin')
        }else{
          message.error(res.data.message)
        }
      } catch (error) {
        console.log(error)
        message.error('something went wrong')
        
      }
    };
  return (
    <>
    <section name='contact' className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <Heading title='Register Account' />
          <div className="bg-light-bg p-6 max-w-[30rem] mx-auto rounded">
            <Form action="#" onFinish={onfinishHandler}>
              <div className="flex flex-col mb-4">
                <label className="capitalize text-black mb-1">your name :</label>
                <Form.Item name="name">
                <Input
                  type="text"
                  placeholder="enter your name"
                  className="w-full p-3 outline-none"
                  required
                />
                </Form.Item>
              </div>
              <div className="flex flex-col mb-4">
                <label className="capitalize text-black mb-1">your email :</label>
                <Form.Item name="email">
                <Input
                  type="text"
                  placeholder="enter your email"
                  className="w-full p-3 outline-none"
                  required
                />
                </Form.Item>
              </div>
              <div className="flex flex-col mb-4">
                <label className="capitalize text-black mb-1">your password :</label>
                <Form.Item name="password">
                <Input
                  type="password"
                  placeholder="enter your Password"
                  className="w-full p-3 outline-none"
                  required
                />
                </Form.Item>
              </div>
              <div className="flex flex-col mb-6">
                <label className="capitalize text-black mb-1"
                  >Re-enter your password:</label
                >
                <Input
                   type="password"
                   placeholder="enter your password"
                   className="w-full p-3 outline-none"
                   required
                />
              </div>
              <div className='grid grid-rows-1 grid-flow-col gap-4'>
              <Input type="submit" value="Register" name="submit"
              className="hidden lg:flex text-white text-center cursor-pointer bg-blue py-3 px-3 rounded
              hover:bg-black"/>
              <Input onClick={() => {navigate('/userLogin')}} type="submit" value="Already have an account? Login." name="submit"
              className="hidden lg:flex text-white text-center cursor-pointer bg-blue py-3 px-3 rounded
              hover:bg-black"/>
              </div>
            </Form>
          </div>
        </div>
      </section>
      </>
  )
}

export default Register
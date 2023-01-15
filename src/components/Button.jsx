import React from 'react'

const Button = ({text,btnStyle}) => {
  return (
    <>
    <button className={`text-white bg-blue py-2 px-6 rounded hover:bg-black inline-block hover:duration-300 ${btnStyle}`}>{text}</button>
    </>
  )
}

export default Button

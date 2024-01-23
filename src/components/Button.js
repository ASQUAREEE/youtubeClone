import React from 'react'

const Button = (props) => {
  return (
    <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg border border-gray-400 '>{props.name}</button>
  )
}

export default Button
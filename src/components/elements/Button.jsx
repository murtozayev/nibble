import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={` ${className} bg-[#503E9D] `}>
        {children}
    </button>
  )
}

export default Button
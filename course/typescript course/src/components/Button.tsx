import React from 'react'

type buttonProps ={
    lable: string,
    onClick: ()=>void,
}

const Button: React.FC<buttonProps> = ({lable,onClick}) => {
  return (
    <div onClick={onClick}>
        {lable}
        

    </div>
  )
}

export default Button
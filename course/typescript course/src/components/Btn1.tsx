import React from 'react'

type buttonProps = {
    lable: string,
    data: string,
    action: ()=>void
}


const Btn1 = ({lable,data, action}:buttonProps) => {
  return (
    <button onClick={action}>
        {lable}
    </button>
  )
}

export default Btn1
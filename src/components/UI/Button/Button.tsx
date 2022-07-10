import React from 'react'

type ButtonProps = {
  children: string,
  totalCount: number | string,
  onClick: () => void,
}

export const Button: React.FC<ButtonProps> = ({children, totalCount, onClick}) => {
  return (
    <div>
      <button className="btn" disabled={totalCount === 0 && true} onClick={ onClick }>{children}</button>
    </div>
  )
};


import React from 'react'

interface Props {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<Props> = ({ children }):JSX.Element => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthWrapper

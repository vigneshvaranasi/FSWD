import React from 'react'
type oscarProps={
    children:React.ReactNode
}

export default function Oscar(props:oscarProps) {
  return (
    <div>{props.children}</div>
  )
}

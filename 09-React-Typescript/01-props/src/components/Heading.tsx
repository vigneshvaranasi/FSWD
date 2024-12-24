type headingProps={
    children: string
}

export default function Heading(props:headingProps) {
  return (
    <div>{props.children}</div>
  )
}

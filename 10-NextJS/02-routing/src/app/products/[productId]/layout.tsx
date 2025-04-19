export default function ProductsLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <h1 className='text-xl bg-slate-500'>This is from Products Layout</h1>
        {children}
      </body>
    </html>
  )
}
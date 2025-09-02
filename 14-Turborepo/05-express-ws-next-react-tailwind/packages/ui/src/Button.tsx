export function Button ({ content }: { content: string }) {
  return (
    <div>
      <button className='ui:border ui:border-blue-500 ui:hover:bg-blue-700 ui:text-white ui:font-bold ui:py-2 ui:px-4 ui:rounded ui:cursor-pointer'>
        {content}
      </button>
    </div>
  )
}
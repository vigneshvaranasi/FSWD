function Docs ({params}:{params:{slug:string[]}}) {

    const {slug} = params;
    if(slug?.length === 2){
        return (
            <div className='bg-[#000] h-screen'>
                <h1 className='text-center text-white text-lg pt-4'>
                Viewing Docs for Feature {slug[0]} and Concept {slug[1]}
                </h1>
            </div>
          );
    }
    else if(slug?.length === 1){
        return (
            <div className='bg-[#000] h-screen'>
                <h1 className='text-center text-white text-lg pt-4'>
                Viewing Docs for Feature {slug[0]}
                </h1>
            </div>
          );
    }

  return (
    <div className='bg-[#000] h-screen'>
        
      <h1 className='text-center text-white text-5xl pt-4'>
        This is Docs Page
      </h1>
    </div>
  )
}

export default Docs

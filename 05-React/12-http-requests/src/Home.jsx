import reactLogo from './assets/react.svg'

function Home(){
    return(
        <div className="p-5">
            <h1 className='text-center'>Welcome</h1>
            <div className='text-center p-5'>
                <img src={reactLogo} width={200} alt="" />
            </div>
            <p className='lead text-start pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti in excepturi mollitia voluptatem quidem laboriosam eum, architecto debitis itaque deleniti fuga officiis et voluptatum, incidunt reiciendis enim qui! Animi!</p>
            <p className='lead text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti in excepturi mollitia voluptatem quidem laboriosam eum, architecto debitis itaque deleniti fuga officiis et voluptatum, incidunt reiciendis enim qui! Animi!</p>
        </div>
    )
}

export default Home;
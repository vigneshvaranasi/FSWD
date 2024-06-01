import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Users from './Users';
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';
import image4 from './assets/4.png';
import image5 from './assets/5.png';

function App(){
    let users = [
      {name:"Vignesh",role:"Developer",image:image1},
      {name:"Eswar",role:"Designer",image:image2},
      {name:"Fakruddin",role:"Tester",image:image3},
      {name:"Pavan",role:"Developer",image:image4},
      {name:"Afzal",role:"R&D",image:image5},
      {name:"Susruth",role:"Tester",image:image1},
      {name:"Dhanush",role:"Developer",image:image2},
      {name:"Sai",role:"Designer",image:image3},
    ]
    return(
      <>
        <Navbar />
        <div className='container'>
        {
          users.map((user,index) => {
            return <Users data={user}  />
          })
        }
        </div>
        <Footer />
      </>
    )

}
export default App;
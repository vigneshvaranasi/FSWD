import './App.css';
import Header from './Header';
import Profile from './Profile';
import profilepic from './assets/3.png';
import laptop from './assets/laptop.png';
import blog from './assets/blog.png';
import india from './assets/india.png';


function App(){
  let Data =[
    {name: 'Mehul Kothari',heading:"News App using ReactJS (Parsing XML RSS feed to JSON)",des:"News App using ReactJS (Parsing XML to JSON) Photo by Christina Morillo from PexelsLive Demo:",date:"Aug 12, 2020 4:32",banner:laptop,profile:profilepic},
    {name: 'Mehul Kothari',heading:"Medium Like Blogging App Using Angular 9 and Firebase",des:"Creating a Medium-Like App using Angular 9 and Firebase Photo by Miguel Padriåån from PexelsLive Demo:",date:"Jun 10, 2020 10:59",banner:blog,profile:profilepic},
    {name: 'Mehul Kothari',heading:"COVOID 19 Tracker (Statistics) app using Angular",des:"COVID 19 Tracker (Statistics) app using Angular Dark Mode Everyone ks aware",date:"Apr 04, 2020 08:46",banner:india,profile:profilepic},
    
  ]
  return (
    <div className="App">
      <Header />
      <div className='container'>
        {
          Data.map((item,index)=>{
            return <Profile post={item} />
          })
        }
      </div>
    </div>
  );
}
export default App;

import './App.css';
import Agents from './components/Agents';
import Community from './components/Community';
import CoreValue from './components/CoreValue';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OurSectors from './components/OurSectors';
import Twopic from './components/Twopic';
import Video from './components/Video';

function App() {
  



  return (
    <div className="App">
     
      <Navbar/>
       <Video/>
      <Twopic/> 
    <CoreValue/> 
      <OurSectors/>
      <Agents/>
      <Community/>
      <Footer/>
      
      

    
          
         
  
      
    </div>
  );
}

export default App;

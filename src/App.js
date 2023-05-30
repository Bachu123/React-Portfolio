
import './App.css';
import Navbar from './Components/Navbar1';
import './bg1.png';
import './mubz.css'
import Button from './Components/Button';
function App() {
  return (
  <div className='Container'>
  <div className='Main'>
<Navbar/>
 </div>
 <div className='content'>
  <div className='Introduction'>
    <h1>Hi</h1>

  </div>
<Button  title="Connect With Me"/>
<a href= "https://drive.google.com/file/d/1fL33s82xlyzMuT20ilSA-WuXQwZ0yBWx/view?usp=share_link" download="">
  <Button className='btn2' title="Download CV"/></a>
<div className='img'><img src='http://surl.li/hhjex' alt=''></img></div>
 </div>
 </div>


  );
}

export default App;
import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,Redirect} from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Nav from './components/Common/Nav/nav';
import Alert from './components/Alert';
import Footer from './components/Common/Footer';


function App() {
  
  const[mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  const modeChange = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "lightgray";
      showAlert('Dark Mode has been enabled','success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode has been enabled','success')
    }
  }
  return (
    <>
    <div style={{position:'relative',minHeight:'100vh'}}>
      <BrowserRouter>
      <Nav logoTitle='TextUtils' about='About Us' mode={mode} modeChange={modeChange} />
      <Alert alert={alert}/>
            <Routes >
              <Route exact  path='/' element={<Home/>} ></Route>
              <Route exact path='/home' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/contact' element={<Contact/>}></Route>
            </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

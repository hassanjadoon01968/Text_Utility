import React,{useState} from 'react'
import Alert from '../../components/Alert';
import TextForm from '../../components/Common/TextForm';



const Home = () => {
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
        document.body.style.backgroundColor = "black";
        showAlert('Dark Mode has been enabled','success')
      }else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert('Light Mode has been enabled','success')
      }
    }
  return (
    <>
      <Alert alert={alert}/>
      <div className='container my-3' >
        <TextForm  showAlert={showAlert} heading="Write the text below"  />
      </div>
    </>
  )
}

export default Home

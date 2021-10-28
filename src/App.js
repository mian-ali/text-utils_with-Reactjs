import React, { useState } from 'react';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import NavBar from './component/NavBar';
import TextFrom from './component/TextForm';
import Alerts from './component/Alerts';
// import DarkMode from './component/DarkMode';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert = (message , type)=>{

    setAlert(
      {
        message:message,
        type:type
      })

      setTimeout(() => {
        
        setAlert(null)
      }, 1200);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')

      document.body.style.backgroundColor="#042743"
      showAlert("Dark Mode is Enable ","success")

    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode is Enable", "success")

    }
  }

  return (

    <Fragment>
     <NavBar title="Home" about="About us" mode={mode}  toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
     {/* <DarkMode /> */}

     {/* Text Form Div */}
     <div className="container">
     
     <TextFrom showAlert={showAlert} heading="Enter The Text analize Bellow" mode={mode}/>

     </div>
    </Fragment>
  );
}
export default App;

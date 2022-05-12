
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import React, {useState} from 'react'
import Alert from './components/Alert';
function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#012c3d';
      document.body.style.color = "white";
      showAlert("DARK mode has been ENABLED" , 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      showAlert("LIGHT mode has been ENABLED", 'success')
    }
  }

  const [alert, setAlert] = useState("Welcome to TEXT ANALYIZER");

  const showAlert = (message, type)=>{

        setAlert({
          type: type, 
          message: message
        })
  }


  return (
    <>
      <NavBar title='TextUtils' about='About Us' mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert} />
      <TextArea heading='Text Analyzer' />
      {/* <About/> */}
    </>
  );
}

export default App;

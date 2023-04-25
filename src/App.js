import React ,{useState} from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from './components/Form';
import Sorm from './components/Sorm';
import './App.css';

const API_KEY="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"
const { Configuration, OpenAIApi } = require("openai");

function App() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });


  const openai = new OpenAIApi(configuration);

  const [file,setFile]=useState("");

  function handleChange(e){
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  

  return (
    <div className="App">
      <>
      <Header/>
      <Navbar/>
     <h1>React App</h1>

     <input type="file" onChange={handleChange} />
            <img src={file} />
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Form/>
    <Sorm/>
     <Footer/>
     </>
    </div>
  );
}

export default App;

import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Preview from './components/Preview.jsx';
import Form from './components/Form.jsx';
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  return (
    <>
      <Header/>
      <div className="main-flex">
        <Form
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          setGeneralInfo={setGeneralInfo}
          setEducation={setEducation}
          setExperience={setExperience}
        />
        <Preview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </div>
      <Footer/>
    </>
  )
}

export default App

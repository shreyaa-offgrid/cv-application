import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Preview from './components/Preview.jsx';
import Form from './components/Form.jsx';
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([{ id: crypto.randomUUID() }]);
  const [experience, setExperience] = useState([{ id: crypto.randomUUID() }]);

  function handleSaveEntry(setInfo, id, data) {
    setInfo(prev => prev.map(e => (e.id === id ? { id, ...data } : e)));
  }

  function handleAddMore(setInfo) {
    setInfo(prev => [...prev, { id: crypto.randomUUID() }]);
  }

  return (
    <>
      <Header />
      <div className="main-flex">
        <Form
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          setGeneralInfo={setGeneralInfo}
          onSaveEntry={handleSaveEntry}
          onAddMore={handleAddMore}
          setEducation={setEducation}
          setExperience={setExperience}
        />
        <Preview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
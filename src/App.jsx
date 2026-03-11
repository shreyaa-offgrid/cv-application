import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Preview from './components/Preview.jsx';
import Form from './components/Form.jsx';
function App() {

  return (
    <>
      <Header/>
      <div className="main-flex">
        <Form/>
        <Preview/>
      </div>
      <Footer/>
    </>
  )
}

export default App

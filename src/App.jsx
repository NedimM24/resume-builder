import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import ResumeBuilder from './components/ResumeBuilder'

function App() {
  //
  const [resume, setResume] = useState({
    personalInfo: [],
    education: [],
    experience: []
  });


  return (
    <>
   
      <div className="app-container">
        <div className="left-panel">
          <h1>Resume Builder ⚙️</h1>
          <ResumeBuilder setResume={setResume} />
        </div>

        <div className="right-panel">
          <Display resume={resume}/>
        </div>
      </div>
    </>
  )
}

export default App
import './App.css'
import Display from './components/Display'
import ResumeBuilder from './components/ResumeBuilder'

function App() {
  return (
    <>
      <div className="app-container">
        <div className="left-panel">
          <ResumeBuilder />
        </div>

        <div className="right-panel">
          <Display />
        </div>
      </div>
    </>
  )
}

export default App
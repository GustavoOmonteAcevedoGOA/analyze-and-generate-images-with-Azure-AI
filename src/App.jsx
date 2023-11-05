import './App.css'

function App() {
  return (
    <>
      <div id="app">
        <header>
          <h1>Computer vision</h1>
        </header>
        <div className="main-form">
          <div className="input-section">
            <input type="text" name="input" 
              placeholder='Enter URL to analyze or textual prompt to generate an image'
            />
          </div>
          <div className='actions-section'>
            <button id="analyze">Analyze</button>
            <button id="generate">Generate</button>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default App
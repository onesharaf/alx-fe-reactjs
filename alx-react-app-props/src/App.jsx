import WelcomeMessage from './components/WelcomeMessage.jsx'
 import Header from './components/Header.jsx'
 import MainContent from './components/MainContent.jsx'
 import Footer from './components/Footer.jsx'
 
 import UserContext from './components/UserContext.js'
 import ProfilePage from './components/ProfilePage.jsx'
 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      
      <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      </div>

      <div>
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </div>
  
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    </>
  )
}

export default App;
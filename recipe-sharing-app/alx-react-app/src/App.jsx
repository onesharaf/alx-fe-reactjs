// src/App.jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';   // or './UserProfile'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      
      <UserProfile 
        name="Kale" 
        age="22" 
        bio="Learning React with ALX and enjoying Nairobi vibes" 
      />
      
      <Footer />
    </div>
  );
}

export default App;
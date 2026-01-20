import Header from './components/Header'
import MainContent from './components/MainContent'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'


const App = () => {

  const userData = {name: 'Jane Doe', email: "jane.doe@example.com", age: 15, bio: 'Loves hiking and photography'};
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserContext.Provider value={userData}>
        <ProfilePage  />
        <UserProfile />
      </UserContext.Provider>
      <Footer />
    </div>
  )
}

export default App
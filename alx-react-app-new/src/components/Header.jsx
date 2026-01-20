export default function Header() {
  return (
    <header style={{
      backgroundColor: '#1a237e',   // navy-ish
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}>
      <h1 style={{ margin: 0, fontSize: '2.4rem' }}>My Favorite Cities</h1>
    </header>
  )
}
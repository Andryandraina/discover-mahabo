import { useState } from 'react'

const theme = {
  colors: {
    light: { bg: '#ffffff', text: '#1f2937', primary: '#3b82f6', secondary: '#f3f4f6' },
    dark: { bg: '#1f2937', text: '#ffffff', primary: '#f59e0b', secondary: '#374151' }
  }
}

const styles = {
  container: (darkMode) => ({
    minHeight: '100vh',
    backgroundColor: darkMode ? theme.colors.dark.bg : theme.colors.light.bg,
    color: darkMode ? theme.colors.dark.text : theme.colors.light.text,
    transition: 'all 0.3s ease'
  }),
  
  header: {
    padding: '20px',
    textAlign: 'center',
    borderBottom: '1px solid #e5e7eb'
  },
  
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
    flexWrap: 'wrap'
  },
  
  navButton: (darkMode, isActive) => ({
    padding: '12px 24px',
    backgroundColor: isActive 
      ? (darkMode ? theme.colors.dark.primary : theme.colors.light.primary)
      : (darkMode ? theme.colors.dark.secondary : theme.colors.light.secondary),
    color: isActive ? '#fff' : (darkMode ? theme.colors.dark.text : theme.colors.light.text),
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.2s ease'
  }),
  
  section: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  
  themeButton: (darkMode) => ({
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px',
    backgroundColor: darkMode ? theme.colors.dark.primary : theme.colors.light.primary,
    color: darkMode ? '#000' : '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2rem'
  })
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  const sections = [
    { id: 'accueil', label: '🏠 Accueil' },
    { id: 'about', label: '📍 À propos' },
    { id: 'tourisme', label: '🌴 Tourisme' },
    { id: 'gastronomie', label: '🍛 Gastronomie' },
    { id: 'galerie', label: '📸 Galerie' },
    { id: 'contact', label: '📞 Contact' }
  ]

  const renderSection = () => {
    switch(activeSection) {
      case 'accueil':
        return (
          <div>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Bienvenue à Mahabo</h2>
            <p style={{lineHeight: '1.6'}}>
              Découvrez Mahabo, un district authentique de la région Menabe à Madagascar. 
              Terre des baobabs majestueux et de la culture Sakalava, Mahabo vous invite 
              à explorer ses trésors naturels et culturels.
            </p>
          </div>
        )
      case 'about':
        return (
          <div>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>À propos de Mahabo</h2>
            <p style={{lineHeight: '1.6'}}>
              Situé dans la région Menabe, Mahabo est un district riche en histoire et en traditions.
              Connu pour ses paysages spectaculaires et sa biodiversité unique.
            </p>
          </div>
        )
      default:
        return (
          <div>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Section en construction</h2>
            <p>Cette section sera bientôt disponible ! 🚧</p>
          </div>
        )
    }
  }

  return (
    <div style={styles.container(darkMode)}>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        style={styles.themeButton(darkMode)}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <header style={styles.header}>
        <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', margin: 0}}>
          Découvrez Mahabo 🌳
        </h1>
      </header>

      <nav style={styles.nav}>
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            style={styles.navButton(darkMode, activeSection === section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <main style={styles.section}>
        {renderSection()}
      </main>
    </div>
  )
}

export default App
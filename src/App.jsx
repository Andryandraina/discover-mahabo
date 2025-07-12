import { useState } from 'react'

const theme = {
  colors: {
    light: { bg: '#ffffff', text: '#1f2937', primary: '#3b82f6', secondary: '#f3f4f6', accent: '#10b981' },
    dark: { bg: '#1f2937', text: '#ffffff', primary: '#f59e0b', secondary: '#374151', accent: '#34d399' }
  }
}

const styles = {
  container: (darkMode) => ({
    minHeight: '100vh',
    backgroundColor: darkMode ? theme.colors.dark.bg : theme.colors.light.bg,
    color: darkMode ? theme.colors.dark.text : theme.colors.light.text,
    transition: 'all 0.3s ease'
  }),
  
  header: (darkMode) => ({
    padding: '20px',
    textAlign: 'center',
    borderBottom: `2px solid ${darkMode ? theme.colors.dark.secondary : theme.colors.light.secondary}`,
    background: `linear-gradient(135deg, ${darkMode ? '#374151' : '#f8fafc'}, ${darkMode ? '#1f2937' : '#ffffff'})`
  }),
  
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: '20px',
    flexWrap: 'wrap'
  },
  
  navButton: (darkMode, isActive) => ({
    padding: '12px 20px',
    backgroundColor: isActive 
      ? (darkMode ? theme.colors.dark.primary : theme.colors.light.primary)
      : (darkMode ? theme.colors.dark.secondary : theme.colors.light.secondary),
    color: isActive ? '#fff' : (darkMode ? theme.colors.dark.text : theme.colors.light.text),
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none'
  }),
  
  section: {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '0 auto'
  },
  
  card: (darkMode) => ({
    backgroundColor: darkMode ? theme.colors.dark.secondary : theme.colors.light.secondary,
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }),
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  },
  
  imageBox: (darkMode) => ({
    width: '100%',
    height: '200px',
    backgroundColor: darkMode ? theme.colors.dark.secondary : theme.colors.light.secondary,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    marginBottom: '15px'
  }),
  
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
    fontSize: '1.2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 1000
  }),
  
  button: (darkMode) => ({
    padding: '10px 20px',
    backgroundColor: darkMode ? theme.colors.dark.accent : theme.colors.light.accent,
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '10px'
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
    { id: 'economie', label: '💼 Économie' },
    { id: 'culture', label: '🎭 Culture' },
    { id: 'galerie', label: '📸 Galerie' },
    { id: 'contact', label: '📞 Contact' }
  ]

  const tourismeData = [
    { nom: 'Allée des Baobabs', description: 'Avenue légendaire des baobabs centenaires', emoji: '🌳' },
    { nom: 'Réserve de Kirindy', description: 'Faune endémique et baobabs sacrés', emoji: '🐆' },
    { nom: 'Fleuve Tsiribihina', description: 'Descente en pirogue traditionnelle', emoji: '🚣' },
    { nom: 'Villages Sakalava', description: 'Immersion culturelle authentique', emoji: '🏘️' }
  ]

  const gastronomieData = [
    { nom: 'Vary amin\'anana', description: 'Riz aux brèdes, plat traditionnel', emoji: '🍚' },
    { nom: 'Henan-kisoa', description: 'Porc aux légumes locaux', emoji: '🥩' },
    { nom: 'Fruits de baobab', description: 'Pain de singe, riche en vitamine C', emoji: '🥭' },
    { nom: 'Rhum arrangé', description: 'Avec fruits et épices locales', emoji: '🍹' }
  ]

  const economieData = [
    { secteur: 'Agriculture', description: 'Riz, maïs, manioc, haricots', emoji: '🌾' },
    { secteur: 'Élevage', description: 'Zébus, porcs, volailles', emoji: '🐄' },
    { secteur: 'Pêche', description: 'Fleuve Tsiribihina et lacs', emoji: '🐟' },
    { secteur: 'Artisanat', description: 'Vannerie, sculpture, textile', emoji: '🏺' }
  ]

  const cultureData = [
    { nom: 'Famadihana', description: 'Retournement des morts, tradition ancestrale', emoji: '🎭' },
    { nom: 'Hira gasy', description: 'Chants et danses traditionnels', emoji: '🎵' },
    { nom: 'Saokalava', description: 'Ethnie majoritaire, riche culture', emoji: '👥' },
    { nom: 'Fomba', description: 'Coutumes et traditions locales', emoji: '🏛️' }
  ]

  const renderSection = () => {
    switch(activeSection) {
      case 'accueil':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>
                🌳 Bienvenue à Mahabo 🌳
              </h2>
              <p style={{lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'center', marginBottom: '2rem'}}>
                Découvrez Mahabo, un district authentique de la région Menabe à Madagascar. 
                Terre des baobabs majestueux et de la culture Sakalava, Mahabo vous invite 
                à explorer ses trésors naturels et culturels.
              </p>
            </div>
            
            <div style={styles.grid}>
              <div style={styles.card(darkMode)}>
                <div style={styles.imageBox(darkMode)}>🌍</div>
                <h3>Localisation</h3>
                <p>District de la région Menabe, côte ouest de Madagascar</p>
              </div>
              
              <div style={styles.card(darkMode)}>
                <div style={styles.imageBox(darkMode)}>👥</div>
                <h3>Population</h3>
                <p>Environ 45 000 habitants, principalement Sakalava</p>
              </div>
              
              <div style={styles.card(darkMode)}>
                <div style={styles.imageBox(darkMode)}>🌡️</div>
                <h3>Climat</h3>
                <p>Tropical sec, saison sèche d'avril à octobre</p>
              </div>
            </div>
          </div>
        )

      case 'about':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>📍 À propos de Mahabo</h2>
              <p style={{lineHeight: '1.6', marginBottom: '1.5rem'}}>
                Situé dans la région Menabe, Mahabo est un district riche en histoire et en traditions.
                Connu pour ses paysages spectaculaires et sa biodiversité unique, c'est un territoire 
                où la nature et la culture se mélangent harmonieusement.
              </p>
              
              <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>🏛️ Histoire</h3>
              <p style={{lineHeight: '1.6', marginBottom: '1.5rem'}}>
                Mahabo tire son nom du mot sakalava signifiant "lieu sacré". Le district a une riche 
                histoire liée au royaume Sakalava et reste un centre culturel important de la région.
              </p>
              
              <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>🌿 Géographie</h3>
              <p style={{lineHeight: '1.6'}}>
                Traversé par le fleuve Tsiribihina, Mahabo offre des paysages variés : forêts sèches, 
                savanes, zones humides et la fameuse allée des baobabs. Le district couvre environ 
                4 000 km² de territoire préservé.
              </p>
            </div>
          </div>
        )

      case 'tourisme':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>🌴 Sites Touristiques</h2>
              <p style={{lineHeight: '1.6', marginBottom: '2rem'}}>
                Mahabo offre des expériences uniques pour les amateurs de nature et de culture authentique.
              </p>
            </div>
            
            <div style={styles.grid}>
              {tourismeData.map((site, index) => (
                <div key={index} style={styles.card(darkMode)}>
                  <div style={styles.imageBox(darkMode)}>{site.emoji}</div>
                  <h3 style={{marginBottom: '10px'}}>{site.nom}</h3>
                  <p style={{lineHeight: '1.5'}}>{site.description}</p>
                  <button style={styles.button(darkMode)}>En savoir plus</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 'gastronomie':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>🍛 Gastronomie Locale</h2>
              <p style={{lineHeight: '1.6', marginBottom: '2rem'}}>
                La cuisine de Mahabo reflète les traditions sakalava et l'abondance des produits locaux.
              </p>
            </div>
            
            <div style={styles.grid}>
              {gastronomieData.map((plat, index) => (
                <div key={index} style={styles.card(darkMode)}>
                  <div style={styles.imageBox(darkMode)}>{plat.emoji}</div>
                  <h3 style={{marginBottom: '10px'}}>{plat.nom}</h3>
                  <p style={{lineHeight: '1.5'}}>{plat.description}</p>
                  <button style={styles.button(darkMode)}>Recette</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 'economie':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>💼 Économie Locale</h2>
              <p style={{lineHeight: '1.6', marginBottom: '2rem'}}>
                L'économie de Mahabo repose sur l'agriculture, l'élevage et les activités traditionnelles.
              </p>
            </div>
            
            <div style={styles.grid}>
              {economieData.map((secteur, index) => (
                <div key={index} style={styles.card(darkMode)}>
                  <div style={styles.imageBox(darkMode)}>{secteur.emoji}</div>
                  <h3 style={{marginBottom: '10px'}}>{secteur.secteur}</h3>
                  <p style={{lineHeight: '1.5'}}>{secteur.description}</p>
                  <button style={styles.button(darkMode)}>Découvrir</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 'culture':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>🎭 Culture et Traditions</h2>
              <p style={{lineHeight: '1.6', marginBottom: '2rem'}}>
                La culture sakalava de Mahabo est riche en traditions, cérémonies et expressions artistiques.
              </p>
            </div>
            
            <div style={styles.grid}>
              {cultureData.map((tradition, index) => (
                <div key={index} style={styles.card(darkMode)}>
                  <div style={styles.imageBox(darkMode)}>{tradition.emoji}</div>
                  <h3 style={{marginBottom: '10px'}}>{tradition.nom}</h3>
                  <p style={{lineHeight: '1.5'}}>{tradition.description}</p>
                  <button style={styles.button(darkMode)}>Explorer</button>
                </div>
              ))}
            </div>
          </div>
        )

      case 'galerie':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>📸 Galerie Photos</h2>
              <p style={{lineHeight: '1.6', marginBottom: '2rem'}}>
                Découvrez Mahabo en images : paysages, culture, et moments de vie.
              </p>
            </div>
            
            <div style={styles.grid}>
              {['🌅', '🌳', '🏞️', '👥', '🎭', '🍛', '🐆', '⛵'].map((emoji, index) => (
                <div key={index} style={styles.card(darkMode)}>
                  <div style={styles.imageBox(darkMode)}>{emoji}</div>
                  <h3>Photo {index + 1}</h3>
                  <p>Description de l'image à venir</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 'contact':
        return (
          <div>
            <div style={styles.card(darkMode)}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>📞 Contact & Informations</h2>
              <p style={{lineHeight: '1.6', marginBottom: '2rem'}}>
                Planifiez votre visite à Mahabo ou obtenez plus d'informations.
              </p>
            </div>
            
            <div style={styles.grid}>
              <div style={styles.card(darkMode)}>
                <h3>🏛️ Mairie de Mahabo</h3>
                <p>District de Mahabo<br/>Région Menabe<br/>Madagascar</p>
                <button style={styles.button(darkMode)}>Contacter</button>
              </div>
              
              <div style={styles.card(darkMode)}>
                <h3>🏨 Hébergement</h3>
                <p>Hôtels et guesthouses<br/>Chez l'habitant<br/>Camping</p>
                <button style={styles.button(darkMode)}>Réserver</button>
              </div>
              
              <div style={styles.card(darkMode)}>
                <h3>🚌 Transport</h3>
                <p>Taxi-brousse depuis Morondava<br/>Location de véhicules<br/>Guides locaux</p>
                <button style={styles.button(darkMode)}>Organiser</button>
              </div>
              
              <div style={styles.card(darkMode)}>
                <h3>ℹ️ Office de Tourisme</h3>
                <p>Informations pratiques<br/>Circuits organisés<br/>Conseils voyage</p>
                <button style={styles.button(darkMode)}>Visiter</button>
              </div>
            </div>
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

      <header style={styles.header(darkMode)}>
        <h1 style={{fontSize: '3rem', fontWeight: 'bold', margin: 0, marginBottom: '0.5rem'}}>
          Découvrez Mahabo
        </h1>
        <p style={{fontSize: '1.2rem', opacity: '0.8', margin: 0}}>
          🌳 District de Menabe - Madagascar 🇲🇬
        </p>
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
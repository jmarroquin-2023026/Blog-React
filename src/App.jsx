import { useRoutes } from 'react-router-dom'
import { route } from './routes'
import Navbar from './components/NavBar'
import Sidebar from './components/SideBar'
import { Toaster } from 'react-hot-toast'

function App() {
  const elements = useRoutes(route)
  
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar fijo en la parte superior */}
      <Navbar />
      
      {/* Contenedor principal para sidebar y contenido */}
      <div className="flex flex-1 pt-16 overflow-hidden"> {/* pt-16 para el espacio del navbar */}
        {/* Sidebar fijo */}
        <Sidebar />
        
        {/* Área de contenido principal con scroll */}
        <main className="flex-1 overflow-y-auto p-5">
          {elements}
          <Toaster position="bottom-right" />
        </main>
      </div>
    </div>
  )
}

export default App
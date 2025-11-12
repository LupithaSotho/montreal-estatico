import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 🔹 Agregamos React Router
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

// 🔹 Importamos las nuevas páginas
import Clientes from "./pages/clientes";
import Galeria from "./pages/Galeria";
import Testimonios from "./pages/Testimonios";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* 🔹 Menú simple temporal (luego lo sustituimos por tu Navbar real) */}
      <nav style={{ padding: "15px", background: "#eee", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Inicio</Link>
        <Link to="/clientes" style={{ marginRight: "20px" }}>Clientes / Aliados</Link>
        <Link to="/galeria" style={{ marginRight: "20px" }}>Galería / Portafolio</Link>
        <Link to="/testimonios" style={{ marginRight: "20px" }}>Testimonios</Link>
      </nav>

      <Routes>
        {/* 🔹 Pantalla original de Vite */}
        <Route
          path="/"
          element={
            <>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }
        />

        {/* 🔹 NUEVAS SECCIONES */}
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
    </Router>
  )
}

export default App

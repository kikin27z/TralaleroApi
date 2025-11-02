import { NavLink, Outlet } from "react-router"
import '../App.css';

const MainLayout = () => {
  return (
    <main className="container">
      <nav>
        <ul className="nav-options">
          <li id="logo"><NavLink to="/">BrainrotPedia</NavLink></li>
          <li><NavLink to="/" style={({ isActive }) => ({
            borderBottom: isActive ? "1px solid #000" : "",
          })}>Inicio</NavLink></li>
          <li><NavLink to="/stats/" style={({ isActive }) => ({
            borderBottom: isActive ? "1px solid #000" : "",
          })}>Stats</NavLink></li>
        </ul>
      </nav>

      <Outlet />

      <footer>Hecho por: José Karim Franco Valencia</footer>
    </main>
  )
}

export default MainLayout
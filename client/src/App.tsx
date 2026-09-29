import './App.css'
import './components/NavBar.css'
import { NavBar } from './components/NavBar';
import { type NavBarItemProps } from './components/NavBarItem'
import { BrowserRouter } from "react-router-dom";

const navBarItems: NavBarItemProps[] = [
  { title: "Events", href: "/" },
  { title: "Venues", href: "/venues" },
  { title: "Pricing", href: "/pricing" },
];

function App() {
  return (
    <BrowserRouter>
      <header id='nav-bar-wrapper'>
        <NavBar navBarItems={navBarItems} />
      </header>
    </BrowserRouter>
  )
}

export default App

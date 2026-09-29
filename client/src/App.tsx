import './App.css'
import './components/NavBar/NavBar.css'
import { NavBar } from './components/NavBar/NavBar';
import { type NavBarItemProps } from './components/NavBar/NavBarItem'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryPage from './pages/CategoryPage';
import EntityPage from './pages/EntityPage';
import DivisionPage from './pages/DivisionPage';

const navBarItems: NavBarItemProps[] = [
  { 
    title: "Sports", 
    href: "/sports",
    dropDownItems: [
      {title: 'NBA', href: '/category/nba'},
      {title: 'NFL', href: '/category/nfl'},
      {title: 'MLB', href: '/category/mlb'},
      {title: 'UFC', href: '/category/ufc'},
    ]
   },
  { 
    title: "Concerts",
    href: "/concerts",
    dropDownItems: [
      {title: 'Country', href: '/category/country'},
      {title: 'Pop', href: '/category/pop'},
      {title: 'Rap', href: '/category/rap'},
      {title: 'Rock', href: '/category/rock'},
    ] 
  },
  { 
    title: "Shows",
    href: "/shows",
    dropDownItems: [
      {title: 'Comedy', href: '/category/comedy'},
      {title: 'Magic', href: '/category/magic'},
      {title: 'Theatre', href: '/category/theatre'},
      {title: 'Interviews', href: '/category/interviews'},
    ]
   },
];

function App() {
  return (
    <BrowserRouter>
      <header id='nav-bar-wrapper'>
        <NavBar navBarItems={navBarItems} />
      </header>
    <main>
      <Routes>
        <Route path='/:divisionSlug' element={<DivisionPage />}/>
        <Route path='/category/:categorySlug' element={<CategoryPage />} />
        <Route path='/tickets/:entityTitle' element={<EntityPage />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App

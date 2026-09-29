import './App.css'
import './components/NavBar/NavBar.css'
import { NavBar } from './components/NavBar/NavBar';
import { type NavBarItemProps } from './components/NavBar/NavBarItem'
import { BrowserRouter } from "react-router-dom";

const navBarItems: NavBarItemProps[] = [
  { 
    title: "Sports", 
    href: "/sports",
    dropDownItems: [
      {title: 'NBA', href: '/events/nba'},
      {title: 'NFL', href: '/events/nfl'},
      {title: 'MLB', href: '/events/mlb'},
      {title: 'UFC', href: '/events/ufc'},
    ]
   },
  { 
    title: "Concerts",
    href: "/concerts",
    dropDownItems: [
      {title: 'Country', href: '/events/country'},
      {title: 'Pop', href: '/events/pop'},
      {title: 'Rap', href: '/events/rap'},
      {title: 'Rock', href: '/events/rock'},
    ] 
  },
  { 
    title: "Shows",
    href: "/shows",
    dropDownItems: [
      {title: 'Comedy', href: '/events/comedy'},
      {title: 'Magic', href: '/events/magic'},
      {title: 'Theatre', href: '/events/theatre'},
      {title: 'Interviews', href: '/events/interviews'},
    ]
   },
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

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
      {title: 'NBA', link: '/events/nba'},
      {title: 'NFL', link: '/events/nfl'},
      {title: 'MBL', link: '/events/mlb'},
      {title: 'UFC', link: '/events/ufc'},
    ]
   },
  { 
    title: "Concerts",
    href: "/concerts",
    dropDownItems: [
      {title: 'Country', link: '/events/country'},
      {title: 'Pop', link: '/events/pop'},
      {title: 'Rap', link: '/events/rap'},
      {title: 'Rock', link: '/events/rock'},
    ] 
  },
  { 
    title: "Shows",
    href: "/shows",
    dropDownItems: [
      {title: 'Comedy', link: '/events/comedy'},
      {title: 'Magic', link: '/events/magic'},
      {title: 'Theatre', link: '/events/theatre'},
      {title: 'Interviews', link: '/events/interviews'},
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

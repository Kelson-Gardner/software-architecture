import { NavBarItem, type NavBarItemProps } from "./NavBarItem";

interface NavBarProps {
    navBarItems: NavBarItemProps[]
};

function NavBar(props: NavBarProps) {
    return(
    <>
        {props.navBarItems.map((item, index) => <NavBarItem key={index} {...item} />)}
    </>
    );
};

export default NavBar;
import { NavBarItem, type NavBarItemProps } from "./NavBarItem";

export interface NavBarProps {
    navBarItems: NavBarItemProps[]
};

export function NavBar(props: NavBarProps) {
    return(
        <nav className="nav-bar" aria-label="Primary navigation">
            <a className="nav-bar-brand" href="/" aria-label="System Architecture home">
                <span className="nav-bar-brand-text">Tix.</span>
            </a>

            <ul className="nav-bar-list">
                {props.navBarItems.map((item) => (
                    <NavBarItem key={item.href} {...item} />
                ))}
            </ul>

            <a className="nav-bar-action" href="/contact">
                Get Started
            </a>
        </nav>
    );
};

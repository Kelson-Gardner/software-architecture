import { NavLink } from "react-router-dom"

export interface NavBarItemProps {
    title: string,
    href: string,
    image_link?: string,
    style?: string,
    enabled?: boolean,
}

export function NavBarItem(props: NavBarItemProps) {
    if (props.enabled === false) {
        return (
            <li className="nav-bar-list-item">
                <span className="nav-bar-item is-disabled" aria-disabled="true">
                    {props.title}
                </span>
            </li>
        );
    }

    return (
        <li className="nav-bar-list-item">
            <NavLink
                className={({ isActive }) => `nav-bar-item${isActive ? ' is-active' : ''}`}
                to={props.href}
                end={props.href === "/"}
            >
                {props.title}
            </NavLink>
        </li>
    );
};

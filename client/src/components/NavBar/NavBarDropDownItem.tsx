import { NavLink } from 'react-router-dom';

export interface NavBarDropDownItemProps {
    title: string,
    href: string,
}

export function NavBarDropDownItem(props: NavBarDropDownItemProps) {
    return (
        <li className='nav-bar-drop-down-item'>
            <NavLink to={props.href}>{props.title}</NavLink>
        </li>
    );
}

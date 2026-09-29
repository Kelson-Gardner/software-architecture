import { NavLink } from 'react-router';

export interface NavBarDropDownItemProps {
    title: string,
    link: string,
}

export function NavBarDropDownItem(props: NavBarDropDownItemProps) {
    return (
        <li className='nav-bar-drop-down-item'>
            <NavLink to={props.link}>{props.title}</NavLink>
        </li>
    );
}

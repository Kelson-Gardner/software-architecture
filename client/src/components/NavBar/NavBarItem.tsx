import { NavLink } from "react-router-dom"
import { NavBarDropDownItem, type NavBarDropDownItemProps } from './NavBarDropDownItem';

export interface NavBarItemProps {
    title: string,
    href: string,
    dropDownItems?: NavBarDropDownItemProps[],
    image_link?: string,
    style?: string,
    enabled?: boolean,
}

export function NavBarItem(props: NavBarItemProps) {
    if (props.enabled === false) {
        return;
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
            {
            Boolean(props.dropDownItems?.length) &&
                <ul className='nav-bar-drop-down-items-wrapper'>
                    {props.dropDownItems?.map((dropDownItem) => (
                        <NavBarDropDownItem title={dropDownItem.title} href={dropDownItem.href} key={dropDownItem.href}/>
                    ))}
                </ul>
            }
        </li>
    );
};

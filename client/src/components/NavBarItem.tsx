import { NavLink } from "react-router-dom"

export interface NavBarItemProps {
    title: string,
    href: string,
    image_link?: string,
    style?: string,
    enabled?: boolean,
}

export function NavBarItem(props: NavBarItemProps) {
    return <NavLink to={props.href}>{ props.title }</NavLink>
};
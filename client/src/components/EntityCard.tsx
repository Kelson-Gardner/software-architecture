import { NavLink } from "react-router-dom";

export interface EntityCardProps {
    title: string,
    href: string,
    image_url?: string,
}

export function EntityCard(props: EntityCardProps) {
    return (
        <span className='entity-card'>
            <NavLink to={props.href}>{props.title}</NavLink>
        </span>
    );
}
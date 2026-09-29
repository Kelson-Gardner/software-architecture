import { NavLink } from "react-router-dom";

export interface CategoryCardProps {
    title: string,
    href: string,
    image_url?: string,
}

export function CategoryCard(props: CategoryCardProps) {
    return (
        <span>
            <NavLink to={props.href}>{props.title}</NavLink>
        </span>
    );
}
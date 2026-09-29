import { NavLink } from "react-router-dom";

export interface CategoryCardProps {
    title: string,
    href: string,
    image_url?: string,
}

export function CategoryCard(props: CategoryCardProps) {
    return (
        <article className='category-card'>
            <NavLink className='category-card-link' to={props.href}>
                <span className='category-card-title'>{props.title}</span>
                <span className='category-card-action'>Browse</span>
            </NavLink>
        </article>
    );
}

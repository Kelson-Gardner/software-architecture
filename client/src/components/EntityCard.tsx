import { NavLink } from "react-router-dom";

export interface EntityCardProps {
    title: string,
    href: string,
    image_url?: string,
}

export function EntityCard(props: EntityCardProps) {
    return (
        <article className='entity-card'>
            <NavLink className='entity-card-link' to={props.href}>
                <span className='entity-card-media' aria-hidden="true">
                    {props.image_url ? (
                        <img src={props.image_url} alt="" />
                    ) : (
                        <span>{props.title.slice(0, 2)}</span>
                    )}
                </span>
                <span className='entity-card-content'>
                    <span className='entity-card-kicker'>Tickets</span>
                    <span className='entity-card-title'>{props.title}</span>
                    <span className='entity-card-cta'>View events</span>
                </span>
            </NavLink>
        </article>
    );
}

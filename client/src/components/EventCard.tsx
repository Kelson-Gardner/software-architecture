import { NavLink } from "react-router-dom";

export interface EventCardProps {
    title: string,
    href: string,
    date: Date,
    location: string,
    starting_price?: number,
    image_url?: string,
}

export function EventCard(props: EventCardProps) {
    return (
        <span>
            <NavLink to={props.href}>{props.title}</NavLink>
        </span>
    );
}
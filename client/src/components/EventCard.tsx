import { NavLink } from "react-router-dom";

export interface EventCardProps {
    title: string,
    href: string,
    date: Date,
    location: string,
    startingPrice?: number,
    image_url?: string,
}

export function EventCard(props: EventCardProps) {
    const eventDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
    }).format(props.date);

    const eventTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    }).format(props.date);

    return (
        <article className='event-card'>
            <NavLink className='event-card-link' to={props.href}>
                <time className='event-card-date' dateTime={props.date.toISOString()}>
                    <span>{eventDate}</span>
                    <span>{eventTime}</span>
                </time>

                <span className='event-card-main'>
                    <span className='event-card-title'>{props.title}</span>
                    <span className='event-card-location'>{props.location}</span>
                </span>

                <span className='event-card-price'>
                    {props.startingPrice ? (
                        <>
                            <span>From</span>
                            <strong>${props.startingPrice}</strong>
                        </>
                    ) : (
                        <span>See tickets</span>
                    )}
                </span>
            </NavLink>
        </article>
    );
}

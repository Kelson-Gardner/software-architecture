import { type EventCardProps, EventCard } from "../components/EventCard";
// Entity will be a team, band, performer, etc.
function EntityPage() {
    const eventCards: EventCardProps[] = [
        {title: 'Utah Jazz @ Boston Celtics', href: '/events/1', date: new Date(), location: 'TD Garden - Boston, MA'},
        {title: 'Los Angeles Lakers @ Chicago Bulls', href: '/events/2', date: new Date(), location: 'United Center - Chicago, IL'},
        {title: 'John Mayer', href: '/events/3', date: new Date(), location: 'Delta Center - Salt Lake City, UT' },
        {title: 'Blink-182', href: '/events/4', date: new Date(), location: 'Mile High Stadium - Devner, CO'},
        {title: 'Shane Gillis', href: '/events/1', date: new Date(), location: 'Comedy Mothership - Autsin, TX'},
    ]

    return (
        <span>
            <ul>
                {eventCards.map((eventCard) => (
                    <li>
                        <EventCard key={eventCard.href} {...eventCard} />
                    </li>
                ))}
            </ul>
        </span>
    );
}

export default EntityPage;
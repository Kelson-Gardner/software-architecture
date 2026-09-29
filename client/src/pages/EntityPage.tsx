import { type EventCardProps, EventCard } from "../components/EventCard";
import './EntityPage.css';

const eventCards: EventCardProps[] = [
    {
        title: 'Utah Jazz @ Boston Celtics',
        href: '/events/1',
        date: new Date('2026-10-12T19:30:00'),
        location: 'TD Garden - Boston, MA',
        startingPrice: 99,
    },
    {
        title: 'Los Angeles Lakers @ Chicago Bulls',
        href: '/events/2',
        date: new Date('2026-11-04T18:00:00'),
        location: 'United Center - Chicago, IL',
        startingPrice: 200,
    },
    {
        title: 'John Mayer',
        href: '/events/3',
        date: new Date('2026-10-28T20:00:00'),
        location: 'Delta Center - Salt Lake City, UT',
        startingPrice: 450,
    },
    {
        title: 'Blink-182',
        href: '/events/4',
        date: new Date('2026-12-02T19:00:00'),
        location: 'Mile High Stadium - Denver, CO',
    },
    {
        title: 'Shane Gillis',
        href: '/events/5',
        date: new Date('2026-10-03T21:30:00'),
        location: 'Comedy Mothership - Austin, TX',
    },
]

// Entity will be a team, band, performer, etc.
function EntityPage() {
    const sortedEventCards = [...eventCards].sort(
        (firstEvent, secondEvent) => firstEvent.date.getTime() - secondEvent.date.getTime()
    );

    return (
        <section className='entity-page'>
            <header className='entity-profile'>
                <p className='entity-page-eyebrow'>Upcoming events</p>
                <h1>Utah Jazz</h1>
                <p className='entity-profile-summary'>
                    Compare dates, venues, and starting prices for available tickets.
                </p>
            </header>

            <section className='entity-events' aria-labelledby='entity-events-heading'>
                <div className='entity-events-header'>
                    <h2 id='entity-events-heading'>Events</h2>
                    <span>{sortedEventCards.length} available</span>
                </div>

                <ul className='event-cards-list'>
                    {sortedEventCards.map((eventCard) => (
                        <li key={eventCard.href}>
                            <EventCard {...eventCard} />
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default EntityPage;

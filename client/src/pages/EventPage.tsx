import { TicketCard, type TicketCardProps } from "../components/TicketCard";
import './EventPage.css';

const eventDate = new Date('2026-10-12T19:30:00');

const ticketCards: TicketCardProps[] = [
    {title: 'Section 18', quantity: 4, seatLabel: 'Row 12', price: 99},
    {title: 'Section 45', quantity: 4, seatLabel: 'Row 3', price: 50},
    {title: 'GA Lawn', quantity: 8, price: 37},
    {title: 'Section 2', quantity: 2, seatLabel: 'Row A', price: 299},
    {title: 'Section 20', quantity: 7, seatLabel: 'Row 18', price: 14},
];

function EventPage(){
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(eventDate);
    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
    }).format(eventDate);

    const sortedTicketCards = [...ticketCards].sort((firstTicket, secondTicket) => firstTicket.price - secondTicket.price);

    return (
        <section className='event-page'>
            <header className='event-profile'>
                <p className='event-page-eyebrow'>Tickets</p>
                <h1>Utah Jazz at Boston Celtics</h1>
                <div className='event-profile-meta'>
                    <time dateTime={eventDate.toISOString()}>{formattedDate} at {formattedTime}</time>
                    <span>TD Garden - Boston, MA</span>
                </div>
            </header>
            <section className='ticket-listing' aria-labelledby='ticket-listing-heading'>
                <div className='ticket-listing-header'>
                    <h2 id='ticket-listing-heading'>Available tickets</h2>
                    <span>{sortedTicketCards.length} listings</span>
                </div>
                <ul className='ticket-cards-list'>
                    {sortedTicketCards.map((ticketCard) => (
                        <li key={`${ticketCard.title}-${ticketCard.seatLabel ?? 'general'}-${ticketCard.price}`}>
                            <TicketCard {...ticketCard} />
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default EventPage;

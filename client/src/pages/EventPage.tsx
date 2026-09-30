import { TicketCard, type TicketCardProps } from "../components/TicketCard";

function EventPage(){
    const ticketCards: TicketCardProps[] = [
        {title: 'Section 18', quantity: 4, price: 99},
        {title: 'Section 45', quantity: 4, price: 50},
        {title: 'GA Lawn', quantity: 8, price: 37},
        {title: 'Section 2', quantity: 2, price: 299},
        {title: 'Section 20', quantity: 7, price: 14},
    ];
    return (
        <span>
            <ul>
                {ticketCards.map((ticketCard, index) => (
                    <li>
                        <TicketCard key={index} {...ticketCard} />
                    </li>
                ))}
            </ul>
        </span>

    );
}

export default EventPage;
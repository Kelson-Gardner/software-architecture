export interface TicketCardProps {
    title: string,
    price: number,
    quantity: number,
    // Probably need to think of a better name. 
    // This will be the row and potentially seat number? Optional because of general admission?
    seatLabel?: string,
    onSelect?: () => void
}

export function TicketCard(props: TicketCardProps) {
    return (
        <article className='ticket-card'>
            <button className='ticket-card-button' type='button' onClick={props.onSelect}>
                <span className='ticket-card-main'>
                    <span className='ticket-card-title'>{props.title}</span>
                    <span className='ticket-card-details'>
                        <span>{props.quantity} {props.quantity === 1 ? 'ticket' : 'tickets'}</span>
                        {props.seatLabel && <span>{props.seatLabel}</span>}
                    </span>
                </span>

                <span className='ticket-card-price'>
                    <span>Each</span>
                    <strong>${props.price}</strong>
                </span>
            </button>
        </article>
    );
}

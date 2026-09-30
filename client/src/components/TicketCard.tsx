export interface TicketCardProps {
    title: string,
    price: number,
    quantity: number,
    // Probably need to think of a better name. 
    // This will be the row and potentially seat number? Optional because of general admission?
    seatLabel?: string,
}

export function TicketCard(props: TicketCardProps) {
    return (
        <div>{props.title} ${props.price} {props.quantity}</div>
    );
}
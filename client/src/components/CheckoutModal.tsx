import { Modal } from "./Modal"; 
import type { TicketCardProps } from "./TicketCard";

interface CheckoutModalProps {
    isOpen: boolean,
    ticket: TicketCardProps | null,
    onClose: () => void
}

function CheckoutModal({isOpen, ticket, onClose}: CheckoutModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='checkout-modal-content'>
                <div>
                    <p className='checkout-modal-eyebrow'>Checkout</p>
                    <h2>{ticket?.title}</h2>
                </div>

                <div className='checkout-modal-details'>
                    <span>{ticket?.quantity} {ticket?.quantity === 1 ? 'ticket' : 'tickets'}</span>
                    {ticket?.seatLabel && <span>{ticket.seatLabel}</span>}
                </div>

                <div className='checkout-modal-price'>
                    <span>Total</span>
                    <strong>${ticket ? ticket.price * ticket.quantity : 0}</strong>
                </div>

                <button className='checkout-modal-close' type='button' onClick={onClose}>
                    Close
                </button>
            </div>
        </Modal>
    );
}

export default CheckoutModal;

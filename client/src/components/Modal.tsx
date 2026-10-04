import type { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal(props: ModalProps) {
    if (!props.isOpen) return null;
    return (
        <div className="modal-backdrop" onClick={props.onClose}>
            <div
                className="modal"
                onClick={(event) => event.stopPropagation()}
            >
                {props.children}
            </div>
        </div>
  );
}
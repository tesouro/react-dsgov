import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título da Modal */
    title?: string;
    /** Se mostra ou não o botão de fechar */
    showCloseButton?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>> & {
    Body: React.ForwardRefExoticComponent<import("./ModalBody/ModalBody").ModalBodyProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<import("./ModalFooter/ModalFooter").ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
};
export default _default;

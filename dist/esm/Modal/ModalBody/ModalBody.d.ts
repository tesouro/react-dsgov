import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../../IMtProps';
export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se a modal está carregando. */
    loading?: boolean;
}
declare const ModalBody: React.ForwardRefExoticComponent<ModalBodyProps & React.RefAttributes<HTMLDivElement>>;
export default ModalBody;

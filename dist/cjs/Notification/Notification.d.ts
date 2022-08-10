import '@govbr-ds/core/dist/core.min.css';
import React from 'react';
import IMtProps from '../IMtProps';
export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Nome no cabeçalho da notificação */
    name?: string;
    /** E-mail no cabeçalho da notificação */
    email?: string;
    /** Se está escondido ou não */
    hidden?: boolean;
}
declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
export default Notification;

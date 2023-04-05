import '@govbr-ds/core/dist/components/notification/notification.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import AnyAttribute from 'react-any-attr';

export interface NotificationProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Nome no cabeçalho da notificação */
    name?: string;
    /** E-mail no cabeçalho da notificação */
    email?: string;
    /** Se está escondido ou não */
    hidden?: boolean;
} 

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
    ({className, children, name, email, hidden = false, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);
        

        return (
            <AnyAttribute attributes={{
                'aria-hidden': hidden
            }}>
                <div
                    ref={ref}
                    className={classNames(
                        'br-notification',
                        className,
                        ...mtProps
                    )}
                    {...hidden && {hidden: 'hidden'}}
                    {...spreadProps}
                    
                >
                    {(name || email) &&
                        <div className="notification-header">
                            <div className="row">
                                <div className="col-10">{name && <span className="text-bold">Fulano da Silva</span>}{name && email && <br/>}{email &&<small>nome.sobrenome@dominio.gov</small>}</div>
                                <div className="col-2">
                                    <div className="close text-right">
                                        <button className="br-button circle small" type="button" aria-label="Fechar"><i className="fas fa-times" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="notification-body">
                        {children}
                    </div>
                </div>
            </AnyAttribute>
        );
    }
); 

Notification.displayName = 'Notification';

export default Notification;
import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';

interface NotificationProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    name?: string;
    email?: string;
} 

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
    ({className, children, name, email, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'br-notification',
                    className,
                    ...mtProps
                )}
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
                
                {children}
            </div>
        );
    }
); 

Notification.displayName = 'Notification';

export default Notification;
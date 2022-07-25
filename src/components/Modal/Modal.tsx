import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Container from '../Container';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import Button from '../Button';

interface ModalProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título da Modal */
    title?: string
    /** Se mostra ou não o botão de fechar */
    showCloseButton?: boolean
} 

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
    ({className, children, title, showCloseButton = false, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'br-modal',
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                <Container fluid p={1} p-sm={4}>
                    {(title || showCloseButton) && 
                        <div className="br-modal-header">
                            {title &&
                                <div className="br-modal-title" title={title}>{title}</div>
                            }
                            {showCloseButton &&
                                <Button circle small 
                                    className="close" 
                                    data-dismiss="br-modal"
                                    aria-label="Close"
                                    icon="fas fa-times"
                                />
                            }
                        </div>
                    }
                    {children}
                </Container>
                
            </div>
        );
    }
); 

Modal.displayName = 'Modal';

export default Object.assign(Modal, {
    Body: ModalBody,
    Footer: ModalFooter
});
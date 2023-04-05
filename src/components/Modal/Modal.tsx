import '@govbr-ds/core/dist/components/modal/modal.min.css';
import '@govbr-ds/core/dist/components/scrim/scrim.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../IMtProps';
import { useSpreadProps } from '../Util/useSpreadProps';
import { useMtProps } from '../Util/useMtProps';
import Container from '../Container';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import Button from '../Button';
import CustomTag from '../CustomTag/CustomTag';

export interface ModalProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Título da Modal */
    title?: string
    /** Se mostra ou não o botão de fechar */
    showCloseButton?: boolean
    /** Se a modal é envolvida com um scrim. */
    useScrim?:boolean
    /** Se a modal está aberta. */
    modalOpened?:boolean
    /** Evento a ser executado ao clicar no botão de fechar */
    onCloseButtonClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
} 

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
    ({className, children, title, showCloseButton = false, useScrim = false, modalOpened = false, onCloseButtonClick = () => {/** */}, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <CustomTag 
                tagName={useScrim && 'div'}
                className={classNames(
                    'br-scrim-util',
                    'foco',
                    {'active' : modalOpened}
                )}
            >
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
                                    <Button onClick={onCloseButtonClick} circle small 
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
            </CustomTag>
        );
    }
); 

Modal.displayName = 'Modal';

export default Object.assign(Modal, {
    Body: ModalBody,
    Footer: ModalFooter
});
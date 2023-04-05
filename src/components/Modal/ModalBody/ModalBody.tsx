import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';

export interface ModalBodyProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {
    /** Se a modal está carregando. */
    loading?: boolean
} 

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
    ({className, children, loading = false, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'br-modal-body',
                    (loading && 'is-loading'),
                    className,
                    ...mtProps
                )}
                {...spreadProps}
                
            >
                {children}
            </div>
        );
    }
); 

ModalBody.displayName = 'ModalBody';

export default ModalBody;
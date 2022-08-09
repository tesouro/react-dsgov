import '@govbr-ds/core/dist/core.min.css';

import classNames from 'classnames';
import React from 'react';
import IMtProps from '../../IMtProps';
import { useSpreadProps } from '../../Util/useSpreadProps';
import { useMtProps } from '../../Util/useMtProps';

interface ModalFooterProps  extends React.HTMLAttributes<HTMLDivElement>, IMtProps {

} 

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
    ({className, children, ...props}, ref) => {
        const mtProps = useMtProps(props);
        const spreadProps = useSpreadProps(props);

        return (
            <div
                ref={ref}
                className={classNames(
                    'br-modal-footer',
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

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;